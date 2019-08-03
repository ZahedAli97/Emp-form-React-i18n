import React, { Component } from "react";
import { connect } from "react-redux";
import { change_input } from "./ActionCreators/EmployeeFormAC";
import Dropdown from "react-bootstrap/Dropdown";

function ChooserReload(props) {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="info"
          className="btn btn-outline-light text-white"
          id="dropdown-basic"
          style={{
            width: "10rem",
            background: "rgba(255, 255, 255, 0.4)"
          }}
        >
          {localStorage.getItem("lang") === "en" && "English"}
          {localStorage.getItem("lang") === "ru" && "Russian"}
          {localStorage.getItem("lang") === "es" && "Spanish"}
          {localStorage.getItem("lang") === "fi" && "Finnish"}
          {localStorage.getItem("lang") === null && "English"}
        </Dropdown.Toggle>
        {/* <Dropdown.Menu> */}
        <Dropdown.Menu style={{ background: "rgba(255, 255, 255, 0.4)" }}>
          <Dropdown.Item
            href="#"
            className="btn btn-info text-center"
            style={{
              backgroundColor: "#54b9f85f"
            }}
          >
            <div
              className="btn btn-outline-light text-white text-center"
              style={{ width: "7rem" }}
              onMouseOver={e => {
                e.target.classList.add("shadow", "mytext", "text-info");
                e.target.classList.remove("mynewback");
              }}
              onMouseOut={e => {
                e.target.classList.remove("shadow", "mytext", "text-info");
                e.target.classList.add("mynewback");
              }}
              onClick={() => {
                localStorage.setItem("lang", "en");
                window.location.reload();
                props.dispatch(change_input("lang", "en"));
              }}
            >
              English
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            className="btn btn-info text-center"
            style={{
              backgroundColor: "#54b9f85f"
            }}
          >
            <div
              className="btn btn-outline-light text-white text-center"
              style={{ width: "7rem" }}
              onMouseOver={e => {
                e.target.classList.add("shadow", "mytext", "text-info");
                e.target.classList.remove("mynewback");
              }}
              onMouseOut={e => {
                e.target.classList.remove("shadow", "mytext", "text-info");
                e.target.classList.add("mynewback");
              }}
              onClick={() => {
                localStorage.setItem("lang", "ru");
                window.location.reload();
                props.dispatch(change_input("lang", "ru"));
              }}
            >
              Russian
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            className="btn btn-info text-center"
            style={{
              backgroundColor: "#54b9f85f"
            }}
          >
            <div
              className="btn btn-outline-light text-white text-center"
              style={{ width: "7rem" }}
              onMouseOver={e => {
                e.target.classList.add("shadow", "mytext", "text-info");
                e.target.classList.remove("mynewback");
              }}
              onMouseOut={e => {
                e.target.classList.remove("shadow", "mytext", "text-info");
                e.target.classList.add("mynewback");
              }}
              onClick={() => {
                localStorage.setItem("lang", "es");
                window.location.reload();
                props.dispatch(change_input("lang", "es"));
              }}
            >
              Spanish
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            className="btn btn-info text-center"
            style={{
              backgroundColor: "#54b9f85f"
            }}
          >
            <div
              className="btn btn-outline-light text-white text-center"
              style={{ width: "7rem" }}
              onMouseOver={e => {
                e.target.classList.add("shadow", "mytext", "text-info");
                e.target.classList.remove("mynewback");
              }}
              onMouseOut={e => {
                e.target.classList.remove("shadow", "mytext", "text-info");
                e.target.classList.add("mynewback");
              }}
              onClick={() => {
                localStorage.setItem("lang", "fi");
                window.location.reload();
                props.dispatch(change_input("lang", "fi"));
              }}
            >
              Finnish
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>{" "}
      {/* |{" "}
      <button
        onClick={() => {
          localStorage.setItem("lang", "ru");
          // window.location.reload();
          props.dispatch(change_input("lang", "ru"));
        }}
      >
        RU
      </button>
      |{" "}
      <button
        onClick={() => {
          localStorage.setItem("lang", "es");
          // window.location.reload();
          props.dispatch(change_input("lang", "es"));
        }}
      >
        ES
      </button>
      |{" "}
      <button
        onClick={() => {
          localStorage.setItem("lang", "fi");
          // window.location.reload();
          props.dispatch(change_input("lang", "fi"));
        }}
      >
        FI
      </button> */}
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(ChooserReload);
