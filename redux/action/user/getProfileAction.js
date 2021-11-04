import { GET_PROFILE_USER_LOADING, GET_PROFILE_USER_SUCCESS, GET_PROFILE_USER_FAILED, GET_PROFILE_USER_DEFAULT } from '../../constan/index'

export const isGetProfileLoading = () => {
    return {
      type: GET_PROFILE_USER_LOADING
    }
}
  
export const isGetProfileSuccess = (data) => {
    return {
      type: GET_PROFILE_USER_SUCCESS,
      data: data
    }
}
  
export const isGetProfileFailed = (data) => {
    return {
      type: GET_PROFILE_USER_FAILED,
      data: data
    }
}

export const isGetProfileDefault = () => {
  return {
    type: GET_PROFILE_USER_DEFAULT
  }
}