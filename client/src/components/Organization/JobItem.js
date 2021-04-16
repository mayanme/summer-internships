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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class JobItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
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
                            {this.props.jobName} 
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.props.companyName}
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
                                require("assets/img/theme/microsoft2.png")
                                  .default
                              }
                            />
                          </span>
                        </Col>
                      </Row>
                      <Row>
                        <span className="h4 pb-5 pt-3 pl-3 mb-0 w-75">
                            {this.props.description}
                        </span>
                      </Row>
                      <Row>
                        <Col>
                          <p className="ml-1 mt-3 mb-0 text-muted text-sm">
                            <span className="text-success mr-2">
                              <i className="far fa-calendar-alt mr-1" /> {this.props.duration} Months
                            </span>
                            {/* <span className="text-nowrap">3 Months</span> */}
                          </p>
                        </Col>
                        {/* <Col className="col-auto">
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
                        </Col> */}
                      </Row>
                    </CardBody>
                  </Card>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default JobItem;