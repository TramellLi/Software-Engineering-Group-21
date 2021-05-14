var mongoose = require('./db.js');

// Declare a schema
var Schema = mongoose.Schema;

// Create a CommentSchema
var CommentSchema = new Schema({
    content: String,
    bodyPart: Number
})

// Create a CommentModel using CommentSchema
var CommentModel = mongoose.model('Comment',CommentSchema,'Comments');

// Exports BodyPartModel
module.exports = CommentModel;
