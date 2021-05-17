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
  const [jobNumber, setJobNumber] = useState("0");

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
                                          jobNumber,
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
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-country"
                >
                  Internship Number
                </label>
                <Input
                  className="form-control-alternative"
                  defaultValue={jobNumber}
                  id="input-country"
                  placeholder="0"
                  type="text"
                  onChange={e => setJobNumber(e.target.value)}
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
