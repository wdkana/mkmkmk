import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAILED, REGISTER_DEFAULT } from '../../constan/index'

export const isRegisterLoading = () => {
    return {
      type: REGISTER_LOADING
    }
  }
  
  export const isRegisterSuccess = (data) => {
    return {
      type: REGISTER_SUCCESS,
      data: data
    }
  }
  
  export const isRegisterFailed = () => {
    return {
      type: REGISTER_FAILED
    }
  }

  export const isRegisterDefault = () => {
    return {
      type: REGISTER_DEFAULT
    }
  }