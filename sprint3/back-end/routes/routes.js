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
    "comments": []
  }

  VideoIDInfo.push(uploadVidInfo)
  fs.writeFileSync("./db/VideoIDInfo.json", JSON.stringify(VideoIDInfo));

  if (uploadVidInfo.title ==='' || uploadVidInfo.description==='') { 
    return res.status(400).send("Please add a title or description");
  }
  res.json(VideoIDInfo)
});

module.exports = router;



