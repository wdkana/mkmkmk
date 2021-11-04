import { isGetProfileLoading, isGetProfileSuccess, isGetProfileFailed, isGetProfileDefault } from '../../../redux/action/user/getProfileAction';
import { register } from '../../../utils/api/user/register'
import store from "../../../redux/store";

export const thunk_profile_user = (data, url) => {
  store.dispatch(isGetProfileLoading())
  return function (dispatch) {
    register(data, url)
        .then( result => {
            if(result.data.message === "get profile successfully"){
                dispatch(isGetProfileSuccess(result.data.payload))
            }else{
                dispatch(isGetProfileFailed(result.data.message))
            }
        })
  }
};
