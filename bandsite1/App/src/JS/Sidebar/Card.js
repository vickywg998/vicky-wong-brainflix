
import React, {Component} from 'react';

class Card extends Component {

  render() {
    return (

      <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={this.props.src} alt="" />
          </div>
          <div className=".cards__item">
            <h2 className="video__title">{this.props.title}</h2>
            <p>{this.props.author}</p>
          </div>
      </div>

    
    )
  }
}

export default Card;
