
import './App.css';
import TodayPage from './Components/Assets/Loginform/TodayPage';
import Login from './Components/Assets/Loginform/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Assets/Loginform/HomePage';
import About from './Components/Assets/Loginform/About';
import Nave from './Components/Assets/Loginform/Nave';
import Graph from './Components/Assets/Loginform/Graph';
import WaterIntakeCalculator from './Components/Assets/Loginform/WaterIntakeCalculator';
import Register1 from './Components/Assets/Loginform/Register1';
import Faq from './Components/Assets/Loginform/Faq';
import Feedback from './Components/Assets/Loginform/Feedback';


function App() {
  return (
    <div className="App">

 <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register1" element={<Register1/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/today" element={<TodayPage/>}/>
        <Route path="/graph" element={<Graph/>}/>
        <Route path="/cal" element={<WaterIntakeCalculator/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
          </Routes>
             <Nave/>   
  </BrowserRouter> 
 
    </div>
  );
}


export default App;
