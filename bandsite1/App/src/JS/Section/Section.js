import React from 'react';
import CardList from '../Sidebar/CardList'
import VideoDescription from '../Section/VideoDescription'
import Comments from '../Section/Comments'

class Section extends React.Component {
  render() {
    return (
      <section>
        <div className="section__container">
          <div className="section__wrapper">
           <VideoDescription />
           <Comments />
          </div>
          <div className="cardlist__wrapper">
          <div className="cards__container">

<div className="cards__wrapper">
  <h1 className="video__font">NEXT VIDEO</h1>
</div>
          <CardList cards={this.props.cardImages}/>
          </div>
        </div>
        </div>
      </section>

    )
  }
}

export default Section;