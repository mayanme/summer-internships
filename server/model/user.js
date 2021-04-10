let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    isLoggedIn: Boolean,
    photo: {data:Buffer , content:String}, // change this from string to file somehow
    // photo: String,
    degree: String,
    university: String,
    skills: String, // change this from string to list of strings/numbers
    // skills: [String],
    city: String,
    country: String,
    aboutMe: String,
    resume: String // change this from string to file somehow
});

module.exports = mongoose.model('User', userSchema);