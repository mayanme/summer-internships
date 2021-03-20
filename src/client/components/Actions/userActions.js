 


export function userExists() {
    console.log("sending message to server - userexists");
    // GET request using fetch with set headers
    const headers = { 'Content-Type': 'application/json'}
    fetch('/api/userexists?username=maymen', { headers })
        .then(response => console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> userexists"));
  }

export function addUser(nameP, lastnameP, usernameP, passwordP)
{
    // console.log("sending message to server - add user: ", nameP);
    // GET request using fetch with set headers

    fetch('/api/adduser', 
    {
        method: "POST", 
        headers: { 'Content-Type': 'application/json'} , 
        body: JSON.stringify({ "firstName": nameP, 
                "lastName": lastnameP, 
                "username": usernameP, 
                "password": passwordP })
    }
    )
        .then(response => console.log("res is: ", response.json()))
        // .then(data => this.setState({ totalReactPackages: data.total }));
        .catch(error => console.log("error in actions -> add user"));
}