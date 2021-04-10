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
import { NavLink as NavLinkRRD } from "react-router-dom";


// reactstrap components
import {
  Button,
  Row,
  Col,
  Container,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

const Identify = (props) => {

  return (
    <>     
    <Container>
      <div className="header-body text-center mb-7">
        <Row className="justify-content-center">
          <Col lg="5" md="6">
            <h1 className="text-white">Welcome!</h1>
                <p className="text-lead text-light">
                  Choose how you wish to sign in
                </p>
          </Col>
        </Row>
      </div>
      </Container>
      <Container>
      <div className="header-body text-center mb-9">
        <Row className="justify-content-center">
          <Col>
            <Nav navbar>
              <NavItem>
                <NavLink
                  to={"/auth/login"}
                  tag={NavLinkRRD}
                  activeClassName="active"
                >
                  <Button onClick={() => props.setStudentOrOrg(true)}>
                    <i className="ni ni-hat-3 text-primary mr-2" />
                    Student
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav navbar>
              <NavItem>
                <NavLink
                  to={"/auth/login"}
                  tag={NavLinkRRD}
                  activeClassName="active"
                >
                  <Button onClick={() => props.setStudentOrOrg(false)}>
                    <i className="ni ni-world-2 text-primary mr-2" />
                    Organization
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </div>
      </Container> 
      { console.log ("Hi") }
    </>
  );
};

export default Identify;
