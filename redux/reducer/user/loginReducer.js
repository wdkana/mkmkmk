import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_DEFAULT
  } from '../../constan/index'

  const initState = {
    user: null,
    isLoading: false,
    isError: false,
    messageError: null
  }

  const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return Object.assign({}, state, {
                isLoading: true
        })

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                user: action.data
            })

        case LOGIN_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                isError: true,
                messageError: action.data
            })

        case LOGIN_DEFAULT:
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

  export default loginReducer