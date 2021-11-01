import { isRegisterLoading, isRegisterSuccess, isRegisterFailed, isRegisterDefault } from '../../../redux/action/user/registerAction';
import { register } from '../../../utils/api/user/register'
import store from "../../../redux/store";

export const thunk_register_user = (data, url) => {
  store.dispatch(isRegisterLoading())
  return function (dispatch) {
    register(data, url)
        .then( result => {
            if(result.data.message === "registered successfully"){
                dispatch(isRegisterSuccess(result.data.payload))
            }else{
                dispatch(isRegisterFailed(result.data.message))
            }
        })
  }
};

export const thunk_register_user_default = () => {
    return function (dispatch) {
        dispatch(isRegisterDefault())
    }
};