import produce from "immer";
import {
  CHANGE_INPUT,
  LOGIN_EMPLOYEE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_EMPLOYEE_SUCCESS,
  LOGIN_EMPLOYEE_FAILURE
} from "../ActionTypes/EmployeeFormAT";

const initialState = {
  id: Math.floor(Math.random() * 33),
  isLoggedIn: "true" === localStorage.getItem("isLoggedIn"),
  name: "",
  password: "",
  mobile: "",
  email: "",
  dateOfBirth: "",
  gender: "",
  skills: null,
  profilePic: undefined,
  error_msg: "",
  loginId: localStorage.getItem("loginId"),
  isLoading: false,
  failure_error: ""
};

export default function EmployeeFormReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case CHANGE_INPUT:
        draft[action.fieldName] = action.fieldValue;
        break;
      case LOGIN_EMPLOYEE:
        draft.isLoading = true;
        draft.failure_error = "";
        break;
      case LOGIN_EMPLOYEE_SUCCESS:
        draft.loginId = action.data.id;
        draft.name = action.data.name;
        draft.password = action.data.password;
        draft.mobile = action.data.password;
        draft.email = action.data.email;
        draft.dateOfBirth = action.data.birthday;
        draft.gender = action.data.gender;
        draft.skills = action.data.skills;
        draft.profilePic = action.data.image;
        draft.isLoading = false;
        draft.failure_error = "";
        draft.isLoggedIn = "true" === localStorage.getItem("isLoggedIn");
        break;
      case LOGIN_EMPLOYEE_FAILURE:
        draft.failure_error = action.err;
        draft.isLoading = false;
        draft.isLoggedIn = "true" === localStorage.getItem("isLoggedIn");
        break;
      case REGISTER_USER:
        draft.isLoading = true;
        draft.failure_error = "";
        break;
      case REGISTER_USER_SUCCESS:
        draft.loginId = action.id;
        draft.isLoading = false;
        draft.failure_error = "";
        break;
      case REGISTER_USER_FAILURE:
        draft.failure_error = action.err;
        draft.isLoading = false;
        break;
    }
  });
}
