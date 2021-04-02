export function orgExists(companyName) {
    console.log("sending message to server - orgexists");
    // GET request using fetch with set headers
    const headers = { 'Content-Type': 'application/json'}
    fetch(`/api/orgexists?orgname=${companyName}`, { headers })
        .then(response => 
            console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> orgexists"));
  }

export function addOrg(orgNameP, emailP, usernameP, passwordP)
{
    // console.log("sending message to server - add user: ", nameP);
    // GET request using fetch with set headers

    fetch('/api/addorg', 
    {
        method: "POST", 
        headers: { 'Content-Type': 'application/json'} , 
        body: JSON.stringify({ "orgName": orgNameP, 
                "email": emailP, 
                "username": usernameP, 
                "password": passwordP,
                "isLoggedIn": true })
    }
    )
        .then(response => console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> add org"));
}

export function logOrgIn(emailP, passwordP)
{
    console.log("sending message to server - login org: ", emailP, passwordP);
    // GET request using fetch with set headers
    if (emailP == null || passwordP == null)
    {
        return;
    }

    fetch('/api/orglogin', 
    {
        method: "POST", 
        headers: { 'Content-Type': 'application/json'} , 
        body: JSON.stringify({
                "email": emailP, 
                "password": passwordP})
    }
    )
        .then(response => 
            //console.log("res is: ", response.json())
            { return response }
            )
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> login org"));
}