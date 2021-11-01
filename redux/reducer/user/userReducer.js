import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    REGISTER_DEFAULT
  } from '../../constan/index'

  const initState = {
    private_key_register: null,
    public_key_register: null,
    isLoading: false,
    isError: false,
    messageError: null
  }

  const userReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_LOADING:
            return Object.assign({}, state, {
                isLoading: true
        })

        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                private_key_register: action.data[0].private_key,
                public_key_register: action.data[0].public_key
            })

        case REGISTER_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                isError: true,
                messageError: action.data
            })

        case REGISTER_DEFAULT:
            return Object.assign({}, state, {
                private_key_register: null,
                public_key_register: null,
                isLoading: false,
                isError: false,
                messageError: null
            })

      default:
        return state
    }
  }

  export default userReducer