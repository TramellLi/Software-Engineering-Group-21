<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const CommentModel  = require('../../model/Comments.js');

/* GET Comments. */
router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  var result = CommentModel.findOne({_id: 1},function(err, docs){
   if(!err){
      // res.send(result);
      res.send(JSON.stringify(docs));
      console.log('Find one Body part: ' + docs)
   }
  });
})

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const CommentModel  = require('../model/Comments.js');

/* GET Comments. */
router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  var document = CommentModel.findOne({_id: 1},function(err,docs){
   if(!err){
      res.send(JSON.stringify(docs));
      console.log('Find one Body part: '+docs);
   }
  });
})

module.exports = router;
>>>>>>> 378d54e1ad13f3a83b77b8d2cca1eabca047d5e5
