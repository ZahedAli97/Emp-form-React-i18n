import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <br />

      <label>Name:</label>
      <p>{props.name}</p>
      <br />

      <label>Email:</label>
      <p>{props.email}</p>
      <br />

      <label>Mobile Number:</label>
      <p>{props.mobile}</p>
      <br />

      <label>Date of Birth:</label>
      <p>{props.dateOfBirth}</p>
      <br />

      <label>Gender:</label>
      <p>{props.gender}</p>
      <br />

      <label>Skills:</label>
      <p>{props.skills}</p>
      <br />

      <label>Profile Pic:</label>
      <img src={props.profilePic} alt="Profile Pic" />
      <br />
    </>
  );
}

function mapStateToProps(state) {
  return {
    name: state.name,
    mobile: state.mobile,
    email: state.email,
    dateOfBirth: state.dateOfBirth,
    gender: state.gender,
    skills: state.skills,
    profilePic: state.profilePic
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Home);
