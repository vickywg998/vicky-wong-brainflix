import React from 'react';
import Header from '../../Header'
import { Link } from 'react-router-dom'
import UploadPreview from '../Home/UploadPreview'

class Upload extends React.Component {
  render() {
    return (
      <div>

       
        <div className="upload__container">
          <h1 className="upload__header">Upload Video</h1>
<div className="upload__wrapper--big">

<div className="upload__wrapper--small upload__wrapper--left">
<h5 className="videothumbnail__title">VIDEO THUMBNAIL</h5>
<UploadPreview />
</div>

<div className="upload__wrapper--small upload__wrapper--right">
<h5 className="videothumbnail__title">TITLE YOUR VIDEO</h5>
<input type="text" name="videotitle" value="Add a title to your video" />
<h5 className="videothumbnail__title">ADD A VIDEO DESCRIPTION</h5>
<textarea type="text" name="videodescription" value="Add a description to your video" />

</div>



</div>




        </div>
      </div>

    )
  }
}

export default Upload

