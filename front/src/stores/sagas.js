import { all } from "redux-saga/effects"

import loginSaga from "./Login/LoginSagas"
import signupSaga from "./Signup/SignupSagas"
import profileSaga from "./Profile/ProfileSagas"

export default function* () {
  yield all([
    loginSaga(),
    signupSaga(),
    profileSaga(),
  ])
}
