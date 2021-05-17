let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let jobItemSchema = new Schema({
    name: String,
    company: String,
    description: String,
    duration: Number,
    email: String,
    jobNumber: Number,
    appliedList: [ {type: Schema.Types.ObjectId, ref: 'User'} ]
  });

module.exports = mongoose.model('JobItem', jobItemSchema);