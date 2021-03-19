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

const JobItem = () => {
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
                          Software Engineer Intern
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          Microsoft
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <span className="h4 pb-5 pt-3 pl-3 mb-0 w-75">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </span>
                    </Row>
                    <Row>
                      <Col>
                        <p className="ml-3 mt-3 mb-0 text-muted text-sm">
                          <span className="text-success mr-2">
                            <i className="fa fa-arrow-up" /> 85%
                          </span>{" "}
                          <span className="text-nowrap">3 Months</span>
                        </p>
                      </Col>
                      <Col className="col-auto">
                        <Button
                          aria-pressed={true}
                          className="active"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          role="button"
                          size="lg"
                        >
                          Apply
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
};

export default JobItem;


// <Col lg="6" xl="3">
//                 <Card className="card-stats mb-4 mb-xl-0">
//                   <CardBody>
//                     <Row>
//                       <div className="col">
//                         <CardTitle
//                           tag="h5"
//                           className="text-uppercase text-muted mb-0"
//                         >
//                           New users
//                         </CardTitle>
//                         <span className="h2 font-weight-bold mb-0">2,356</span>
//                       </div>
//                       <Col className="col-auto">
//                         <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
//                           <i className="fas fa-chart-pie" />
//                         </div>
//                       </Col>
//                     </Row>
//                     <p className="mt-3 mb-0 text-muted text-sm">
//                       <span className="text-danger mr-2">
//                         <i className="fas fa-arrow-down" /> 3.48%
//                       </span>{" "}
//                       <span className="text-nowrap">Since last week</span>
//                     </p>
//                   </CardBody>
//                 </Card>
//               </Col>
//               <Col lg="6" xl="3">
//                 <Card className="card-stats mb-4 mb-xl-0">
//                   <CardBody>
//                     <Row>
//                       <div className="col">
//                         <CardTitle
//                           tag="h5"
//                           className="text-uppercase text-muted mb-0"
//                         >
//                           Sales
//                         </CardTitle>
//                         <span className="h2 font-weight-bold mb-0">924</span>
//                       </div>
//                       <Col className="col-auto">
//                         <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
//                           <i className="fas fa-users" />
//                         </div>
//                       </Col>
//                     </Row>
//                     <p className="mt-3 mb-0 text-muted text-sm">
//                       <span className="text-warning mr-2">
//                         <i className="fas fa-arrow-down" /> 1.10%
//                       </span>{" "}
//                       <span className="text-nowrap">Since yesterday</span>
//                     </p>
//                   </CardBody>
//                 </Card>
//               </Col>
//               <Col lg="6" xl="3">
//                 <Card className="card-stats mb-4 mb-xl-0">
//                   <CardBody>
//                     <Row>
//                       <div className="col">
//                         <CardTitle
//                           tag="h5"
//                           className="text-uppercase text-muted mb-0"
//                         >
//                           Performance
//                         </CardTitle>
//                         <span className="h2 font-weight-bold mb-0">49,65%</span>
//                       </div>
//                       <Col className="col-auto">
//                         <div className="icon icon-shape bg-info text-white rounded-circle shadow">
//                           <i className="fas fa-percent" />
//                         </div>
//                       </Col>
//                     </Row>
//                     <p className="mt-3 mb-0 text-muted text-sm">
//                       <span className="text-success mr-2">
//                         <i className="fas fa-arrow-up" /> 12%
//                       </span>{" "}
//                       <span className="text-nowrap">Since last month</span>
//                     </p>
//                   </CardBody>
//                 </Card>
//               </Col>