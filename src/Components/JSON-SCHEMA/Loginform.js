import React from "react";
import Form from "react-jsonschema-form";
import { loginSchema, uiLoginSchema } from "./loginschema";
import { login_employee } from "../../ActionCreators/EmployeeFormAC";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Chooser from "../../Chooser";
import { FormattedMessage } from "react-intl";
import { Translator } from "./Translator";

function Loginform(props) {
  const loginSchema = {
    title: Translator("login.title"),
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        title: Translator("email"),
        type: "string"
      },
      password: {
        title: Translator("password"),
        type: "string"
      }
    }
  };
  const handleSubmit = e => {
    console.log(e.formData);
    const body = {
      email: e.formData.email,
      password: e.formData.password
    };

    props.dispatch(login_employee(body));

    props.history.replace("/home");
    //return <Redirect to="/home" />;
  };
  return (
    <>
      <div
        className="text-right"
        style={{ marginRight: "5rem", marginTop: "1rem" }}
      >
        <Chooser />
      </div>
      <div className="text-center">
        <div
          id="loginroot"
          className="card shadow rounded special-card cardborder"
          style={{ width: "30rem", height: "25rem", padding: "1%" }}
        >
          <Form
            schema={loginSchema}
            uiSchema={uiLoginSchema}
            onSubmit={handleSubmit}
          >
            <button id="loginbtn" className="btn btn-outline-info">
              <FormattedMessage id={"login.button"} defaultMessage={"Login"} />
            </button>
          </Form>
          <hr style={{ border: "1px solid lightskyblue" }} />
          <p>
            <FormattedMessage
              id={"login.ask"}
              defaultMessage={"New User? - "}
            />

            <Link to="/signup">
              <FormattedMessage
                id={"login.toRegister"}
                defaultMessage={"Register Here"}
              />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Loginform);
