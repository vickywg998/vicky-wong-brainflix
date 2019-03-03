const express = require('express')
var router = express.Router();
const cors = require('cors')
const uuid = require('uuid')
const fs = require('fs')

const bodyparser = require('body-parser')
const Videos = require('../db/VideoIDInfo.json')
const VideoIDInfo = require('../db/VideoIDInfo.json')
// const VideoUpload = require('./VideoUpload')
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
  // const dummyVid = 
  //   {
  //   "id":  "1a4kj86sfdet",
  //   "title": "Selfie Animals",
  //   "channel": "National Geographic",
  //   "image": "https://i.imgur.com/2ebeLn3.jpg"
  //   };
    const dummyVidInfo =
     {
      "id": "1a4kj86sfdet",
      "title": "Selfie Animals",
      "channel": "National Geographic",
      "image": "https://i.imgur.com/2ebeLn3.jpg",
      "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ",
      "views": "29,543",
      "likes": "8,576",
      "duration": "5:58",
      "video": "https://project-2-api.herokuapp.com/stream",
      "timestamp": 1538006507000,
      "comments": []
      }
      // Videos.push(dummyVid)
      VideoIDInfo.push(dummyVidInfo)
      res.send('Done') 
});


module.exports = router;




