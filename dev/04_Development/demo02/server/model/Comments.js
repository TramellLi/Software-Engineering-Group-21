var mongoose = require('./db.js');

// Declare a schema
var Schema = mongoose.Schema;

// Create a CommentSchema
var CommentSchema = new Schema({
    addTime:{
        type: Date,
        default: Date.now
    },
    content: String,
    bodyPart: {
        type: Number, ref: 'BodyPart'
    }
})

// Create a CommentModel using CommentSchema
var CommentModel = mongoose.model('Comment',CommentSchema);

// Exports BodyPartModel
module.exports = CommentModel;
