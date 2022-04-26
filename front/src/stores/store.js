import {createStore, combineReducers} from "@reduxjs/toolkit"

import DashboardReducer from "./Dashboard/DashboardReducer"
import LoginReducer from "./Login/LoginReducer"
import ProfileReducer from "./Profile/ProfileReducer"
import SignupReducer from "./Signup/SignupReducer"
import WalletReducer from "./Wallet/WalletReducer"

export default createStore(combineReducers({
  dashboard: DashboardReducer,
  login: LoginReducer,
  profile: ProfileReducer,
  signup: SignupReducer,
  wallet: WalletReducer,
}))
