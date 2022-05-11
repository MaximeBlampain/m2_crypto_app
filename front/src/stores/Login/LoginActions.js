import {
  LOGOUT,
  LOGIN,
  LOGIN_SUCCESS,
} from "./LoginTypes"

export function logout(){
  return { type: LOGOUT }
}