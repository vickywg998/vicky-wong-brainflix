import React from 'react';
import UploadPreviewVid from '../../../Assets/Images/UploadVideo-preview.jpg'

class UploadPreview extends React.Component {
  render() {
    return (
      <div className="Navbar__Link">
        <img className="upload__preview--imgsize" src={UploadPreviewVid} alt="" />
      </div>

    )
  }
}

export default UploadPreview;


