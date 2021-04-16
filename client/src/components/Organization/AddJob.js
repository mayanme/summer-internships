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
import React, { useState } from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "views/examples/variables/charts.js";

import { addJobItem } from "../Actions/jobActions";

const AddJob = (props) => {

  const [jobName, setJobName] = useState("Internship Name");
  const [jobDescription, setJobDescription] = useState("Describe the responsibilities and qualifications for the position...");
  const [jobDuration, setJobDuration] = useState("0");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <>
    <div className="bg-gradient-default pt-7">
    <div className="row justify-content-center">
    <Card className="bg-secondary shadow  pb-0 pb-xl-0 w-75">
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">Add Job Post</h3>
            </Col>
            <Col className="text-right" xs="4">
              <Button
                color="primary"
                onClick={() => addJobItem(jobName,
                                          props.loggedInUser.orgName,
                                          jobDescription,
                                          jobDuration,
                                          props.loggedInUser.email)}
                size="md"
              >
                Save
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Form>
            {/* Description */}
            {/* <h6 className="heading-small text-muted mb-4">Add Job Post</h6> */}
            <div className="pl-lg-4">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-country"
                >
                  Internship Name
                </label>
                <Input
                  className="form-control-alternative"
                  defaultValue={jobName}
                  id="input-country"
                  placeholder="Internship Name"
                  type="text"
                  onChange={e => setJobName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-country"
                >
                  Internship Description
                </label>
                <Input
                  className="form-control-alternative"
                  placeholder="Describe the responsibilities and qualifications for the position..."
                  rows="4"
                  defaultValue={jobDescription}
                  type="textarea"
                  onChange={e => setJobDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-country"
                >
                  Internship Duration (in months)
                </label>
                <Input
                  className="form-control-alternative"
                  defaultValue={jobDuration}
                  id="input-country"
                  placeholder="0"
                  type="text"
                  onChange={e => setJobDuration(e.target.value)}
                />
              </FormGroup>
            </div>
          </Form>
        </CardBody>
      </Card>
      </div>
    </div>
    </>
  );
};

export default AddJob;


// {/* Page content */}
// <Container className="mt--7" fluid>
// <Row>
//   <Col className="mb-5 mb-xl-0" xl="8">
//     <Card className="bg-gradient-default shadow">
//       <CardHeader className="bg-transparent">
//         <Row className="align-items-center">
//           <div className="col">
//             <h6 className="text-uppercase text-light ls-1 mb-1">
//               Overview
//             </h6>
//             <h2 className="text-white mb-0">Sales value</h2>
//           </div>
//           <div className="col">
//             <Nav className="justify-content-end" pills>
//               <NavItem>
//                 <NavLink
//                   className={classnames("py-2 px-3", {
//                     active: activeNav === 1,
//                   })}
//                   href="#pablo"
//                   onClick={(e) => toggleNavs(e, 1)}
//                 >
//                   <span className="d-none d-md-block">Month</span>
//                   <span className="d-md-none">M</span>
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   className={classnames("py-2 px-3", {
//                     active: activeNav === 2,
//                   })}
//                   data-toggle="tab"
//                   href="#pablo"
//                   onClick={(e) => toggleNavs(e, 2)}
//                 >
//                   <span className="d-none d-md-block">Week</span>
//                   <span className="d-md-none">W</span>
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </div>
//         </Row>
//       </CardHeader>
//       <CardBody>
//         {/* Chart */}
//         <div className="chart">
//           <Line
//             data={chartExample1[chartExample1Data]}
//             options={chartExample1.options}
//             getDatasetAtEvent={(e) => console.log(e)}
//           />
//         </div>
//       </CardBody>
//     </Card>
//   </Col>
//   <Col xl="4">
//     <Card className="shadow">
//       <CardHeader className="bg-transparent">
//         <Row className="align-items-center">
//           <div className="col">
//             <h6 className="text-uppercase text-muted ls-1 mb-1">
//               Performance
//             </h6>
//             <h2 className="mb-0">Total orders</h2>
//           </div>
//         </Row>
//       </CardHeader>
//       <CardBody>
//         {/* Chart */}
//         <div className="chart">
//           <Bar
//             data={chartExample2.data}
//             options={chartExample2.options}
//           />
//         </div>
//       </CardBody>
//     </Card>
//   </Col>
// </Row>
// <Row className="mt-5">
//   <Col className="mb-5 mb-xl-0" xl="8">
//     <Card className="shadow">
//       <CardHeader className="border-0">
//         <Row className="align-items-center">
//           <div className="col">
//             <h3 className="mb-0">Page visits</h3>
//           </div>
//           <div className="col text-right">
//             <Button
//               color="primary"
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//               size="sm"
//             >
//               See all
//             </Button>
//           </div>
//         </Row>
//       </CardHeader>
//       <Table className="align-items-center table-flush" responsive>
//         <thead className="thead-light">
//           <tr>
//             <th scope="col">Page name</th>
//             <th scope="col">Visitors</th>
//             <th scope="col">Unique users</th>
//             <th scope="col">Bounce rate</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">/argon/</th>
//             <td>4,569</td>
//             <td>340</td>
//             <td>
//               <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">/argon/index.html</th>
//             <td>3,985</td>
//             <td>319</td>
//             <td>
//               <i className="fas fa-arrow-down text-warning mr-3" />{" "}
//               46,53%
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">/argon/charts.html</th>
//             <td>3,513</td>
//             <td>294</td>
//             <td>
//               <i className="fas fa-arrow-down text-warning mr-3" />{" "}
//               36,49%
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">/argon/tables.html</th>
//             <td>2,050</td>
//             <td>147</td>
//             <td>
//               <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">/argon/profile.html</th>
//             <td>1,795</td>
//             <td>190</td>
//             <td>
//               <i className="fas fa-arrow-down text-danger mr-3" />{" "}
//               46,53%
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </Card>
//   </Col>
//   <Col xl="4">
//     <Card className="shadow">
//       <CardHeader className="border-0">
//         <Row className="align-items-center">
//           <div className="col">
//             <h3 className="mb-0">Social traffic</h3>
//           </div>
//           <div className="col text-right">
//             <Button
//               color="primary"
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//               size="sm"
//             >
//               See all
//             </Button>
//           </div>
//         </Row>
//       </CardHeader>
//       <Table className="align-items-center table-flush" responsive>
//         <thead className="thead-light">
//           <tr>
//             <th scope="col">Referral</th>
//             <th scope="col">Visitors</th>
//             <th scope="col" />
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">Facebook</th>
//             <td>1,480</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">60%</span>
//                 <div>
//                   <Progress
//                     max="100"
//                     value="60"
//                     barClassName="bg-gradient-danger"
//                   />
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">Facebook</th>
//             <td>5,480</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">70%</span>
//                 <div>
//                   <Progress
//                     max="100"
//                     value="70"
//                     barClassName="bg-gradient-success"
//                   />
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">Google</th>
//             <td>4,807</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">80%</span>
//                 <div>
//                   <Progress max="100" value="80" />
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">Instagram</th>
//             <td>3,678</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">75%</span>
//                 <div>
//                   <Progress
//                     max="100"
//                     value="75"
//                     barClassName="bg-gradient-info"
//                   />
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">twitter</th>
//             <td>2,645</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">30%</span>
//                 <div>
//                   <Progress
//                     max="100"
//                     value="30"
//                     barClassName="bg-gradient-warning"
//                   />
//                 </div>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </Card>
//   </Col>
// </Row>
// </Container>