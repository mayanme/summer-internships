const UserSchema = require('../model/user');
const multer = require('multer');
const fs = require('fs');
const upload = multer({dest: 'uploads/'});

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

    // in the future - move upload picture to seperate function
    // that can be triggered by an "upload" button on the profile
    app.post('/api/adduser',upload.single('photo'), async function (req, res) {  
      console.log("req.body is: ", req.body);
      const {firstName,lastName,email,username,password,isLoggedIn} = req.body;
      console.log("starting add user, username: ", username);
      try {
        const addUser = new UserSchema({
            firstName,
            lastName,
            email,
            username,
            password,
            isLoggedIn, 
            "photo": {data: fs.readFileSync("assets/img/theme/mayan-profile-png-min.png"), content: "image/png" /* mimetype */ }, 
            "degree":"degree", 
            "university":"university", 
            "skills":"skills", 
            "city":"city", 
            "country":"country", 
            "aboutMe":"aboutMe", 
            "resume":"resume"}
            )
        await addUser.save();
        res.json({success: true});
      } catch (e){
          res.json({success: false});
      }
      });

      app.post('/api/login', async function (req, res) {  
        console.log("req.body is: ", req.body);
        const {email,password} = req.body;
        console.log("starting login user, email: ", email);
        const user = await UserSchema.findOne({email:email});
        if (!user)
        {
          console.log("server/api/login: User not found");
        }
        else
        {
          try {
            user.isLoggedIn = true;
            await user.save()
          }
          catch {
            res.json({success: false}); 
            return;
          }
        }
        res.json({success: true});
        });

}