const express = require('express')
var router = express.Router();
const cors = require('cors')
const uuid = require('uuid')
const fs = require('fs')

const bodyparser = require('body-parser')
const Videos = require('../db/VideoIDInfo.json')
const VideoIDInfo = require('../db/VideoIDInfo.json')

router.use(cors())
router.use(express.static('website'));
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.get('/', (req, res) => {
  res.json(Videos)
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const currentVideoID = VideoIDInfo.find(videoID => videoID.id === id)
  res.json(currentVideoID)
})

router.post('/', (req, res) => {

  const uploadVidInfo =
  {
    "id": uuid.v4(),
    "title": req.body.title,
    "channel": "National Geographic",
    "image": "https://i.imgur.com/2ebeLn3.jpg",
    "description": req.body.description,
    "views": "29,543",
    "likes": "8,576",
    "duration": "5:58",
    "video": "https://project-2-api.herokuapp.com/stream",
    "timestamp": "03/02/2019",
    "comments": [{
      "name": "Micheal Lyons",
      "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
      "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
      "likes": 0,
      "timestamp": 1545162149000
  },
  {
      "name": "Gary Wong",
      "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
      "likes": 0,
      "timestamp": 1544595784046
  },
  {
      "name": "Theodore Duncan",
      "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
      "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
      "likes": 0,
      "timestamp": 1542262984046
  }]
  }

  VideoIDInfo.push(uploadVidInfo)

  fs.writeFile('./db/VideoIDInfo.json', JSON.stringify(VideoIDInfo), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("Video has been uploaded");
});

  if (uploadVidInfo.title ==='' || uploadVidInfo.description==='') { 
    return res.status(400).send("Please add a title or description");
  }
  res.json(VideoIDInfo)
});

module.exports = router;



