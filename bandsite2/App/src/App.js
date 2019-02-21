import React, { Component } from 'react';

import './App.css';
import Header from './JS/Header'
import Main from './JS/Main'
import Section from './JS/Section'
import cardImages from './cardImages'
import CommentObjs from '../src/JS/Components/Section/CommentObjs'
import Upload from './JS/Components/UploadPage/Upload'
import Home from './JS/Components/Home'
import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Main />
      <Section cardImages={cardImages} commentObjs={CommentObjs}/>
<BrowserRouter>
 <Switch>
 <Route path="/home" component={Home} />
 <Route path="/upload" component={Upload} />
 </Switch>
 </BrowserRouter>
 
      </div>
    )
  }
}

export default App;

