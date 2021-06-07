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
import axios from 'axios';

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
import { uploadUserPhoto, updateUserInfo } from "components/Actions/userActions.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      userName: '',
      email: '',
      firstName: '',
      lastName: '',
      degree: '',
      university: '',
      skills: [],
      city: '',
      country: '',
      aboutMe: '',
      files: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Resume change
  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    this.setState({ files: [...this.state.files, ...filesArr] });
  }

  // Resume submit
  onSubmit(e) {
    console.log("submitting file", this.state.files[0].name);
    uploadUserPhoto(this.props.loggedInUser.email, this.state.files[0]);

  }

  // any input change
  handleChange(event) {
    switch (event.target.id)
    {
      // case "input-username":
      //   this.setState({userName: event.target.value});
      //   break;

      // case "input-email":
      //   this.setState({email: event.target.value});
      //   break;

      case "input-first-name":
        this.setState({firstName: event.target.value});
        break;

      case "input-last-name":
        this.setState({lastName: event.target.value});
        break;

      case "input-degree":
        this.setState({degree: event.target.value});
        break;

      case "input-university":
        this.setState({university: event.target.value});
        break;

      case "input-city":
        this.setState({city: event.target.value});
        break;
      
      case "input-country":
        this.setState({country: event.target.value});
        break;
      
      case "input-about-me":
        this.setState({aboutMe: event.target.value});
        break;

      case "input-skills":
        this.setState({skills: event.target.value});
        break;
      
      default:
        //
    }
  }

  // input submit
  handleSubmit(event) {
    // alert('An email was submitted: ' + this.state.emailValue);
    console.log("Profile.js: save user profile info");
    this.setState({email: this.props.loggedInUser.email});
    // send request to save all user profile info
    updateUserInfo(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.degree, 
      this.state.university, 
      this.state.city,
      this.state.country, 
      this.state.skills, 
      this.state.aboutMe);
  }

  componentDidMount() {
    // this is a preparation for maybe taking all the fields from this.state instead of this.props when rendering
    // so that everytime the user updates the profile info it will automatically render the changes
    // not sure if this will work.. need to check
    this.setState( { 
      ...this.state,
      firstName: this.props.loggedInUser.firstName,
      lastName: this.props.loggedInUser.lastName,
      degree: this.props.loggedInUser.degree,
      university: this.props.loggedInUser.university,
      city: this.props.loggedInUser.city,
      country: this.props.loggedInUser.country,
      aboutMe: this.props.loggedInUser.aboutMe,
      skills: this.props.loggedInUser.skills
     } );
  }

  render() {
    return (
      <>
        <UserHeader loginInfo={this.props.loginInfo} loggedInUser={this.props.loggedInUser} />
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
                            require("assets/img/theme/user-profile-placeholder.png")
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
                      {this.props.loggedInUser.firstName} {this.props.loggedInUser.lastName}
                      {/* <span className="font-weight-light">, 26</span> */}
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {this.props.loggedInUser.city}, {this.props.loggedInUser.country}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      {this.props.loggedInUser.degree}
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      {this.props.loggedInUser.university}
                    </div>
                    <hr className="my-4" />
                    <p>
                    {this.props.loggedInUser.aboutMe}
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
                              defaultValue="username.mayan"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              onChange={this.handleChange}
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
                              placeholder="mayan@example.com"
                              type="email"
                              onChange={this.handleChange}
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
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Mayan"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Menahem"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        {/* <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-date-of-birth"
                            >
                              Date of Birth
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="30/1/1990"
                              id="input-date-of-birth"
                              placeholder="Date of Birth"
                              type="text"
                            />
                          </FormGroup>
                        </Col> */}
                      </Row>
                    </div>
                    <hr className="my-4" />
                     {/* Education */}
                     <h6 className="heading-small text-muted mb-4">
                     Education
                    </h6>
                    <div className="pl-lg-4">
  
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Degree
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-degree"
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
                              University
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-university"
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
                              defaultValue="Givatayim"
                              id="input-city"
                              placeholder="City"
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
                              defaultValue="Israel"
                              id="input-country"
                              placeholder="Country"
                              type="text"
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="A few words about you ..."
                          type="textarea"
                          id="input-about-me"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </div>
                    <hr className="my-4" />
                    {/* Skills */}
                    <h6 className="heading-small text-muted mb-4">Skills</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>Skills</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="List your skills ..."
                          type="textarea"
                          id="input-skills"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </div>
                    <hr className="my-4" />
                    {/* Resume */}
                    <h6 className="heading-small text-muted mb-4">Resume</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>Resume</label>
                        <Input
                          name="file"
                          type="file"
                          id="input-resume"
                          onChange={this.onChange}
                        />
                      </FormGroup>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={this.onSubmit}
                        size="sm"
                      >
                        Upload
                      </Button>
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

export default Profile;



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