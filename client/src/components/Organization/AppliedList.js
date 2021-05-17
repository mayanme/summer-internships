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
import { getAllStudentsApplied } from "components/Actions/appliedActions.js";


import AppliedItem from "components/Organization/AppliedItem";

class AppliedList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchingApplied: false,
      studentsAppliedList: []
    };
  }

  importAllStudentsApplied = () => {
    this.setState({...this.state, isFetchingApplied: true});
    getAllStudentsApplied(this.props.loggedInUser.email)
    .then(res => { 
      this.props.setStudentsAppliedList(res); 
      this.setState({ studentsAppliedList: res, isFetchingApplied: false }); 
    });
  }

  componentDidMount(){
    console.log("componentDidMount - importing all students applied");
    this.importAllStudentsApplied();
  }

  renderAllStudentsApplied = () => {
    console.log("appliedList.js -> rendering students applied. Applied list:", this.state.studentsAppliedList);
    return this.state.isFetchingApplied ? (<h1>Fetching your applications ...</h1>) :
    this.state.studentsAppliedList.map(appliedItem => {
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
      <div className="bg-gradient-default pt-6">
        {/* <AppliedItem />
        <AppliedItem />
        <AppliedItem />
        <AppliedItem /> */}
        {this.renderAllStudentsApplied()}
      </div>
      </>
    );
  }
}

export default AppliedList;
