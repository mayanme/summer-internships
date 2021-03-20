const UserSchema = require('../model/user');


module.exports = (app) => {
    app.get('/api/getUser', async function (req, res) {
        console.log("get user");
        const user = await UserSchema.findOne({username: req.authenticatedUser});
        res.status(200).json({user: user ? user : null});
      });


    // check if username already exist
    app.get('/api/userexists', async function (req, res) {  
      const {username} = req.query;
      console.log("starting user exists, username: ", username);
      const userExist = await UserSchema.findOne({username:username});
      res.status(200).json({exists: !!userExist});
      });

    app.post('/api/adduser', async function (req, res) {  
      console.log("req.body is: ", req.body);
      const {firstName,lastName,username,password} = req.body;
      console.log("starting add user, username: ", username);
      try {
        const addUser = new UserSchema({
            firstName,
            lastName,
            username,
            password }
            )
        await addUser.save();
        res.json({success: true});
      } catch (e){
          res.json({success: false});
      }
      });



}