import { isLoginLoading, isLoginSuccess, isLoginFailed, isLoginDefault } from '../../../redux/action/user/loginAction';
import { login } from '../../../utils/api/user/login'
import store from "../../../redux/store";

export const thunk_login_user = (data, url) => {
  store.dispatch(isLoginLoading())
  return function (dispatch) {
    login(data, url)
        .then( result => {
            if(result.data.message === "login successfully"){
                dispatch(isLoginSuccess(result.data.payload))
            }else{
                dispatch(isLoginFailed(result.data.message))
            }
        })
  }
};

export const thunk_login_default = () => {
    return function (dispatch) {
        dispatch(isLoginDefault())
    }
};