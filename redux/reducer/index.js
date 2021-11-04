import { combineReducers } from "redux"
import UserReducer from "./user/userReducer"
import LoginReducer from "./user/loginReducer"
import FirstLoad from '../reducer/firstLoad.reducer'
import Profile from '../reducer/user/getProfileReducer'

export default combineReducers({
    UserReducer,
    LoginReducer,
    FirstLoad,
    Profile
})