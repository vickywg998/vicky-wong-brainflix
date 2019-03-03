// const express = require('express')
// const bodyParser = require('body-parser')
// const PORT = process.env.PORT || 8080
// var router = express.Router();

// var videoPic = require('path').join(__dirname, '../../front-end/public/images/video-list-8');
// router.use(express.static(videoPic));
// router.use(bodyParser.json())
// router.use(express.static('website'));
// router.use(bodyParser.urlencoded({extended:false}));


// const videos = [
//   {
// thumbnail: videoPic,
//  title: 'lol',
//  timestamp: "03/02/2019",
// description: 'hi test',
// likes: "48,394",
// views: "4,542,343"
//   }
//   ]

// router.post('/', (req, res) => {
//   console.log(req.body)
//  videos.push({
//     thumbnail: req.body.thumbnail,
//     title: req.body.title,
//     timestamp: req.body.timestamp,
//    description: req.body.description,
//    likes: req.body.likes,
//    views: req.body.views
//   })
//   res.send({ success: true})
// })

// module.exports = router;