import React, { Component } from 'react';

import './App.css';
import Header from './JS/Header'
import Main from './JS/Main'
import Section from './JS/Section'
import cardImages from './JS/Components/Sidebar/cardImages'
import CommentObjs from '../src/JS/Components/Section/CommentObjs'
import Upload from './JS/Components/UploadPage/Upload'
import HomePage from './JS/Components/HomePage'
import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>  
    <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </div>
    )
  }
}

export default App;

