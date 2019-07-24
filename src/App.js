import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EmployeeForm from "./Components/EmployeeForm";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Switch>
        {" "}
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={EmployeeForm} />
      </Switch>
    </>
  );
}

export default App;
