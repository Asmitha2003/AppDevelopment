import React,{useState} from 'react'
import Chart from "react-apexcharts";
import './Graph.css'
export default function Graph() {
    const [state,setState]=useState({
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              },
              colors: ["black","black","black","black","black","black"],       
            },
            series: [
              {
                name: "series-1",
                data: [2.5,1.7,2.1,3.4,4,3]
              }
            ]
          }
    )
  return (
    <div className='chart'>
        <div className='row'>
            <div className='col-4'>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="1000"
              height="500"
              columnWidth="70%"
            />
            </div>
        </div>
    </div>
  )
}
