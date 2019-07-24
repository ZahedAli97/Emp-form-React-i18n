import produce from "immer";
import { CHANGE_INPUT } from "../ActionTypes/EmployeeFormAT";

const initialState = {
  id: "",
  name: "",
  password: "",
  mobile: "",
  email: "",
  dateOfBirth: "",
  gender: "",
  skills: null,
  profilePic: undefined,
  error_msg: ""
};

export default function EmployeeFormReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case CHANGE_INPUT:
        draft[action.fieldName] = action.fieldValue;
        break;
    }
  });
}
