import React, { useState } from "react";
import SkillList from "./FormComponents/SkillList";
import GenderList from "./FormComponents/GenderList";
import { connect } from "react-redux";
import { change_input } from "../ActionCreators/EmployeeFormAC";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

let bypass = null; //For diplaying error message related to field

function EmployeeForm(props) {
  const handleChange = e => {
    props.dispatch(change_input(e.target.name, e.target.value));
  };
  const onfocus = e => {
    bypass = null;
    props.dispatch(change_input("error_msg", ""));
  };

  const validate = e => {
    if (!e.target.checkValidity()) {
      bypass = e.target.name;
      props.dispatch(change_input("error_msg", e.target.validationMessage));
    }
  };

  const handleComponents = e => {
    if (props.gender === "") {
      props.dispatch(change_input("error_msg", "Please Select a Gender."));
    }
    if (props.skills === null) {
      props.dispatch(change_input("error_msg", "Select atleast one Skill."));
    }
  };

  const handleImage = event => {
    let data;
    let reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      reader.onload = function(e) {
        data = e.target.result;
        props.dispatch(change_input("profilePic", data));
      };
      let imgbase64 = reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // 0: input-id
    // 1: input-name
    // 2: input-password
    // 3: input-mobile
    // 4: input-email
    // 5: input-D.O.B
    // 10: input-Profile Pic

    if (!e.target[1].checkValidity()) {
      console.log(e.target[1].name);
      bypass = e.target[1].name;
      props.dispatch(change_input("error_msg", e.target[1].validationMessage));
      return false;
    }
    if (!e.target[2].checkValidity()) {
      console.log(e.target[2].name);
      bypass = e.target[2].name;
      props.dispatch(change_input("error_msg", e.target[1].validationMessage));
      return false;
    }
    if (!e.target[3].checkValidity()) {
      console.log(e.target[3].name);
      bypass = e.target[3].name;
      props.dispatch(change_input("error_msg", e.target[3].validationMessage));
      return false;
    }
    if (!e.target[4].checkValidity()) {
      console.log(e.target[4].name);
      bypass = e.target[4].name;
      props.dispatch(change_input("error_msg", e.target[4].validationMessage));
      return false;
    }
    if (!e.target[5].checkValidity()) {
      console.log(e.target[5].name);
      bypass = e.target[5].name;
      props.dispatch(change_input("error_msg", e.target[5].validationMessage));
      return false;
    }
    if (props.gender === "") {
      props.dispatch(change_input("error_msg", "Please Select a Gender."));
      return false;
    }
    if (props.skills === null) {
      props.dispatch(change_input("error_msg", "Select atleast one Skill."));
      return false;
    }
    if (!e.target[10].checkValidity()) {
      bypass = e.target[10].name;
      props.dispatch(change_input("error_msg", e.target[10].validationMessage));
      return false;
    }

    alert("Your form is correct!");
  };

  return (
    <>
      <Card
        className="shadow rounded"
        style={{ width: "50rem", height: "50rem", margin: "auto" }}
      >
        {" "}
        <Card.Header className="text-center">Employee Details</Card.Header>
        <br />
        <Container style={{ padding: "relative" }}>
          <Form onSubmit={handleSubmit} noValidate>
            {/* <form > */}
            <input type="hidden" name="Id" />

            {/* <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group> */}
            <Form.Group as={Row} controlId="formBasicName">
              <Form.Label column sm={2}>
                Name:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  onFocus={onfocus}
                  onBlur={validate}
                />
                {bypass === "name" && (
                  <Alert variant="danger">{props.error_msg}</Alert>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicPassword">
              <Form.Label column sm={2}>
                Password:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                  onFocus={onfocus}
                  onBlur={validate}
                />
                {bypass === "password" && (
                  <Alert variant="danger">{props.error_msg}</Alert>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicMobile">
              <Form.Label column sm={2}>
                Mobile:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="tel"
                  name="mobile"
                  pattern="[0-9]{10}"
                  required
                  onChange={handleChange}
                  onFocus={onfocus}
                  onBlur={validate}
                />
                {bypass === "mobile" && (
                  <Alert variant="danger">{props.error_msg}</Alert>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={2}>
                Email:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  onFocus={onfocus}
                  onBlur={validate}
                />
                {bypass === "email" && (
                  <Alert variant="danger">{props.error_msg}</Alert>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicDateOfBirth">
              <Form.Label column sm={2}>
                Date of Birth:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  min="01-01-1900"
                  max="-12-31"
                  required
                  onChange={handleChange}
                  onFocus={onfocus}
                  onBlur={validate}
                />
                {bypass === "dateOfBirth" && (
                  <Alert variant="danger">{props.error_msg}</Alert>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicGender">
              <Form.Label column sm={2}>
                Gender:
              </Form.Label>
              <Col sm={10}>
                <div onFocus={onfocus} onBlur={handleComponents}>
                  <GenderList />
                </div>
                {props.error_msg === "Please Select a Gender." && (
                  <Alert variant="danger">{props.error_msg}</Alert>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicSkills">
              <Form.Label column sm={2}>
                Skills:
              </Form.Label>
              <Col sm={10}>
                <div onFocus={onfocus} onBlur={handleComponents}>
                  <SkillList />
                </div>
                {props.error_msg === "Select atleast one Skill." && (
                  <Alert variant="danger">{props.error_msg}</Alert>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicProfilePic">
              <Form.Label column sm={2}>
                Profile Picture:
              </Form.Label>
              <br />
              <Col sm={10}>
                <div className="bg-primary rounded shadow-lg">
                  <Form.Text className="text-muted">Choose a Picture</Form.Text>
                  <Form.Control
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    required
                    onFocus={onfocus}
                    onBlur={validate}
                    onChange={handleImage}
                    style={{ opacity: "0" }}
                  />
                </div>
                {props.profilePic !== undefined && (
                  <>
                    <img
                      src={props.profilePic}
                      alt="profile-pic"
                      style={{ width: "5rem", height: "5rem" }}
                    />
                  </>
                )}
                {bypass === "avatar" && (
                  <Alert variant="danger">{props.error_msg}</Alert>
                )}
              </Col>
            </Form.Group>
            <div className="text-center">
              <Button type="submit">SUBMIT</Button>
            </div>
            {/* </form> */}
          </Form>
        </Container>
      </Card>
    </>
  );
}

function mapStateToProps(state) {
  return {
    id: state.id,
    name: state.name,
    password: state.password,
    mobile: state.mobile,
    email: state.email,
    dateOfBirth: state.dateOfBirth,
    gender: state.gender,
    skills: state.skills,
    profilePic: state.profilePic,
    error_msg: state.error_msg
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(EmployeeForm);
