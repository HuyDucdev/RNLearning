// reducer.js
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_FAILURE,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAILURE,
} from './action';

const initialState = {
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.payload };
      
    case CREATE_DATA_SUCCESS:
      return { ...state, data: [...state.data, action.payload], error: null };
    case CREATE_DATA_FAILURE:
      return { ...state, error: action.payload };
      
    case DELETE_DATA_SUCCESS:
      return { ...state, data: state.data.filter(item => item.id !== action.payload), error: null };
    case DELETE_DATA_FAILURE:
      return { ...state, error: action.payload };
      
    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        data: state.data.map(item => (item.id === action.payload.id ? action.payload : item)),
        error: null,
      };
    case UPDATE_DATA_FAILURE:
      return { ...state, error: action.payload };
      
    default:
      return state;
  }
};

export default dataReducer;
