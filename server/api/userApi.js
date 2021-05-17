const UserSchema = require('../model/user');
// const multer = require('multer');
// const fs = require('fs');
// const upload = multer({dest: '../uploads/'});

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//   cb(null, '../uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' +file.originalname )
//   }
// })

// var upload = multer({ storage: storage }).single('file')


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

    app.get('/api/getuserinfo', async function (req, res) {  
      const {email} = req.query;
      console.log("starting get user info, email: ", email);
      const user = await UserSchema.findOne({email:email});
      console.log("got user info, name:", user.firstName);
      res.json(user);
      });

    // in the future - move upload picture to seperate function
    // that can be triggered by an "upload" button on the profile
    app.post('/api/adduser', async function (req, res) {  
      console.log("adduser: req.body is: ", req.body);
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
            // "photo": {data: fs.readFileSync("../../client/src/assets/img/theme/angular.jpg"), content: "image/jpg" /* mimetype */ }, 
            "photo": null,
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
      console.log("login: req.body is: ", req.body);
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
      
      // app.post('/api/uploadphoto',upload.single('picture'), async function(req, res) {
        
      //   console.log("userApi.uploadphoto - starting");

      //   // upload(req, res, function (err) {
      //   //         if (err instanceof multer.MulterError) {
      //   //             return res.status(500).json(err)
      //   //         } else if (err) {
      //   //             return res.status(500).json(err)
      //   //         }
      //   //   return res.status(200).send(req.file)
    
      //   // })
        
      //   const { email, picture } = req.body;
      //   console.log("server/api/uploadphoto - email and picture", email, picture);
      //   const user = await UserSchema.findOne({email: email});
      //   if (!user){
      //     console.log("upload photo, user not found");
      //   }
      //   else
      //   {
      //     try {
      //       user.photo = req.file ? {data: fs.readFileSync(req.file.path),content:req.file.mimetype}: null
      //       await user.save();
      //       res.json({success: true});
      //     }
      //     catch(e) {
      //       res.json({success: false});
      //     }
      //   }

      // });

}