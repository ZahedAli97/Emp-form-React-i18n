import { takeLatest, all } from "redux-saga/effects";
import { REGISTER_USER, LOGIN_EMPLOYEE } from "../ActionTypes/EmployeeFormAT";
import { registerUser, loginUser } from "./EmployeeForm";

export function* employeeSagaWatcher() {
  yield all([
    takeLatest(REGISTER_USER, registerUser),
    takeLatest(LOGIN_EMPLOYEE, loginUser)
  ]);
}
