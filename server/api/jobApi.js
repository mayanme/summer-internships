const JobItemSchema = require('../model/jobItem');


module.exports = (app) => {
    app.get('/api/getallorgjobs', async function (req, res) {  
        const {companyName} = req.query;
        console.log("starting get all jobs, company: ", companyName);
        const allJobs = await JobItemSchema.find({company:companyName});
        res.status(200).json({allJobs: allJobs});
        });

    app.post('/api/addjobitem', async function (req, res) {  
        console.log("req.body is: ", req.body);
        const {name, company, description, duration} = req.body;
        console.log("starting add job item, name: ", name);
        try {
          const addJobItem = new JobItemSchema({
              name,
              company,
              description,
              duration }
              )
          await addJobItem.save();
          res.json({success: true});
        } catch (e){
            res.json({success: false});
        }
        });

}
