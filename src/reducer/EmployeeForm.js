import produce from "immer";
import { CHANGE_INPUT, LOGIN_EMPLOYEE } from "../ActionTypes/EmployeeFormAT";

const initialState = {
  id: Math.floor(Math.random() * 33),
  name: "",
  password: "",
  mobile: "",
  email: "",
  dateOfBirth: "",
  gender: "",
  skills: null,
  profilePic: undefined,
  error_msg: "",
  loginId: ""
};

export default function EmployeeFormReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case CHANGE_INPUT:
        draft[action.fieldName] = action.fieldValue;
        break;
      case LOGIN_EMPLOYEE:
        draft.loginId = action.data.id;
        draft.name = action.data.name;
        draft.password = action.data.password;
        draft.mobile = action.data.password;
        draft.email = action.data.email;
        draft.dateOfBirth = action.data.birthday;
        draft.gender = action.data.gender;
        draft.skills = action.data.skills;
        draft.profilePic = action.data.image;
        break;
    }
  });
}
