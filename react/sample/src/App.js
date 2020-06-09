import React from 'react';
import './App.css';
import Navbar from './components/Homepage/Navbar'
import Mainpage from './components/Homepage/Mainpage'
import Auth from './components/Authentication/Auth'
import SignedIn from './components/Authentication/SignedIn'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Navbar} />
        <Route path="/" exact component={Mainpage} />
        <Route path="/signin" component = {Auth} />
        <Route path="/user" render={(props) => <SignedIn {...props}/>} />
      </div>
    </Router>
  );
}

export default App;
