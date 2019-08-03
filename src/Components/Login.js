// Not using as of Now.

import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { login_employee } from "../ActionCreators/EmployeeFormAC";
import { connect } from "react-redux";

//import { Link } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
//import { RouteComponentProps } from "react-router";

function Login(props, RouteComponentProps) {
  const handleLogin = e => {
    e.preventDefault();
    const body = {
      email: e.target[0].value,
      password: e.target[1].value
    };

    props.dispatch(login_employee(body));

    //props.history.replace("/home");
    return <Redirect to="/home" />;
  };
  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" placeholder="Enter Email" required />
        <br />
        <label>Passowrd:</label>
        <input type="password" placeholder="Enter Passowrd" required />
        <br />
        <input type="submit" value="LOGIN" />
      </form>
      <Link to="/register">Register Here</Link>
    </>
  );
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Login);
