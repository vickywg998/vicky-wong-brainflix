import React from 'react';
import UploadPreviewVid from '../Assets/Images/UploadVideo-preview.jpg'
import axios from 'axios';

const videoListURL = 'http://localhost:8080/videos/'
const imageURL = "https://i.imgur.com/2ebeLn3.jpg"

class Upload extends React.Component {
  
  uploadVid = () => {
    
    axios
      .post(videoListURL, {
        title: this.videoTitle.value,
        description: this.videoDescription.value,
        image: imageURL
      })
      .then(response => {
        this.videoTitle.value = '';
        this.videoDescription.value = '';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  cancel = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div className="upload__container">
          <h1 className="upload__header">Upload Video</h1>
          <div className="upload__wrapper--big">

            <div className="upload__wrapper--small upload__wrapper--left">
              <h5 className="videothumbnail__title">VIDEO THUMBNAIL</h5>
              <div className="Navbar__Link">
                <img className="upload__preview--imgsize"
                  src={imageURL}
                  alt="" />
              </div>
            </div>
            <div className="upload__wrapper--small upload__wrapper--right">
              <h5 className="videothumbnail__title">TITLE YOUR VIDEO</h5>
              <input className="videotitle__input"
                type="text"
                name="videotitle"
                placeholder="Add a title to your video"
                ref={self => (this.videoTitle = self)}  />
              <h5 className="videothumbnail__title">ADD A VIDEO DESCRIPTION</h5>
              <textarea className="videodescription__input"
                type="text"
                name="videoDescription"
                placeholder="Add a description to your video"
                ref={self => (this.videoDescription = self)} />
            </div>
          </div>

          <div className="publish__container">
            <div className="publish__wrapper">
              <button id="cancel__text"
                      onClick={this.cancel}>Cancel</button>
            </div>
            <div className="publish__wrapper">
              <button className="publish__button"
                      onClick={this.uploadVid}>PUBLISH</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Upload;

