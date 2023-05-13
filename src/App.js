import React, { Component } from 'react';
import './App.css';
import General from "./components/general-information.js"
import Education from "./components/education-information.js"
import Experience from "./components/experience-information.js"




function App() {
  return (
    <div className="App">
      <h1>Cv app</h1>
      <General />
      <Education />
      <Experience />
      
    </div>
  );
}

export default App;
