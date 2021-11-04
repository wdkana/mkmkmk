import { CEK_PRIVATE_KEY_LOADING, CEK_PRIVATE_KEY_SUCCESS, CEK_PRIVATE_KEY_FAILED } from '../../constan/index'

export const isCekPrivateKeyLoading = () => {
    return {
      type: CEK_PRIVATE_KEY_LOADING
    }
}
  
export const isCekPrivateKeySuccess = (data) => {
    return {
      type: CEK_PRIVATE_KEY_SUCCESS,
      data: data
    }
}
  
export const isCekPrivateKeyFailed = (data) => {
    return {
      type: CEK_PRIVATE_KEY_FAILED,
      data: data
    }
}
