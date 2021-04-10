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

export function getOrgInfo(email, callback) {
    console.log("sending message to server - getorginfo");
    // GET request using fetch with set headers
    const headers = { 'Content-Type': 'application/json'}
    fetch(`/api/getorginfo?email=${email}`, { headers })
        .then(response => 
            callback( { data: response.json().info }))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => { console.log("error in actions -> get org info")
                            callback({ error: error }) });
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

export function logOrgIn(emailP, passwordP, callback)
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
    .then(response => callback({ data: true }))
    .catch(error => { console.log("error in actions -> login org")
                    callback({ error: error }) });
}

export function uploadOrgPhoto(email, picture)
{
    console.log("sending photo to server - upload org photo: ", picture);

    const dataForm = new FormData();
    dataForm.append('email', email);
    dataForm.append('picture', picture);

    fetch('/api/uploadorgphoto', 
    {
        method: "POST", 
        body: dataForm
    }
    )
        .then(response => 
            //console.log("res is: ", response.json())
            { return response }
            )
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> upload org photo"));
}