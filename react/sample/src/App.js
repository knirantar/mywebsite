import React from 'react';
import './App.css';
import Navbar from './components/Homepage/Navbar'
import Mainpage from './components/Homepage/Mainpage'
import {BrowserRouter as Router,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Mainpage></Mainpage>
      </div>
    </Router>
  );
}

export default App;
