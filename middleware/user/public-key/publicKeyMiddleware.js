import { isCekPublicKeyLoading, isCekPublicKeySuccess, isCekPublicKeyFailed } from '../../../redux/action/user/publicKeyAction';
import { publicKey } from '../../../utils/api/user/publicKey'
import store from "../../../redux/store";

export const thunk_public_key = (data, url) => {
  store.dispatch(isCekPublicKeyLoading())
  return function (dispatch) {
    publicKey(data, url)
        .then( result => {
            if(result.data.message === "public key valid"){
                dispatch(isCekPublicKeySuccess(result.data.message))
            }else{
                dispatch(isCekPublicKeyFailed(result.data.message))
            }
        })
  }
};
