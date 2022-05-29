import { combineReducers } from "redux"

import DashboardReducer from "./Dashboard/DashboardReducer"
import ProfileReducer from "./Profile/ProfileReducer"
import WalletReducer from "./Wallet/WalletReducer"

export default combineReducers({
  dashboard: DashboardReducer,
  profile: ProfileReducer,
  wallet: WalletReducer,
})