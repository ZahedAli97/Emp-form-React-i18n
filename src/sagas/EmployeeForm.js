import { put } from "redux-saga/effects";
import {
  register_user_failure,
  register_user_success,
  login_employee_failure,
  login_employee_success,
  get_data_failure,
  get_data_success,
  update_data_success,
  update_data_failure
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
    alert("Email already exists please Login.");
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
    alert(err);
    yield put(login_employee_failure(err));
  }
}

export function* getData() {
  try {
    const getDataResponse = yield axios.get(
      `http://localhost:8080/employes//getbyid/${localStorage.getItem(
        "loginId"
      )}`
    );
    yield put(get_data_success(getDataResponse.data));
  } catch (err) {
    yield put(get_data_failure(err));
  }
}

export function* updateData(action) {
  try {
    const payload = action.payload;
    const updateResponse = yield axios.put(
      "http://localhost:8080/employes/updemploye",
      payload
    );
    yield put(update_data_success(updateResponse));
  } catch (err) {
    alert(err);
    yield put(update_data_failure(err));
  }
}
