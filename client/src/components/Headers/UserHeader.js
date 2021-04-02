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

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";


const UserHeader = (props) => {

  const [isStudent, setIsStudent] = useState(props.loginInfo.isStudent);
  
  const getNameToDisplay = () => {
    if (isStudent)
    {
      return (
        <h1 className="display-2 text-white">Hello {props.loggedInUser.firstName}</h1>
        // <h1 className="display-2 text-white">Hello Mayan</h1>
      ) 
    }
    else
    {
      return (
        <h1 className="display-2 text-white">Hello {props.loggedInUser.orgName}</h1>
        // <h1 className="display-2 text-white">Hello Microsoft</h1>
      ) 
    }
  }

  const getIntroToDisplay = () => {
    if (isStudent)
    {
      return (
        <p className="text-white mt-0 mb-5">
        This is your profile page. You can edit your personal information
        and upload your resume.
        </p>
      ) 
    }
    else
    {
      return (
        <p className="text-white mt-0 mb-5">
        This is your profile page. You can edit your orgnization's information
        and upload job posts.
      </p>
      ) 
    }
  }

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("assets/img/theme/student-desk-bg.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              {getNameToDisplay()}
              {getIntroToDisplay()}
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
