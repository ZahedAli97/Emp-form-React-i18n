import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { get_data, change_input } from "../ActionCreators/EmployeeFormAC";
import Toast from "react-bootstrap/Toast";
import { FormattedMessage, IntlProvider } from "react-intl";
import Chooser from "../Chooser";

function Home(props) {
  useEffect(() => {
    props.dispatch(get_data());
  });
  if (!props.isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Toast
              className=" text-center"
              data-autohide="false"
              aria-live="assertive"
              aria-atomic="true"
              style={{
                border: "1px solid rgba(0,0,0,.125)",
                borderRadius: "100rem",
                background: "transparent",
                width: "17rem",
                marginTop: "3%",
                marginLeft: "4.5rem"
              }}
            >
              <Toast.Body
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  color: "white"
                }}
              >
                {props.name}
                <FormattedMessage
                  id="home.welcomemsg"
                  defaultMessage=", Welcome to your Profile."
                />
              </Toast.Body>
            </Toast>

            <div
              className="card shadow"
              style={{
                width: "14rem",
                height: "20rem",
                margin: " 7rem 5rem",
                border: "1px solid rgba(0,0,0,.125)",
                background: "transparent",
                borderRadius: "100rem",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
              }}
            >
              <div
                className="shadow bg-info"
                style={{
                  // border: "1px solid rgba(0,0,0,.125)",
                  border: "1px solid lightskyblue",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  borderRadius: "100rem",
                  width: "12rem",
                  height: "12rem",
                  padding: "0.5rem"
                }}
              >
                <img
                  src={props.profilePic}
                  alt="Profile Pic"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "100rem",
                    marginBottom: "5rem",
                    marginRight: "5rem"
                  }}
                />
              </div>
              <Link to="/editdetails">
                <div
                  className="  btn text-white myback"
                  onMouseOver={e => {
                    e.target.classList.add(
                      "shadow",
                      "btn-outline-light",
                      "mytext",
                      "text-info"
                    );
                    e.target.classList.remove("myback");
                  }}
                  onMouseOut={e => {
                    e.target.classList.remove(
                      "shadow",
                      "btn-outline-light",
                      "mytext",
                      "text-info"
                    );
                    e.target.classList.add("myback");
                  }}
                  style={{
                    marginTop: "2rem",
                    marginLeft: "4rem",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "100rem"
                  }}
                >
                  <FormattedMessage
                    id="home.editprofile"
                    defaultMessage="Edit Profile"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div
                className="col"
                style={{
                  background: "transparent"
                }}
              >
                <div
                  className="btn text-white mynewback"
                  onMouseOver={e => {
                    e.target.classList.add(
                      "shadow",
                      "btn-outline-light",
                      "mytext",
                      "text-info"
                    );
                    e.target.classList.remove("mynewback");
                  }}
                  onMouseOut={e => {
                    e.target.classList.remove(
                      "shadow",
                      "btn-outline-light",
                      "mytext",
                      "text-info"
                    );
                    e.target.classList.add("mynewback");
                  }}
                  style={{
                    marginTop: "3%",
                    marginLeft: "60%",
                    width: "25%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "100rem"
                  }}
                  onClick={() => {
                    localStorage.setItem("isLoggedIn", false);
                    props.history.replace("/");
                  }}
                >
                  <FormattedMessage id="home.logout" defaultMessage="Logout" />
                </div>
              </div>
            </div>
            <div
              className="card shadow"
              style={{
                width: "42rem",
                height: "25rem",
                margin: " 4rem 0rem",
                border: "1px solid rgba(0,0,0,.125)",
                background: "transparent",
                borderRadius: "100rem",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
              }}
            >
              <div
                className="text-center"
                style={{
                  background: "",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  paddingLeft: "7rem"
                }}
              >
                <div className="row">
                  <div className="card shadow text-white text-center mylabel">
                    <label>
                      <FormattedMessage id="home.name" defaultMessage="Name:" />
                    </label>
                  </div>
                  <div className="card shadow text-white text-center mylabelvalue">
                    <p>{props.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="card shadow text-white text-center mylabel">
                    <label>
                      <FormattedMessage
                        id="home.email"
                        defaultMessage="Email:"
                      />
                    </label>
                  </div>
                  <div className="card shadow text-white text-center mylabelvalue">
                    <p>{props.email}</p>
                  </div>
                </div>{" "}
                <div className="row">
                  <div className="card shadow text-white text-center mylabel">
                    <label>
                      <FormattedMessage
                        id="home.mobile"
                        defaultMessage="Mobile Number:"
                      />
                    </label>
                  </div>
                  <div className="card shadow text-white text-center mylabelvalue">
                    <p>{props.mobile}</p>
                  </div>
                </div>{" "}
                <div className="row">
                  <div className="card shadow text-white text-center mylabel">
                    <label>
                      <FormattedMessage
                        id="home.dob"
                        defaultMessage="Date Of Birth:"
                      />
                    </label>
                  </div>
                  <div className="card shadow text-white text-center mylabelvalue">
                    <p>{props.dateOfBirth}</p>
                  </div>
                </div>{" "}
                <div className="row">
                  <div className="card shadow text-white text-center mylabel">
                    <label>
                      <FormattedMessage
                        id="home.gender"
                        defaultMessage="Gender:"
                      />
                    </label>
                  </div>
                  <div className="card shadow text-white text-center mylabelvalue">
                    <p>{props.gender}</p>
                  </div>
                </div>{" "}
                <div className="row">
                  <div className="card shadow text-white text-center mylabel">
                    <label>
                      <FormattedMessage
                        id="home.skills"
                        defaultMessage="Skills:"
                      />
                    </label>
                  </div>
                  <div className="card shadow text-white text-center mylabelvalue">
                    <p>{props.skills}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <Chooser />
        </div>
      </div>
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
    profilePic: state.profilePic,
    isLoggedIn: state.isLoggedIn,
    lang: state.lang
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Home);
