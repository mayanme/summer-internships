let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let orgSchema = new Schema({
    orgName: String,
    email: String,
    username: String,
    password: String,
    isLoggedIn: Boolean,
    photo: String, // change this from string to file somehow
    // photo:  {data:Buffer , content:String},
    industry: String,
    city: String,
    country: String,
    jobPosts: String, // change this from string to list of jobs
    // jobPosts: [{type: Schema.Types.ObjectId, ref: 'JobItem'}],
    aboutUs: String,
});

module.exports = mongoose.model('Organization', orgSchema);