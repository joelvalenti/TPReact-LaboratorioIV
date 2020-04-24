import React, { Component } from 'react';
import './assets/css/App.css';
import { Switch, Route } from 'react-router-dom';
import  Home from './components/Home';
import  Productos  from './components/Productos';
import  Details from './components/Details';
import  DondeEstamos from './components/DondeEstamos';
class App extends Component{

  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/productos" component={Productos}></Route>
        <Route exact path="/details/:id" component={Details}></Route>
        <Route exact path="/dondeEstamos" component={DondeEstamos}></Route>
      </Switch>
    )
  }
}

export default App;
