import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Form from "react-jsonschema-form";
import { myschema, uiSchema, schemaFields } from "./Signupschema";
import { connect } from "react-redux";
import {
  change_input,
  register_user,
  get_data,
  update_data
} from "../../ActionCreators/EmployeeFormAC";
import { Translator } from "./Translator";
import ChooserReload from "../../ChooserReload";
import { FormattedMessage } from "react-intl";

function Editform(props) {
  let schema = myschema;
  useEffect(() => {
    if (props.name === "") {
      props.dispatch(get_data());
      schema = myschema;
    }
  });

  if (!props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  let oldskills = localStorage.getItem("customskills");
  oldskills = JSON.parse(oldskills);
  let gender = props.gender;
  let char = gender.charAt(0).toUpperCase();
  gender = char + gender.substr(1, gender.length);

  let formData = {
    name: props.name,
    password: props.password,
    mobile: props.mobile,
    email: props.email,
    gender: gender,
    dateOfBirth: props.dateOfBirth,
    profilePic: props.profilePic
  };

  const handleSubmit = e => {
    let skills = localStorage.getItem("customskills");
    skills = JSON.parse(skills);
    let sendskills = "";
    for (let skill of skills) {
      sendskills += `${skill.label}, `;
    }
    console.log("<<", sendskills);
    const payload = {
      id: props.loginId,
      name: e.formData.name,
      password: e.formData.password,
      mobile: e.formData.mobile,
      email: e.formData.email,
      gender: e.formData.gender,
      skills: sendskills,
      birthday: e.formData.dateOfBirth,
      image: e.formData.profilePic
    };
    // props.dispatch(register_user(payload));
    props.dispatch(update_data(payload));

    props.history.push("/home");
  };

  function transformErrors(errors) {
    return errors.map(error => {
      if (error.name === "required") {
        error.message = "This Field can't be Empty.";
      }
      if (error.name === "pattern") {
        error.message = "This Input is not Valid.";
      }
      if (error.name === "format") {
        error.message = "This Input is not Valid.";
      }
      if (error.name === "type") {
        error.message = "This Input is not Valid.";
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
      <div className="row">
        <div style={{ marginLeft: "1.5rem" }}>
          <ChooserReload />
        </div>
        <Link to="/home">
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
            <FormattedMessage id={"home"} defaultMessage={"Home"} />
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
            formData={formData}
            schema={schema}
            uiSchema={uiSchema}
            onSubmit={handleSubmit}
            FieldTemplate={CustomFieldTemplate}
            fields={schemaFields}
            transformErrors={transformErrors}
          >
            {console.log(schema)}
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
    loginId: state.loginId,
    name: state.name,
    password: state.password,
    mobile: state.mobile,
    email: state.email,
    dateOfBirth: state.dateOfBirth,
    gender: state.gender,
    profilePic: state.profilePic,
    isLoggedIn: state.isLoggedIn,
    lang: state.lang
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Editform);
