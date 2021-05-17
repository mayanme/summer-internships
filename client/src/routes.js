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
import OrgFeed from "components/Organization/OrgFeed.js";
import OrgJobs from "components/Organization/OrgJobs.js";
import OrgProfile from "components/Organization/OrgProfile.js";
import StudentApplications from "components/Student/StudentApplications";
import StudentFeed from "components/Student/StudentFeed.js";
import Profile from "components/Student/Profile.js";
import Register from "components/Register.js";
import Login from "components/Login.js";
import Identify from "components/Identify.js";

var routes = [
  {
    path: "/applications",
    name: "Browse Jobs",
    icon: "ni ni-tv-2 text-primary",
    component: StudentApplications,
    layout: "/student",
  },
  {
    path: "/studentfeed",
    name: "Browse Jobs",
    icon: "ni ni-tv-2 text-primary",
    component: StudentFeed,
    layout: "/student",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/student",
  },
  {
    path: "/orgfeed",
    name: "Browse applications",
    icon: "ni ni-tv-2 text-primary",
    component: OrgFeed,
    layout: "/org",
  },
  {
    path: "/orgjobs",
    name: "My job posts",
    icon: "ni ni-tv-2 text-primary",
    component: OrgJobs,
    layout: "/org",
  },
  {
    path: "/org-profile",
    name: "Organization Profile",
    icon: "ni ni-single-02 text-yellow",
    component: OrgProfile,
    layout: "/org",
  },
  {
    path: "/identify",
    name: "Identify",
    icon: "ni ni-key-25 text-info",
    component: Identify,
    layout: "/auth",
  },
  {
  path: "/login",
  name: "Login",
  icon: "ni ni-key-25 text-info",
  component: Login,
  layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];

export default routes;

// {
//   path: "/tables",
//   name: "Tables",
//   icon: "ni ni-bullet-list-67 text-red",
//   component: Tables,
//   layout: "/admin",
// },
// {
