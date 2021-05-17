const { Schema } = require('mongoose');
const JobItemSchema = require('../model/jobItem');
const UserSchema = require('../model/user');



module.exports = (app) => {
    app.get('/api/getallorgjobs', async function (req, res) {  
        const {email} = req.query;
        console.log("starting get all org jobs, email: ", email);
        const allJobs = await JobItemSchema.find({email:email});
        res.json(allJobs);
        });

    app.post('/api/addjobitem', async function (req, res) {  
        console.log("req.body is: ", req.body);
        const {name, company, description, duration, email} = req.body;
        console.log("starting add job item, name: ", name);
        try {
          const addJobItem = new JobItemSchema({
              name,
              company,
              description,
              duration,
              email }
              )
          await addJobItem.save();
          res.json({success: true});
        } catch (e){
            res.json({success: false});
        }
        });
    
    app.get('/api/getallstudentavailablejobs', async function (req, res) {  
        const {email} = req.query;
        console.log("starting get all student available jobs, email: ", email);
        const allJobs = await JobItemSchema.find();
        res.json(allJobs);
        });
}
