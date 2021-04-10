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
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import Identify from "components/Identify.js";
import Login from "components/Login.js";
import Register from "components/Register.js";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
        <div className="header pt-5 pb-3 mb-8 py-lg-5">
        </div>
        {/* Page content */}
        <Container className="mt--10 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {/* {getRoutes(routes)} */}
              <Route 
                path="/auth/identify" 
                render={() => <Identify 
                                loggedInUser={props.loggedInUser} 
                                loginInfo={props.loginInfo}
                                setStudentOrOrg={props.setStudentOrOrg}
                                setLoggedIn={props.setLoggedIn}
                                setUserInfo={props.setUserInfo} />} />
              <Route 
                path="/auth/login" 
                render={() => <Login 
                                loggedInUser={props.loggedInUser} 
                                loginInfo={props.loginInfo}
                                setStudentOrOrg={props.setStudentOrOrg}
                                setLoggedIn={props.setLoggedIn}
                                setUserInfo={props.setUserInfo} />} />
              <Route 
                path="/auth/register" 
                render={() => <Register 
                                loggedInUser={props.loggedInUser} 
                                loginInfo={props.loginInfo}
                                setStudentOrOrg={props.setStudentOrOrg}
                                setLoggedIn={props.setLoggedIn}
                                setUserInfo={props.setUserInfo} />} />
              <Redirect from="*" to="/" />
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
