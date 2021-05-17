
export function applyToJobItem(jobNameP, jobNumberP, companyP, descriptionP, companyemailP, useremailP)
{
    console.log("sending message to server - apply to job item: ", jobNumberP);
    // GET request using fetch with set headers

    fetch('/api/applytojobitem', 
    {
        method: "POST", 
        headers: { 'Content-Type': 'application/json'} , 
        body: JSON.stringify({ 
                "jobName": jobNameP,    
                "jobNumber": jobNumberP,
                "company": companyP,
                "description": descriptionP,
                "companyemail": companyemailP, 
                "useremail": useremailP })
    }
    )
        .then(response => console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> apply to job item"));
}

export function getAllStudentsApplied(emailP)
{
    console.log("sending message to server - get all org jobs for: ", emailP);
    // GET request using fetch with set headers
    
    const headers = { 'Content-Type': 'application/json'}
    return fetch(`/api/getallstudentsapplied?email=${emailP}`, { headers })
        .then(response => 
            response.json())
        .then(responseData => responseData)
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> getallstudentsapplied"));
}

export function getAllStudentApplications(emailP)
{
    console.log("sending message to server - get all student applications for: ", emailP);
    // GET request using fetch with set headers
    
    const headers = { 'Content-Type': 'application/json'}
    return fetch(`/api/getallstudentapplications?email=${emailP}`, { headers })
        .then(response => 
            response.json())
        .then(responseData => responseData)
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> getallstudentapplications"));
}
