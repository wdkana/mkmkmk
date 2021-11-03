import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_DEFAULT } from '../../constan/index'

export const isLoginLoading = () => {
    return {
      type: LOGIN_LOADING
    }
}
  
export const isLoginSuccess = (data) => {
    return {
      type: LOGIN_SUCCESS,
      data: data
    }
}
  
export const isLoginFailed = (data) => {
    return {
      type: LOGIN_FAILED,
      data: data
    }
}

export const isLoginDefault = () => {
  return {
    type: LOGIN_DEFAULT
  }
}