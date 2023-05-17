import React, { Component } from 'react';
import './App.css';
import General from "./components/general-information.js"
import Education from "./components/education-information.js"
import Experience from "./components/experience-information.js"
import styles from "./styles/myStyle.css"




function App() {
  return (
    <div className="App">
      <h1 className='appTitle'>Create Your Cv App</h1>
     
      <General />
  
      <Education />
      <Experience />
      
    </div>
  );
}

export default App;
