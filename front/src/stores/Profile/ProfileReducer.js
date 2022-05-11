import {
  LOGOUT,
} from "../Login/LoginTypes"

const INITIAL_STATE = {
  USER_ID: "",
  FIRSTNAME: "",
  LASTNAME: "",
  EMAIL: "",
  LANGUAGE_KEY: "en",
}

export default function ProfileReducer(
  state = INITIAL_STATE,
  { type, payload },
){
  switch(type){
    case LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}