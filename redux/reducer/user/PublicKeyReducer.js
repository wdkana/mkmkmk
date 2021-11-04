import {
    CEK_PUBLIC_KEY_LOADING,
    CEK_PUBLIC_KEY_SUCCESS,
    CEK_PUBLIC_KEY_FAILED
  } from '../../constan/index'

  const initState = {
    isLoading: false,
    isError: false,
    message: null
  }

  const publicKeyReducer = (state = initState, action) => {
    switch (action.type) {
        case CEK_PUBLIC_KEY_LOADING:
            return Object.assign({}, state, {
                isLoading: true
        })

        case CEK_PUBLIC_KEY_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                message: action.data
            })

        case CEK_PUBLIC_KEY_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                isError: true,
                message: action.data
            })

      default:
        return state
    }
  }

  export default publicKeyReducer