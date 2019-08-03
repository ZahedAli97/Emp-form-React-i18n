import SkillList from "../FormComponents/SkillList";
import { Translator } from "./Translator";

export const myschema = {
  title: "",
  type: "object",

  required: [
    "name",
    "email",
    "password",
    "mobile",
    "dateOfBirth",
    "gender",
    "customskills",
    "profilePic"
  ],
  properties: {
    name: { title: Translator("name"), type: "string", minLength: 2 },
    password: { title: Translator("password"), type: "string", minLength: 5 },
    email: {
      title: Translator("email"),
      type: "string",
      pattern:
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    },
    mobile: {
      title: Translator("mobile"),
      type: "string",
      pattern: "^[0-9]{10}$"
    },
    dateOfBirth: { title: Translator("dob"), type: "string", format: "date" },
    gender: {
      title: Translator("gender"),
      type: "string",
      enum: ["Male", "Female", "Other"]
    },
    customskills: {
      title: Translator("skills"),
      //type: SkillList
      type: "array",
      default: JSON.parse(localStorage.getItem("customskills"))
    },
    profilePic: {
      title: Translator("profilePic"),
      type: "string",
      format: "data-url"
    }
  }
};
export const uiSchema = {
  email: {
    "ui:widget": "email"
  },
  password: {
    "ui:widget": "password"
  },

  customskills: {
    "ui:field": "custom"
  },
  gender: {
    "ui:widget": "radio"
  }
};

export const schemaFields = { custom: SkillList };
