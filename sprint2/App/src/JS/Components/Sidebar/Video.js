import React, {Component} from 'react';

const Video = props => {
    return (
      <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={props.image} alt="" />
          </div>
          <div className="cards__item2">
            <h2 className="video__title">{props.title}</h2>
            <p>{props.channel}</p>
          </div>
      </div>
    )
  }

export default Video;