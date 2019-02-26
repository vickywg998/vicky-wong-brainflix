import React from 'react';
import axios from 'axios'


class Main extends React.Component {

    render() {
      return (
        <main>
      <div className="video__wrapper">
        <video poster={this.props.nowPlayingVideo} controls ></video>
      </div>
        </main>
      )
    }
  }

  
  export default Main

