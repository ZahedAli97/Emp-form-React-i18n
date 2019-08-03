import {
  CHANGE_INPUT,
  LOGIN_EMPLOYEE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_EMPLOYEE_SUCCESS,
  LOGIN_EMPLOYEE_FAILURE,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  UPDATE_DATA,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAILURE
} from "../ActionTypes/EmployeeFormAT";

export function change_input(fieldName, fieldValue) {
  return { type: CHANGE_INPUT, fieldName, fieldValue };
}

export function login_employee(payload) {
  return { type: LOGIN_EMPLOYEE, payload };
}

export function login_employee_success(data) {
  return { type: LOGIN_EMPLOYEE_SUCCESS, data };
}

export function login_employee_failure(err) {
  return { type: LOGIN_EMPLOYEE_FAILURE, err };
}

export function register_user(payload) {
  return { type: REGISTER_USER, payload };
}

export function register_user_success(id) {
  return { type: REGISTER_USER_SUCCESS, id };
}

export function register_user_failure(err) {
  return { type: REGISTER_USER_FAILURE, err };
}

export function get_data() {
  return { type: GET_DATA };
}

export function get_data_success(data) {
  return { type: GET_DATA_SUCCESS, data };
}

export function get_data_failure(err) {
  return { type: GET_DATA_FAILURE, err };
}

export function update_data(payload) {
  return { type: UPDATE_DATA, payload };
}

export function update_data_success(data) {
  return { type: UPDATE_DATA_SUCCESS, data };
}

export function update_data_failure(err) {
  return { type: UPDATE_DATA_FAILURE, err };
}
