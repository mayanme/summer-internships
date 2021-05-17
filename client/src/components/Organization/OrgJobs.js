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


import JobsList from "components/Organization/JobsList.js";
import AddJob from "components/Organization/AddJob";

const OrgJobs = (props) => {

  return (
    <>
      <div className="header-body">
        <AddJob
          loginInfo={props.loginInfo} 
          loggedInUser={props.loggedInUser} />
        <JobsList
          loginInfo={props.loginInfo} 
          loggedInUser={props.loggedInUser}
          orgJobsList={props.orgJobsList}
          setOrgJobs={props.setOrgJobs} />
      </div>
    </>
  );
};

export default OrgJobs;
