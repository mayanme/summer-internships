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
import { NavLink as NavLinkRRD, Link } from "react-router-dom";


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
  Container,
  NavbarBrand,
  Navbar,
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


// ------------- MY CODE ----------------

{/* <Container>
<div className="header-body text-center mb-7">
  <Row className="justify-content-center">
    <Col lg="5" md="6">
      <h1 className="text-white">Who are you?</h1>
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
            <Button>
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
            <Button>
              <i className="ni ni-world-2 text-primary mr-2" />
              Organization
            </Button>
          </NavLink>
        </NavItem>
      </Nav>
    </Col>
  </Row>
</div>
</Container> */}


// --------------- THEIR CODE -------------------
// <Col lg="5" md="7">
// <Card className="bg-secondary shadow border-0">
//   <CardHeader className="bg-transparent pb-5">
//     <div className="text-muted text-center mt-2 mb-3">
//       <small>Sign in with</small>
//     </div>
//     <div className="btn-wrapper text-center">
//       <Button
//         className="btn-neutral btn-icon"
//         color="default"
//         href="#pablo"
//         onClick={(e) => e.preventDefault()}
//       >
//         <span className="btn-inner--icon">
//           <img
//             alt="..."
//             src={
//               require("../../assets/img/icons/common/github.svg")
//                 .default
//             }
//           />
//         </span>
//         <span className="btn-inner--text">Github</span>
//       </Button>
//       <Button
//         className="btn-neutral btn-icon"
//         color="default"
//         href="#pablo"
//         onClick={(e) => e.preventDefault()}
//       >
//         <span className="btn-inner--icon">
//           <img
//             alt="..."
//             src={
//               require("../../assets/img/icons/common/google.svg")
//                 .default
//             }
//           />
//         </span>
//         <span className="btn-inner--text">Google</span>
//       </Button>
//     </div>
//   </CardHeader>
//   <CardBody className="px-lg-5 py-lg-5">
//     <div className="text-center text-muted mb-4">
//       <small>Or sign in with credentials</small>
//     </div>
//     <Form role="form">
//       <FormGroup className="mb-3">
//         <InputGroup className="input-group-alternative">
//           <InputGroupAddon addonType="prepend">
//             <InputGroupText>
//               <i className="ni ni-email-83" />
//             </InputGroupText>
//           </InputGroupAddon>
//           <Input
//             placeholder="Email"
//             type="email"
//             autoComplete="new-email"
//           />
//         </InputGroup>
//       </FormGroup>
//       <FormGroup>
//         <InputGroup className="input-group-alternative">
//           <InputGroupAddon addonType="prepend">
//             <InputGroupText>
//               <i className="ni ni-lock-circle-open" />
//             </InputGroupText>
//           </InputGroupAddon>
//           <Input
//             placeholder="Password"
//             type="password"
//             autoComplete="new-password"
//           />
//         </InputGroup>
//       </FormGroup>
//       <div className="custom-control custom-control-alternative custom-checkbox">
//         <input
//           className="custom-control-input"
//           id=" customCheckLogin"
//           type="checkbox"
//         />
//         <label
//           className="custom-control-label"
//           htmlFor=" customCheckLogin"
//         >
//           <span className="text-muted">Remember me</span>
//         </label>
//       </div>
//       <div className="text-center">
//         <Button className="my-4" color="primary" type="button">
//           Sign in
//         </Button>
//       </div>
//     </Form>
//   </CardBody>
// </Card>
// <Row className="mt-3">
//   <Col xs="6">
//     <a
//       className="text-light"
//       href="#pablo"
//       onClick={(e) => e.preventDefault()}
//     >
//       <small>Forgot password?</small>
//     </a>
//   </Col>
//   <Col className="text-right" xs="6">
//     <a
//       className="text-light"
//       href="#pablo"
//       onClick={(e) => e.preventDefault()}
//     >
//       <small>Create new account</small>
//     </a>
//   </Col>
// </Row>
// </Col>
