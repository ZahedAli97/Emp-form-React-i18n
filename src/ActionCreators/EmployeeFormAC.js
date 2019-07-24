import { CHANGE_INPUT, LOGIN_EMPLOYEE } from "../ActionTypes/EmployeeFormAT";

export function change_input(fieldName, fieldValue) {
  return { type: CHANGE_INPUT, fieldName, fieldValue };
}

export function login_employee(data) {
  return { type: LOGIN_EMPLOYEE, data };
}
