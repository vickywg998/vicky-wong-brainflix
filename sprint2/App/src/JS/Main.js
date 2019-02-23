import React from 'react';
import CurrentVideo from './Components/Main/CurrentVideo'

class Main extends React.Component {
  render() {
    return (
      <main>
       <CurrentVideo mainVideo={this.props.mainVideo} />
      </main>
    )
  }
}

export default Main