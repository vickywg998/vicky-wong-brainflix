import React, { Component } from 'react';

import './App.css';
import Header from './JS/HeaderContainer/Header'
import Main from './JS/Main/Main'
import Section from './JS/Section/Section'
import Sidebar from './JS/Sidebar/CardList'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Main />
      <Section/>
      
      </div>
    )
  }
}

export default App;
