const express = require('express')
var router = express.Router();
const cors = require('cors')
router.use(cors())
const bodyparser = require('body-parser')

const Videos = require('../db/Videos.json')
const VideoIDInfo = require('../db/VideoIDInfo.json')
router.use(express.static('website'));
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());

router.get('/', (req, res) => {
  res.json(Videos)
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const currentVideoID = VideoIDInfo.find(videoID => videoID.id === id) 
res.json(currentVideoID)
})

module.exports = router

