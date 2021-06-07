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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { updateOrgInfo } from "components/Actions/orgActions.js";

class OrgProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      orgName: '',
      email: '',
      industry: '',
      city: '',
      country: '',
      aboutUs: '',
      files: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // any input change
  handleChange(event) {
    switch (event.target.id)
    {
      case "input-org-name":
        this.setState({firstName: event.target.value});
        break;

      case "input-industry":
        this.setState({lastName: event.target.value});
        break;

      case "input-city":
        this.setState({city: event.target.value});
        break;
      
      case "input-country":
        this.setState({country: event.target.value});
        break;
      
      case "input-about-us":
        this.setState({aboutMe: event.target.value});
        break;

      default:
        //
    }
  }

  // input submit
  handleSubmit(event) {
    // alert('An email was submitted: ' + this.state.emailValue);
    console.log("OrgProfile.js: save org profile info");
    this.setState({email: this.props.loggedInUser.email});
    // send request to save all user profile info
    updateOrgInfo(
      this.state.orgName,
      this.state.email,
      this.state.industry, 
      this.state.city,
      this.state.country,  
      this.state.aboutUs);
  }

  componentDidMount() {
    // this is a preparation for maybe taking all the fields from this.state instead of this.props when rendering
    // so that everytime the user updates the profile info it will automatically render the changes
    // not sure if this will work.. need to check
    this.setState( { 
      ...this.state,
      orgName: this.props.loggedInUser.orgName,
      industry: this.props.loggedInUser.industry,
      city: this.props.loggedInUser.city,
      country: this.props.loggedInUser.country,
      aboutUs: this.props.loggedInUser.aboutUs
     } );
  }

  render() {
    return (
      <>
        <UserHeader 
          loginInfo={this.props.loginInfo} 
          loggedInUser={this.props.loggedInUser} />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={
                            require("assets/img/theme/org-profile-placeholder.png")
                              .default
                          }
                        />
                      </a>
                    </div>
                  </Col>
                </Row>           
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                {/* <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button> */}
                </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      {this.props.loggedInUser.orgName}
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {this.props.loggedInUser.city}, {this.props.loggedInUser.country}
                    </div>
                    <div className="h4 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      {this.props.loggedInUser.industry}
                    </div>
                    <hr className="my-4" />
                    <p>
                    {this.props.loggedInUser.aboutUs}
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col>
                    <Button
                      color="primary"
                      onClick={this.handleSubmit}
                      size="md"
                    >
                      Save
                    </Button>
                    </Col>
                    <Col className="text-right" xs="4">
                      {/* <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button> */}
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      {/* <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="username.microsoft"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="microsoft@microsoft.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row> */}
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Company name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-org-name"
                              placeholder=""
                              type="text"
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Location
                    </h6>
                    <div className="pl-lg-4">
  
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-city"
                              placeholder=""
                              type="text"
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-country"
                              placeholder=""
                              type="text"
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About Us</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Us</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about your company ..."
                          rows="4"
                          defaultValue="A few words about your company ..."
                          type="textarea"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </div>
                    
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default OrgProfile;



// <Row>
// <Col md="12">
//   <FormGroup>
//     <label
//       className="form-control-label"
//       htmlFor="input-address"
//     >
//       Address
//     </label>
//     <Input
//       className="form-control-alternative"
//       defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//       id="input-address"
//       placeholder="Home Address"
//       type="text"
//     />
//   </FormGroup>
// </Col>
// </Row>