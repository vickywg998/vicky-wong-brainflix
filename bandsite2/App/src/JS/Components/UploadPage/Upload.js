import React from 'react';
import Header from '../../Header'
import {Link } from 'react-router-dom'

class Upload extends React.Component {
  render() {
    return (
    <div>
<Header />

<Link to="/upload">Upload</Link>


    </div>

    )
  }
}

export default Upload

