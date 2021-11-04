import { CEK_PUBLIC_KEY_LOADING, CEK_PUBLIC_KEY_SUCCESS, CEK_PUBLIC_KEY_FAILED } from '../../constan/index'

export const isCekPublicKeyLoading = () => {
    return {
      type: CEK_PUBLIC_KEY_LOADING
    }
}
  
export const isCekPublicKeySuccess = (data) => {
    return {
      type: CEK_PUBLIC_KEY_SUCCESS,
      data: data
    }
}
  
export const isCekPublicKeyFailed = (data) => {
    return {
      type: CEK_PUBLIC_KEY_FAILED,
      data: data
    }
}
