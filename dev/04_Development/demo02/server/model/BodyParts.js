var mongoose = require('./db.js');

// Declare a schema
var Schema = mongoose.Schema;

// Create a BodySchema
var BodySchema = new Schema({
    _id: Number,
    partName: String,
    solution: String,
    voteNumber: Number
})

// Create a BodyPartModel using BodySchema
var BodyPartModel = mongoose.model('BodyPart',BodySchema,'BodyParts');

// Exports BodyPartModel
module.exports = BodyPartModel;
