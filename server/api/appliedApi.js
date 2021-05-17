const { Schema } = require('mongoose');
const AppliedItemSchema = require('../model/appliedItem');



module.exports = (app) => {
    // get all of the student applications for a specific company
    app.get('/api/getallstudentsapplied', async function (req, res) {  
        const {email} = req.query;
        console.log("starting get all company applied students, company email: ", email);
        const allApplied = await AppliedItemSchema.find({companyemail:email});
        res.json(allApplied);
        });

    app.post('/api/applytojobitem', async function (req, res) {  
        console.log("req.body is: ", req.body);
        const {jobName, jobNumber, company, description, companyemail, useremail} = req.body;
        console.log("starting apply to job item, job number: ", jobNumber);
        try {
        const addAppliedItem = new AppliedItemSchema({
            jobName,
            jobNumber,
            company,
            description,
            companyemail,
            useremail }
            )
        await addAppliedItem.save();
        res.json({success: true});
        } catch (e){
            res.json({success: false});
        }
        });
    
    // get all job applications of a specific student
    app.get('/api/getallstudentapplications', async function (req, res) {  
        const {email} = req.query;
        console.log("starting get all student applications, student email: ", email);
        const studentApplications = await AppliedItemSchema.find({useremail:email});
        res.json(studentApplications);
        });
}
