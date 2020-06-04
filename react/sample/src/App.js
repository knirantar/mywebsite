import React from 'react';
import './App.css';
import Auth from './components/Auth'
import Navbar from './components/Homepage/Navbar'
import Mainpage from './components/Homepage/Mainpage'
import {BrowserRouter as Router,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Mainpage></Mainpage>
        <Route path="/signin" component ={Auth}/>
      </div>
    </Router>
  );
}

export default App;
