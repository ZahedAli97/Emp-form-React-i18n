import { CHANGE_INPUT } from "../ActionTypes/EmployeeFormAT";

export function change_input(fieldName, fieldValue) {
  return { type: CHANGE_INPUT, fieldName, fieldValue };
}
