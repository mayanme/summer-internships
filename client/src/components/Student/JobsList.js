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
// javascipt plugin for creating charts
import { getAllStudentAvailableJobs } from "components/Actions/jobActions.js";

import JobItem from "components/Student/JobItem";

class JobsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchingJobs: false,
      studentAvailableJobs: []
    };
  }

  importAllStudentAvailableJobs = () => {
    this.setState({...this.state, isFetchingJobs: true});
    getAllStudentAvailableJobs(this.props.loggedInUser.email)
    .then(res => { 
      this.props.setStudentAvailableJobs(res); 
      this.setState({ studentAvailableJobs: res, isFetchingJobs: false }); 
    });
  }

  componentDidMount(){
    console.log("componentDidMount - importing all student available jobs");
    this.importAllStudentAvailableJobs();
  }

  renderAllAvailableJobs = () => {
    console.log("jobsList.js -> rendering available student jobs. Jobs exist:", this.state.studentAvailableJobs);
    return this.state.isFetchingJobs ? (<h1>Fetching your jobs posts ...</h1>) :
    this.state.studentAvailableJobs.map(job => {
      return (
        <JobItem 
          loggedInUser={this.props.loggedInUser}
          jobName={job.name}
          companyName={job.company}
          description={job.description}
          duration={job.duration}
          email={job.email}
          jobNumber={job.jobNumber} />
      );
    })
  }

  render() {
    return (
      <>
      <div className="bg-gradient-default pt-4">
        {/* <JobItem />
        <JobItem />
        <JobItem />
        <JobItem /> */}
        {this.renderAllAvailableJobs()}
      </div>
      </>
    );
  }
}

export default JobsList;