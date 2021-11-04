import {
    GET_PROFILE_USER_LOADING,
    GET_PROFILE_USER_SUCCESS,
    GET_PROFILE_USER_FAILED,
    GET_PROFILE_USER_DEFAULT
  } from '../../constan/index'

  const initState = {
    data: null,
    isLoading: false,
    isError: false,
    messageError: null
  }

  const getProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE_USER_LOADING:
            return Object.assign({}, state, {
                isLoading: true
        })

        case GET_PROFILE_USER_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            })

        case GET_PROFILE_USER_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                isError: true,
                messageError: action.data
            })

        case GET_PROFILE_USER_DEFAULT:
            return Object.assign({}, state, {
              user: null,
              isLoading: false,
              isError: false,
              messageError: null
            })

      default:
        return state
    }
  }

  export default getProfileReducer