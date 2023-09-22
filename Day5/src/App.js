
import './App.css';
import Register from './Components/Assets/Loginform/Register';
import Login from './Components/Assets/Loginform/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Assets/Loginform/HomePage';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
          </Routes>
          </BrowserRouter> 
    </div>
  );
}

export default App;
