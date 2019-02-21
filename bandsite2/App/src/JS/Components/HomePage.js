import React, { Component } from 'react';

import Header from '../Header'
import Main from '../Main'
import Section from '../Section'
import cardImages from '../Components/Sidebar/cardImages'
import CommentObjs from '../Components/Section/CommentObjs'
// import Upload from './UploadPage/Upload'

import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
       
        <Main />
        <Section cardImages={cardImages} commentObjs={CommentObjs} />
        <Link to="/">Home</Link>

      </div>
    )
  }
}

export default HomePage;

