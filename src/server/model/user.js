let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    isLoggedIn: Boolean
});

module.exports = mongoose.model('User', userSchema);