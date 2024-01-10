import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import './App.css'
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
function App() {
  

  return (
    <>
      <div id="container">
     <div><NavBar/></div>
    
        <div id="main-section">
        <Routes>

          <Route path= "/home" element= {<Home/>}/> 
        <Route path= "/blue" element={<Blue/>}/> 
        <Route path= "/Red" element ={<Red/>}/> 
        </Routes>
        </div>
    </div>
    </>
  )
}

export default App
