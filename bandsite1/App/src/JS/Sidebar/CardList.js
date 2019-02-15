import React from 'react';
import Cards from './Cards'

class CardList extends React.Component {
  render() {
    return (
      <div className="card_list">
          <Cards />
      </div>
    )
  }
}

export default CardList;




// import React from 'react'
// import Card from './Card'

// class CardList extends React.Component {
//   render() {
//     const cardList = this.props.cards.map(card => {
//       return <Card src={card.imgSrc} title={card.title} content={card.content}/>
//     })

//     return (
//       <div class="row">
//         {cardList}
//       </div>
//     )
//   }
// }

// export default CardList