const express = require('express');
const router = express.Router();
const PartModel  = require('../model/BodyParts.js');

/* GET parts. */
router.get('/', function (req, res) {
PartModel.estimatedDocumentCount({}, (err,count) => {
    if (!err) {
        console.log('From: get \'/\' >>>> Part docu count : ' + count);
    } else {
        throw err;
    }
})
  res.header("Content-Type",'application/json');
  var document = PartModel.find().lean().exec(function(err,docs){
   if(!err){
      res.send(JSON.stringify(docs));
      console.log(docs);
      console.log('//////////////////////////////////////');
      return docs;
   }
  });
})

module.exports = router;
