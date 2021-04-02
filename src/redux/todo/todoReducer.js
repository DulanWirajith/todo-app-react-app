import { FETCH_DATA, FETCH_ERROR, FETCH_SUCCESS, ADD_TODO } from "./todoTypes";

const initialState = {
  loading: false,
  todos: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
