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
import { getAllOrgJobs } from "components/Actions/jobActions.js";

import JobItem from "components/Organization/JobItem";

class JobsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchingJobs: false,
      orgJobs: []
    };
  }

  importAllOrgJobs = () => {
    this.setState({...this.state, isFetchingJobs: true});
    getAllOrgJobs(this.props.loggedInUser.email)
    .then(res => { 
      this.props.setOrgJobs(res); 
      this.setState({ orgJobs: res, isFetchingJobs: false }); 
    });
  }

  componentDidMount(){
    console.log("componentWillMount - importing all org jobs");
    this.importAllOrgJobs();
  }

  renderAllOrgJobs = () => {
    console.log("jobsList.js -> rendering org jobs. Jobs exist:", this.state.orgJobs);
    return this.state.isFetchingJobs ? (<h1>Fetching your jobs posts ...</h1>) :
    this.state.orgJobs.map(job => {
      return (
        <JobItem 
          jobName={job.name}
          companyName={job.company}
          description={job.description}
          duration={job.duration}
          email={job.email} />
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
        {this.renderAllOrgJobs()}
      </div>
      </>
    );
  }
}

export default JobsList;