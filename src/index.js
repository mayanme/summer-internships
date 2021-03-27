/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "client/layouts/Admin.js";
import AuthLayout from "client/layouts/Auth.js";
import StudentLayout from "client/components/Student/StudentLayout.js";
import OrgLayout from "client/components/Organization/OrgLayout.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    // loggedInUser has to hold the same schema as in mongoDB user schema!!!
    this.state = {
      // true if student, false if organization.
      // this is used to know which fields exist in "loggedInUser"
      // upon login - the function loginUserInState will set loggedInUser with the relevant fields.
      loginInfo: {
        isStudent: false,
        isUserLoggedIn: false,
      },
      loggedInUser: {
        orgName: "Microsoft",
        firstName: "Mayan",
        lastName: "Menahem",
        username: "maymen",
        email: "maymen@microsoft.com",
        password: "123456",
        photo: null,
        isLoggedIn: false,
        degree: "",
        university: "",
        skills: [],
        city: "",
        country: "",
        aboutMe: "",
        resume: ""
      }
    };
  }

  loginUserInState = (userDetails) => {
    this.setState(
      {
        // assume userDetails holds the exact same schema as in loggedInUser!!!
        // maybe loggedInUser starts as empty dict and then I assign it a value upon login
        loggedInUser: userDetails
      }
    );
  }

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} layoutName="admin" loggedInUser={this.state.loggedInUser} loginInfo={this.state.loginInfo} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} layoutName="auth" loggedInUser={this.state.loggedInUser} loginInfo={this.state.loginInfo} />} />
        <Route path="/student" render={(props) => <StudentLayout {...props} layoutName="student" loggedInUser={this.state.loggedInUser} loginInfo={this.state.loginInfo} />} />
        <Route path="/org" render={(props) => <OrgLayout {...props} layoutName="org" loggedInUser={this.state.loggedInUser} loginInfo={this.state.loginInfo} />} />
        <Redirect from="/" to="/auth/identify"/>
      </Switch>
    </BrowserRouter>
    );
  }
}

ReactDOM.render(
 <App/>,
  document.getElementById("root")
);
