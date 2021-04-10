export function userExists() {
    console.log("sending message to server - userexists");
    // GET request using fetch with set headers
    const headers = { 'Content-Type': 'application/json'}
    fetch('/api/userexists?username=maymen', { headers })
        .then(response => 
            console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> userexists"));
  }

export function getUserInfo(email, callback) {
    console.log("sending message to server - getuserinfo");
    // GET request using fetch with set headers
    const headers = { 'Content-Type': 'application/json'}
    fetch(`/api/getuserinfo?email=${email}`, { headers })
        .then(response => 
            callback( { data: response.json().info }))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => { console.log("error in actions -> get user info")
                            callback({ error: error }) });
}

export function addUser(nameP, lastnameP, emailP, usernameP, passwordP)
{
    // console.log("sending message to server - add user: ", nameP);
    // GET request using fetch with set headers

    fetch('/api/adduser', 
    {
        method: "POST", 
        headers: { 'Content-Type': 'application/json'} , 
        body: JSON.stringify({ "firstName": nameP, 
                "lastName": lastnameP,
                "email": emailP, 
                "username": usernameP, 
                "password": passwordP,
                "isLoggedIn": true })
    }
    )
        .then(response => console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> add user"));
}

export function logUserIn(emailP, passwordP, callback)
{
    console.log("sending message to server - login user: ", emailP, passwordP);
    // GET request using fetch with set headers
    if (emailP == null || passwordP == null)
    {
        return;
    }

    fetch('/api/login', 
    {
        method: "POST", 
        headers: { 'Content-Type': 'application/json'} , 
        body: JSON.stringify({
                "email": emailP, 
                "password": passwordP})
    }
    )
        .then(response => callback({ data: true }))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => { console.log("error in actions -> login user")
                        callback({ error: error }) });
}

export function uploadUserPhoto(email, picture)
{
    console.log("sending photo to server - upload user photo: ", picture);

    const dataForm = new FormData();
    dataForm.append('email', email);
    dataForm.append('picture', picture);

    fetch('/api/uploadphoto', 
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
        .catch(error => console.log("error in actions -> upload user photo"));
}