const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const JobItemSchema = require('./model/jobItem');
const UserSchema = require('./model/user');
const fs = require('fs');
const path = require('path');
// var cookies = require('cookie-parser');



const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/maymen',
    port: 8080
  };

  //setup database
mongoose.Promise = global.Promise;
// MongoDB Connection
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(config.mongoURL, { useNewUrlParser: true ,useUnifiedTopology: true}, (error) => {
    // const jobs = require('./jobs.json');
    // JobItemSchema.collection.deleteMany({})
    //   .then(result => JobItemSchema.collection.insertMany(jobs));
    // const users = require('./users.json');
    // UserSchema.collection.deleteMany({})
    //   .then(result => UserSchema.collection.insertMany(users));
    if (error) {
      console.error('Please make sure Mongodb is installed and running!');
      throw error;
    }else console.log('connected to database!');
  });
}



const app = express();


//body parser for json. must be done before API routes
app.use(express.urlencoded({extended:true})); //handle body requests
app.use(express.json());
// console.log(__dirname);
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cookies());



// Add backend api routes
fs.readdirSync(__dirname + '/api').forEach((file) => {
  console.log(`./api/${file.substr(0, file.indexOf('.'))}`);
  require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
});

app.use(function (err, msg, req, res, next) {
  console.error(err.stack);
  res.status(500).json({error: err});
});

app.listen(8080,
    () => console.log(`Listening on port 8080!`));

app.get('/api', (req,res)=> {
  res.send("Hello!");
});

app.get('/quit', function(req,res) {
  res.send('closing..');
  app.close();
});