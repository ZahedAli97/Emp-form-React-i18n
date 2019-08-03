import { takeLatest, all } from "redux-saga/effects";
import {
  REGISTER_USER,
  LOGIN_EMPLOYEE,
  GET_DATA,
  UPDATE_DATA
} from "../ActionTypes/EmployeeFormAT";
import { registerUser, loginUser, getData, updateData } from "./EmployeeForm";

export function* employeeSagaWatcher() {
  yield all([
    takeLatest(REGISTER_USER, registerUser),
    takeLatest(LOGIN_EMPLOYEE, loginUser),
    takeLatest(GET_DATA, getData),
    takeLatest(UPDATE_DATA, updateData)
  ]);
}
