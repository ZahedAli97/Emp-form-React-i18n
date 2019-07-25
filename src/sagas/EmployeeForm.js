import { put } from "redux-saga/effects";
import {
  register_user_failure,
  register_user_success,
  login_employee_failure,
  login_employee_success
} from "../ActionCreators/EmployeeFormAC";
import axios from "axios";

export function* registerUser(action) {
  try {
    const { payload } = action;
    const register_response = yield axios.post(
      "http://localhost:8080/employes/addemploye",
      payload
    );
    const id = register_response.data;

    localStorage.setItem("loginId", id);
    localStorage.setItem("isLoggedIn", true);

    yield put(register_user_success(id));
  } catch (err) {
    localStorage.setItem("loginId", "");
    localStorage.setItem("isLoggedIn", false);

    yield put(register_user_failure(err));
  }
}

export function* loginUser(action) {
  try {
    const payload = action.payload;
    const login_response = yield axios.post(
      "http://localhost:8080/employes/getemployelogin",
      payload
    );
    if (login_response.data.name === null) {
      throw "Email does not exist, Please register";
    }
    const id = login_response.data.id;

    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("loginId", id);

    yield put(login_employee_success(login_response.data));
  } catch (err) {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("loginId", "");

    yield put(login_employee_failure(err));
  }
}
