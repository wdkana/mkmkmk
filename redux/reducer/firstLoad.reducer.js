import { SET_FIRST_LOAD_FALSE, SET_FIRST_LOAD_TRUE } from "../constan/index";

const initialState = {
  statusLoad: false,
};

const FirstLoad = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_LOAD_FALSE:
      return {
        ...state,
        statusLoad: false,
      };
    case SET_FIRST_LOAD_TRUE:
      return {
        ...state,
        statusLoad: true,
      };
    default:
      return state;
  }
};

export default FirstLoad;
