import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import './History.css';
import Nave from './Nave';
import axios from 'axios';

export default function History() {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [], 
      },
      colors: ["black", "black", "black", "black", "black", "black"],
    },
    series: [
      {
        name: "series-1",
        data: [], 
      }
    ]
  });

  useEffect(() => {
    
    axios.get(`http://localhost:8080/auth/history/${username}`) 
      .then((response) => {
        const data = response.data;
        const dates = data.map(entry => entry.date);
        const dailyTotals = data.map(entry => entry.dailyTotal);
        
        setChartData(prevData => ({
          ...prevData,
          options: {
            ...prevData.options,
            xaxis: {
              ...prevData.options.xaxis,
              categories: dates,
            }
          },
          series: [
            {
              name: "series-1",
              data: dailyTotals,
            }
          ]
        }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="hisfull">
      <div className='chart'>
        <div className='row'>
          <div className='col-4'>
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="area"
              width="900"
              height={400}
            />
          </div>
        </div>
      </div>
      <Nave />
    </div>
  
  );
}
