import React, { Component } from 'react';

import './App.css';
import Header from './JS/Header'
import Main from './JS/Main'
import Section from './JS/Section'
import Upload from './JS/Components/UploadPage/Upload'
import HomePage from './JS/Components/HomePage'
import VideoList from './JS/Components/Sidebar/VideoList'
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

