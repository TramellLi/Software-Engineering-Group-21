const express = require('express');
const router = express.Router();
const CommentModel  = require('../../model/Comments.js');

/* GET Comments. */
router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  var result = CommentModel.findOne({_id: 1},function(err,docs){
   if(!err){
      res.send(result);
      console.log('Find one Body part: '+docs)
   }
  });
})

module.exports = router;
