var mongoose = require('./db.js');

// Declare a schema
var Schema = mongoose.Schema;

// Create a BodySchema
var BodySchema = new Schema({
    _id: Number,
    partName: String,
    solution: String,
    voteNumber: Number,
    parentParts: [{
        type: Number, ref: 'BodyPart'
    }]
})

// Create a BodyPartModel using BodySchema
var BodyPartModel = mongoose.model('BodyPart',BodySchema);

// Exports BodyPartModel
module.exports = BodyPartModel;
