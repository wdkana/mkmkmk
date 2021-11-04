import {
    CEK_PRIVATE_KEY_LOADING,
    CEK_PRIVATE_KEY_SUCCESS,
    CEK_PRIVATE_KEY_FAILED
  } from '../../constan/index'

  const initState = {
    isLoading: false,
    isError: false,
    message: null
  }

  const privateKeyReducer = (state = initState, action) => {
    switch (action.type) {
        case CEK_PRIVATE_KEY_LOADING:
            return Object.assign({}, state, {
                isLoading: true
        })

        case CEK_PRIVATE_KEY_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                message: action.data
            })

        case CEK_PRIVATE_KEY_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                isError: true,
                message: action.data
            })

      default:
        return state
    }
  }

  export default privateKeyReducer