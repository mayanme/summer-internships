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
import AppliedItem from "components/Student/AppliedItem";
import { getAllStudentApplications } from "components/Actions/appliedActions.js";


class StudentApplications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchingApplications: true,
      studentApplications: []
    };
  }

  importAllStudentApplications = () => {
    this.setState({...this.state, isFetchingApplications: true});
    getAllStudentApplications(this.props.loggedInUser.email)
    .then(res => {
      this.setState({ studentApplications: res, isFetchingApplications: false });
    });
  }

  componentDidMount(){
    console.log("componentWillMount - importing all student applications");
    this.importAllStudentApplications();
  }

  renderAllStudentApplications = () => {
    console.log("StudentApplications.js -> rendering student applications. Applications exist:", this.state.studentApplications);
    return this.state.isFetchingApplications ? (<h1>Fetching your applications ...</h1>) :
    this.state.studentApplications.map(appliedItem => {
      return (
        <AppliedItem 
          jobName={appliedItem.jobName}
          jobNumber={appliedItem.jobNumber}
          company={appliedItem.company}
          description={appliedItem.description}
          companyemail={appliedItem.companyemail}
          useremail={appliedItem.useremail} />
      );
    })
  }

  render() {
    return (
      <>
      <div className="bg-gradient-default pt-4">
       {this.renderAllStudentApplications()}
      </div>
      </>
    );
  }
}

export default StudentApplications;
