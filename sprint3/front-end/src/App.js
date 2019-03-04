import React, { Component } from 'react';
import './App.css'
import Header from './Components/Header'
import HomePage from './Components/HomePage'
import Upload from './Components/Upload'
import {  Switch, Route} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div>  
    <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/videos/:id" component={HomePage} 
                 render={(props => {return <HomePage {...props} />})} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </div>
    )
  }
}

export default App;

