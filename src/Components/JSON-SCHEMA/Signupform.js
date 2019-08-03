import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Form from "react-jsonschema-form";
import { myschema, uiSchema, schemaFields } from "./Signupschema";
import { connect } from "react-redux";
import {
  change_input,
  register_user
} from "../../ActionCreators/EmployeeFormAC";
import ChooserReload from "../../ChooserReload";
import { FormattedMessage } from "react-intl";
import { Translator } from "./Translator";

function Signupform(props) {
  let schema = myschema;

  const handleSubmit = e => {
    console.log(e.formData);

    let sendskills = "";
    for (let skill of e.formData.customskills) {
      sendskills += `${skill.label}, `;
    }
    const payload = {
      id: props.id,
      name: e.formData.name,
      password: e.formData.password,
      mobile: e.formData.mobile,
      email: e.formData.email,
      gender: e.formData.gender,
      skills: sendskills,
      birthday: e.formData.dateOfBirth,
      image: e.formData.profilePic
    };
    props.dispatch(register_user(payload));
  };

  function transformErrors(errors) {
    return errors.map(error => {
      if (error.name === "required") {
        error.message = Translator("required");
      }
      if (error.name === "pattern") {
        error.message = Translator("pattern");
      }
      if (error.name === "format") {
        error.message = Translator("format");
      }
      if (error.name === "minLength") {
        if (error.property == ".name") {
          error.message = Translator("minLength.name");
        }
        if (error.property == ".password") {
          error.message = Translator("minLength.password");
        }
      }
      return error;
    });
  }

  function CustomFieldTemplate(props) {
    const {
      id,
      classNames,
      label,
      help,
      required,
      description,
      errors,
      children
    } = props;
    return (
      <div className={classNames}>
        <div className=" form-group row">
          {id !== "root" && (
            <label htmlFor={id} className="col-sm-2 col-form-label">
              {label}
              {required ? "* : " : null}
            </label>
          )}

          <div className="col-sm-10 text-left">
            {description}
            {children}
            {errors}
            {help}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {props.isLoggedIn && <Redirect to="/home" />}
      <div className="row">
        <div style={{ marginLeft: "1.5rem" }}>
          <ChooserReload />
        </div>
        <Link to="/">
          <div
            className="btn btn-outline-light text-white"
            onMouseOver={e => {
              e.target.classList.add("shadow", "mytext", "text-info");
              e.target.classList.remove("myback");
            }}
            onMouseOut={e => {
              e.target.classList.remove("shadow", "mytext", "text-info");
              e.target.classList.add("myback");
            }}
            style={{
              marginLeft: "67rem",
              width: "5rem"
            }}
          >
            <FormattedMessage id={"login.button"} defaultMessage={"Login"} />
          </div>
        </Link>
      </div>
      <div
        className="card bg-dark text-white shadow rounded"
        style={{ width: "62rem", height: "50rem", margin: "auto" }}
      >
        <div className="card-header text-center">
          <FormattedMessage
            id="signupTitle"
            defaultMessage="Employee Registration"
          />
        </div>
        <div className="container" style={{ padding: "relative" }}>
          <Form
            noHtml5Validate={true}
            showErrorList={false}
            schema={schema}
            uiSchema={uiSchema}
            onSubmit={handleSubmit}
            FieldTemplate={CustomFieldTemplate}
            fields={schemaFields}
            transformErrors={transformErrors}
          >
            <button
              type="submit"
              className="btn btn-danger text-center"
              style={{ marginLeft: "25rem" }}
            >
              <FormattedMessage id="register" defaultMessage="Register" />
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    lang: state.lang,
    id: state.id,
    skills: state.skills,
    isLoggedIn: state.isLoggedIn
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Signupform);
