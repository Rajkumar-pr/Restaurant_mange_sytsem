import React from 'react'
import Signup from './aunthetication/Signup';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './aunthetication/Login';
import Home from './Home';
import Footer from './Footer';
import Menu from './Menu';
import About from './About';
import Feedback from './Feedback';
import Memocount from './Memocount';
import Todos from './Todos';
import { Provider } from 'react-redux';
import store from './store';
import Admin from './Admin';
import Reviews from './Reviews';
import { useSelector } from 'react-redux';
import TotalBill from './TotalBill';
function App() {
  
  return (
    <div>
      <BrowserRouter>
   
      <Routes>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/bill" element={<TotalBill/>}/>
      </Routes>
     
      </BrowserRouter>
    
    </div>
  )
}

export default App
