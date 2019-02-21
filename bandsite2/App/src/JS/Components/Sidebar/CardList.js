import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const cardList = this.props.cards.map(function(card) {
      return <Card src={card.imgSrc} title={card.title} author={card.author} />
    })

    return (
      <div className="card_list"> 
        {cardList}
      </div>
    )
  }
}

export default CardList;

