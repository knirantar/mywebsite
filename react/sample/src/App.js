import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MenuComponent from './components/MenuComponent'
import {dish} from './shared/dish'
import {BrowserRouter} from 'react-router-dom'

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      dishes:dish
    };

  }
  render()
  {
  return (
      <div className="App">
        <HeaderComponent />
        <MenuComponent dishes = {this.state.dishes} />
        <FooterComponent />
      </div>
  );
}
}

export default App;
