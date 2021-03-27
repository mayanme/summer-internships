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

    this.state = {
      loggedInUser: {
        name: "Microsoft",
        identity: "student"
      }
    };
  }

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} layoutName="admin" loggedInUser={this.state.loggedInUser} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} layoutName="auth" loggedInUser={this.state.loggedInUser} />} />
        <Route path="/student" render={(props) => <StudentLayout {...props} layoutName="student" loggedInUser={this.state.loggedInUser} />} />
        <Route path="/org" render={(props) => <OrgLayout {...props} layoutName="org" loggedInUser={this.state.loggedInUser} />} />
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
