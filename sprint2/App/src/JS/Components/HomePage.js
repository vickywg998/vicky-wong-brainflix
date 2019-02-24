import React, { Component } from 'react';


import Main from '../Main'
import Section from '../Section'
import axios from 'axios';
import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";


const HomePage = props => {
  console.log(props.match.params.id);
  return (
    <div>
      <Main />
      <Section videoID = {props.match.params.id} />
    </div>
  );
}

export default HomePage;



