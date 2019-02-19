import React, { Component } from 'react';

import './App.css';
import Header from './JS/Header'
import Main from './JS/Main'
import Section from './JS/Section'
import cardImages from './cardImages'
import CommentObjs from '../src/JS/Section/CommentObjs'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Main />
      <Section cardImages={cardImages} commentObjs={CommentObjs}/>
      </div>
    )
  }
}

export default App;

