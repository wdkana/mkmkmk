import { combineReducers } from "redux"
import UserReducer from "./user/userReducer"
import LoginReducer from "./user/loginReducer"
import FirstLoad from '../reducer/firstLoad.reducer'
import Profile from '../reducer/user/getProfileReducer'
import PrivateKey from '../reducer/user/PrivateKeyReducer'
import PublicKey from '../reducer/user/PublicKeyreducer'

export default combineReducers({
    UserReducer,
    LoginReducer,
    FirstLoad,
    Profile,
    PrivateKey,
    PublicKey
})