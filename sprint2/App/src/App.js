import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header'
import Section from './Components/Section'
import HomePage from './HomePage'
import VideoList from './Components/VideoList'
import Upload from './Components/Upload'
import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";
import axios from 'axios';



class App extends Component {



  render() {
    return (
      <div>  
    <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/videos/:id"component={HomePage}  render={(props => {
            return <HomePage {...props} />
          })} />
          <Route path="/upload" component={Upload} />

        </Switch>
      </div>
    )
  }
}

export default App;

