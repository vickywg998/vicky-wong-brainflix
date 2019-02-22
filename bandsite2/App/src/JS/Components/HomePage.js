import React, { Component } from 'react';

import Header from '../Header'
import Main from '../Main'
import Section from '../Section'
import CommentObjs from '../Components/Section/CommentObjs'
import axios from 'axios';
import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";

class HomePage extends Component {


  render() {
    return (
      <div>
       
        <Main />
        <Section commentObjs={CommentObjs} />
        <Link to="/">Home</Link>

      </div>
    )
  }
}

export default HomePage;
