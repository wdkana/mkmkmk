import { combineReducers } from "redux"
import UserReducer from "./user/userReducer"
import LoginReducer from "./user/loginReducer"

export default combineReducers({
    UserReducer,
    LoginReducer
})