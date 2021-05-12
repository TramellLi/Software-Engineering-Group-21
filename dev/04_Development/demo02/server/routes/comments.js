const express = require('express');
const router = express.Router();
const CommentModel  = require('../model/Comments.js');

/* GET Comments. */
router.get('/', function (req, res) {
CommentModel.estimatedDocumentCount({}, (err,count) => {
    if (!err) {
        console.log('From: get \'/\' >>>> Comments docu count : ' + count);
    } else {
        throw err;
    }
})
  res.header("Content-Type",'application/json');
  var document = CommentModel.find().lean().exec(function(err,docs){
   if(!err){
      res.send(JSON.stringify(docs));
      console.log(docs);
      console.log('//////////////////////////////////////');
      return docs;
   }
  });
})

module.exports = router;
