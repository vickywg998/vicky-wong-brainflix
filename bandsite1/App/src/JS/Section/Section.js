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
          <CardList />
          </div>
        </div>
      </section>


    )
  }
}

export default Section;