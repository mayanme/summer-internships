
export function addJobItem(nameP, companyP, descriptionP, durationP)
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
                "duration": durationP })
    }
    )
        .then(response => console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> add job item"));
}

export function getAllOrgJobs(companyP)
{
    console.log("sending message to server - get all org jobs for: ", companyP);
    // GET request using fetch with set headers
    
    const headers = { 'Content-Type': 'application/json'}
    fetch(`/api/getallorgjobs?company=${companyP}`, { headers })
        .then(response => 
            console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> userexists"));
}