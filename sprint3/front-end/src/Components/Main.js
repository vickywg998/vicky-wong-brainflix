import React from 'react';

class Main extends React.Component {
    render() {
      return (
        <main>
      <div className="video__wrapper">
        <video ref={self => {this.video =self}} 
               poster={this.props.nowPlayingVideo} 
               src={this.props.currentBunnyVideo}
               controls >
       </video>
      </div>
        </main>
      )
    }
  }

  
  export default Main



