const express = require('express');
const router = express.Router();
const CommentModel  = require('../../model/Comments.js');

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
