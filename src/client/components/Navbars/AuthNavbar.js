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
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const AdminNavbar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark bg-default" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <h2 className="text-white">Our Logo</h2>
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    {/* <img
                      alt="..."
                      src={
                        require("../../assets/img/brand/argon-react.png")
                          .default
                      }
                    /> */}
                    <h1 className="text-primary">Our Logo</h1>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>

          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;

// <Nav className="ml-auto" navbar>
// <NavItem>
//   <NavLink className="nav-link-icon" to="/" tag={Link}>
//     <i className="ni ni-planet" />
//     <span className="nav-link-inner--text">Dashboard</span>
//   </NavLink>
// </NavItem>
// <NavItem>
//   <NavLink
//     className="nav-link-icon"
//     to="/auth/register"
//     tag={Link}
//   >
//     <i className="ni ni-circle-08" />
//     <span className="nav-link-inner--text">Register</span>
//   </NavLink>
// </NavItem>
// <NavItem>
//   <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
//     <i className="ni ni-key-25" />
//     <span className="nav-link-inner--text">Login</span>
//   </NavLink>
// </NavItem>
// <NavItem>
//   <NavLink
//     className="nav-link-icon"
//     to="/student/user-profile"
//     tag={Link}
//   >
//     <i className="ni ni-single-02" />
//     <span className="nav-link-inner--text">Profile</span>
//   </NavLink>
// </NavItem>
// </Nav>


{/* 
LOGO
  <img
alt="..."
src={
  require("../../assets/img/brand/argon-react-white.png").default
}
/> */}