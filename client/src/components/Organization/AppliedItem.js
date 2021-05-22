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
import { Button } from "reactstrap";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import { getUserInfo } from "components/Actions/userActions.js";

class AppliedItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchingUser: true,
      userInfo: null
    };
  }

  getUserFromApplied = () => {
    // this.setState({...this.state, isFetchingUser: true});
    getUserInfo(this.props.useremail)
    .then(res => { 
      this.setState({ userInfo: res, isFetchingUser: false }); 
    });
  }

  componentDidMount(){
    console.log("componentDidMount - importing user info from applied");
    this.getUserFromApplied();
  }

  renderAppliedItem = () => {
    console.log("appliedItem.js -> rendering applied item. Applied user:", this.state.userInfo);
    return this.state.isFetchingUser ? (<h1>Fetching user info ...</h1>) :
    (
      <>
        <div className="job-item pb-5 pt-5 pt-md-5">
          <Container fluid>
            <div className="row justify-content-center">
              {/* Card stats */}
                  <Card className="card-stats mb-4 mb-xl-0 w-75">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h1"
                            className="text-uppercase text-muted mb-0"
                          >
                            {this.state.userInfo.firstName} {this.state.userInfo.lastName} 
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.state.userInfo.degree}, {this.state.userInfo.university}
                          </span>
                          <br/>
                          <span className="h3 font-weight-bold mb-0">
                            {this.state.userInfo.email}
                          </span>
                        </div>
                        <Col className="col-auto">
                          {/* <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div> */}
                          <span className="avatar avatar-lg rounded-circle">
                            <img
                              alt="..."
                              src={
                                require("assets/img/theme/team-4-800x800.jpg")
                                  .default
                              }
                            />
                          </span>
                        </Col>
                      </Row>
                      <Row>
                        <span className="h4 pb-3 pt-3 pl-3 mb-0 w-75">
                          {this.state.userInfo.aboutMe}
                        </span>
                      </Row>
                      <Row>
                        <span className="h4 pb-0 pt-3 pl-3 mb-0 w-75">
                          Internship name: {this.props.jobName}
                        </span>
                      </Row>
                      <Row>
                        <span className="h4 pb-2 pt-1 pl-3 mb-0 w-75">
                          Internship number: {this.props.jobNumber}
                        </span>
                      </Row>
                      <Row>
                        <Col>
                          <p className="ml-3 mt-3 mb-0 text-muted text-sm">
                            <span className="text-success mr-2">
                              <i className="fa fa-arrow-up" /> 85%
                            </span>{" "}
                            {/* <span className="text-nowrap">3 Months</span> */}
                          </p>
                        </Col>
                        <Col className="col-auto">
                          <Button
                            aria-pressed={true}
                            className="active"
                            color="primary"
                            href="#pablo"
                            // onClick={() => addJobItem("Software Engineer Intern", "Microsoft", "Hello description", 6)}
                            role="button"
                            size="lg"
                          >
                            See Application
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
            </div>
          </Container>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        {this.renderAppliedItem()}
      </>
    );
  }
}

export default AppliedItem;
