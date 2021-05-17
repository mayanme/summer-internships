const OrgSchema = require('../model/org');
// const multer = require('multer');
// const fs = require('fs');
// const upload = multer({dest: '../uploads/'});

module.exports = (app) => {

    // check if username already exist
    app.get('/api/orgexists', async function (req, res) {  
      const {orgname} = req.query;
      console.log("starting user exists, orgname: ", orgname);
      const orgExist = await OrgSchema.findOne({orgName:orgname});
      res.status(200).json({exists: !!orgExist});
      });
    
    app.get('/api/getorginfo', async function (req, res) {  
      const {email} = req.query;
      console.log("starting get org info, email: ", email);
      const user = await OrgSchema.findOne({email:email});
      res.json(user);
      });

    app.post('/api/addorg', async function (req, res) {  
      console.log("req.body is: ", req.body);
      const {orgName,email,username,password,isLoggedIn} = req.body;
      console.log("starting add user, orgName: ", orgName);
      try {
        const addOrg = new OrgSchema({
            orgName,
            email,
            username,
            password,
            isLoggedIn, 
            "photo":"photo", 
            "industry":"industry", 
            "city":"city", 
            "country":"country", 
            "jobPosts":"jobPosts", 
            "aboutUs":"aboutUs"}
            )
        await addOrg.save();
        res.json({success: true});
      } catch (e){
          res.json({success: false});
      }
      });

    app.post('/api/orglogin', async function (req, res) {  
      console.log("req.body is: ", req.body);
      const {email,password} = req.body;
      
      // in the future need to add password check as well!

      console.log("starting login org, email: ", email);
      const org = await OrgSchema.findOne({email:email});
      if (!org)
      {
        console.log("server/api/orglogin: Org not found");
      }
      else
      {
        try {
          org.isLoggedIn = true;
          await org.save()
        }
        catch {
          res.json({success: false}); 
          return;
        }
      }
      res.json({success: true});
      });

      // app.post('/api/uploadorgphoto',upload.single('picture'), async function(req, res) {
      
      //   console.log("orgApi.uploadphoto - starting");

      //   // upload(req, res, function (err) {
      //   //         if (err instanceof multer.MulterError) {
      //   //             return res.status(500).json(err)
      //   //         } else if (err) {
      //   //             return res.status(500).json(err)
      //   //         }
      //   //   return res.status(200).send(req.file)
    
      //   // })
        
      //   const { email, picture } = req.body;
      //   console.log("server/api/uploadorgphoto - email and picture", email, picture);
      //   const org = await OrgSchema.findOne({email: email});
      //   if (!org){
      //     console.log("upload org photo, org not found");
      //   }
      //   else
      //   {
      //     try {
      //       org.photo = req.file ? {data: fs.readFileSync(req.file.path),content:req.file.mimetype}: null
      //       await org.save();
      //       res.json({success: true});
      //     }
      //     catch(e) {
      //       res.json({success: false});
      //     }
      //   }

      // });
}