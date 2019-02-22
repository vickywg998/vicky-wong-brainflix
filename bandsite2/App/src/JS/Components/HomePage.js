import React, { Component } from 'react';

import Header from '../Header'
import Main from '../Main'
import Section from '../Section'
import cardImages from '../Components/Sidebar/cardImages'
import CommentObjs from '../Components/Section/CommentObjs'
import axios from 'axios';

import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";

const myAPI = "1a2da34e-4760-45ed-9b07-e9acc896e17f";
const url = "https://project-2-api.herokuapp.com/videos/?api_key="+ myAPI


class HomePage extends Component {
  state = {
videos: []
  }

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
       
        this.setState({
          videos: response.data
        })
      })
  }



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

