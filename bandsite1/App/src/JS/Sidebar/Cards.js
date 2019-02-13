import React from 'react';
import videoList1 from '../../Assets/Images/video-list-1.jpg'
import videoList2 from '../../Assets/Images/video-list-2.jpg'
import videoList3 from '../../Assets/Images/video-list-3.jpg'
import videoList4 from '../../Assets/Images/video-list-4.jpg'
import videoList5 from '../../Assets/Images/video-list-5.jpg'
import videoList6 from '../../Assets/Images/video-list-6.jpg'
import videoList7 from '../../Assets/Images/video-list-7.jpg'
import videoList8 from '../../Assets/Images/video-list-8.jpg'

class Cards extends React.Component {
  render() {
    return (
      <div className="cards__container">

        <div className="cards__wrapper">
          <h1 className="video__font">NEXT VIDEO</h1>
        </div>

        <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={videoList1} alt="" />
          </div>
          <div className=".cards__item">
            <h2 className="video__title">Become A Travel Pro In One Easy Lesson</h2>
            <p>Todd Welch</p>
          </div>
        </div>

        <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={videoList2} alt="" />
          </div>
          <div className=".cards__item">
            <h2 className="video__title">Les Houches The Hidden Gem Of Chamonix</h2>
            <p>Cornelia Blair</p>
          </div>
        </div>

        <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={videoList3} alt="" />
          </div>
          <div className=".cards__item">
            <h2 className="video__title">Travel Health Useful Medical Information For</h2>
            <p>Glen Harper</p>
          </div>
        </div>


        <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={videoList4} alt="" />
          </div>
          <div className=".cards__item">
            <h2 className="video__title">Cheap Airline Tickets Great Ways To Save</h2>
            <p>Emily Harper</p>
          </div>
        </div>


        <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={videoList5} alt="" />
          </div>
          <div className=".cards__item">
            <h2 className="video__title">Take A Romantic Break In A Boutique Hotel</h2>
            <p>Todd Welch</p>
          </div>
        </div>


        <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={videoList6} alt="" />
          </div>
          <div className=".cards__item">
            <h2 className="video__title">Choose The Perfect Accommodations</h2>
            <p>Lydia Perez</p>
          </div>
        </div>


        <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={videoList7} alt="" />
          </div>
          <div className=".cards__item">
            <h2 className="video__title">Cruising Destination Ideas</h2>
            <p>Timothy Austin</p>
          </div>
        </div>

        <div className="cards__wrapper">
          <div className="cards__item">
            <img className="video__list--img" src={videoList8} alt="" />
          </div>
          <div className=".cards__item">
            <h2 className="video__title">Train Travel On Track For Safety</h2>
            <p>Timothy Austin</p>
          </div>
        </div>

      </div>
    )
  }
}



export default Cards;




