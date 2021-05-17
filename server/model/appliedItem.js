let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appliedItemSchema = new Schema({
    jobName: String,
    jobNumber: Number,
    company: String,
    description: String,
    companyemail: String,
    useremail: String,
  });

module.exports = mongoose.model('AppliedItem', appliedItemSchema); 