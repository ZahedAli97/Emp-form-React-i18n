import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EmployeeForm from "./Components/EmployeeForm";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signupform from "./Components/JSON-SCHEMA/Signupform";
import Loginform from "./Components/JSON-SCHEMA/Loginform";
import Editform from "./Components/JSON-SCHEMA/Editform";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import messages from "./messages";
import Chooser from "./Chooser";

function App(props) {
  return (
    <>
      <IntlProvider
        locale={props.lang}
        // messages={{
        //   "home.welcomemsg": ", Добро пожаловать в ваш профиль"
        // }}
        messages={messages[props.lang]}
      >
        <Switch>
          {" "}
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={EmployeeForm} />
          <Route exact path="/signup" component={Signupform} />
          <Route exact path="/editdetails" component={Editform} />
          <Route exact path="/" component={Loginform} />
          <Route
            component={() => {
              return (
                <h1
                  className="text-white"
                  style={{ marginTop: "17rem", marginLeft: "25rem" }}
                >
                  Error 404 - Page does not Exist!
                </h1>
              );
            }}
          />
        </Switch>
      </IntlProvider>
    </>
  );
}

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(App);
