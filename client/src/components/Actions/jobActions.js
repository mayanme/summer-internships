
export function addJobItem(nameP, companyP, descriptionP, durationP, emailP)
{
    console.log("sending message to server - add job item: ", nameP);
    // GET request using fetch with set headers

    fetch('/api/addjobitem', 
    {
        method: "POST", 
        headers: { 'Content-Type': 'application/json'} , 
        body: JSON.stringify({ 
                "name": nameP, 
                "company": companyP,
                "description": descriptionP, 
                "duration": durationP,
                "email": emailP })
    }
    )
        .then(response => console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> add job item"));
}

export function getAllOrgJobs(emailP)
{
    console.log("sending message to server - get all org jobs for: ", emailP);
    // GET request using fetch with set headers
    
    const headers = { 'Content-Type': 'application/json'}
    return fetch(`/api/getallorgjobs?email=${emailP}`, { headers })
        .then(response => 
            response.json())
        .then(responseData => responseData)
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> userexists"));
}