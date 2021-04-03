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
import { NavLink as NavLinkRRD, Link, Redirect, Route } from "react-router-dom";
import { userExists, addUser, logUserIn } from "components/Actions/userActions.js";
import { orgExists, addOrg, logOrgIn } from "components/Actions/orgActions.js";



// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '', 
      passwordValue: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id == "email-login-id")
    {
      this.setState({emailValue: event.target.value});
    }
    else
    {
      // password-login-id
      this.setState({passwordValue: event.target.value});
    }
  }

  handleSubmit(event) {
    // alert('An email was submitted: ' + this.state.emailValue);
    console.log("Login.js: logging in");
    var success;

    if (this.props.loginInfo.isStudent)
    {
      success = logUserIn(this.state.emailValue, this.state.passwordValue);
    }
    else
    {
      success = logOrgIn(this.state.emailValue, this.state.passwordValue);
    }

    // set as logged in
    console.log("success:", success);
    this.props.setLoggedIn(true);
  }

  render() {
    if (this.props.loginInfo.isLoggedIn)
    {
      if (this.props.loginInfo.isStudent)
      {
        return <Redirect from="/auth/identify" to="/student/studentfeed"/>
      }
      else
      {
        // is org
        return <Redirect from="/auth/identify" to="/org/orgfeed"/>
      }
    }
    
    // else, render the login page

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    {/* <img
                      alt="..."
                      src={
                        require("assets/img/icons/common/github.svg")
                          .default
                      }
                    /> */}
                    <i className="fab fa-facebook fa-lg" />
                  </span>
                  <span className="btn-inner--text">Facebook</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    {/* <img
                      alt="..."
                      src={
                        require("assets/img/icons/common/google.svg")
                          .default
                      }
                    /> */}
                    <i className="fab fa-google fa-lg" />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="email-login-id"
                      onChange={this.handleChange} 
                      value={this.state.emailValue}
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="password-login-id"
                      placeholder="Password"
                      onChange={this.handleChange} 
                      value={this.state.passwordValue}
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button 
                    className="my-4" 
                    color="primary"
                    onClick={this.handleSubmit}
                    type="button">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-2">
            <Col xs="6">
              <Nav navbar>
                <NavItem>
                  <NavLink
                    to={"/auth/register"}
                    tag={NavLinkRRD}
                    activeClassName="active"
                    className="text-light"
                  >
                  <small>Forgot password?</small>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col className="text-right" xs="6">
              <Nav navbar>
                <NavItem>
                  <NavLink
                    to={"/auth/register"}
                    tag={NavLinkRRD}
                    activeClassName="active"
                    className="text-light"
                  >
                  <small>Create new account</small>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Col>
      </>
    );
  
  }
};

export default Login;
