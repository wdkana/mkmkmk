import { isCekPrivateKeyLoading, isCekPrivateKeySuccess, isCekPrivateKeyFailed } from '../../../redux/action/user/privateKeyAction';
import { privateKey } from '../../../utils/api/user/privateKey'
import store from "../../../redux/store";

export const thunk_private_key = (data, url) => {
  store.dispatch(isCekPrivateKeyLoading())
  return function (dispatch) {
    privateKey(data, url)
        .then( result => {
            if(result.data.message === "private key valid"){
                dispatch(isCekPrivateKeySuccess(result.data.message))
            }else{
                dispatch(isCekPrivateKeyFailed(result.data.message))
            }
        })
  }
};
