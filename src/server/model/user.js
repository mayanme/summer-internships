let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);