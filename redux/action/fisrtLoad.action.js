import {SET_FIRST_LOAD_FALSE,SET_FIRST_LOAD_TRUE} from '../constan/index'

export const setFisrtLoadFalse = () => {
  return {
    type: SET_FIRST_LOAD_FALSE
  }
}

export const setFisrtLoadTrue = () => {
  return {
    type: SET_FIRST_LOAD_TRUE
  }
}