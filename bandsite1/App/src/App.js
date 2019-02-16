import React, { Component } from 'react';

import './App.css';
import Header from './JS/HeaderContainer/Header'
import Main from './JS/Main/Main'
import Section from './JS/Section/Section'
import CardList from '../src/JS/Sidebar/CardList'
import cardImages from './cardImages'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Main />
      <Section cardImages={cardImages}/>
      </div>
    )
  }
}

export default App;
