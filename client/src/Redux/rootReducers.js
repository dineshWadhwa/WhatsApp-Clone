import { combineReducers } from "redux";
import authSlice from "./Slices/authSlice";
import accountSlice from "./Slices/accountSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  account: accountSlice,
});

export default rootReducer;
