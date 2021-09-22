import data from "../db.json";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCC,
} from "./productTypes";



const initialState = {
  data: data,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
      };
    case FETCH_PRODUCTS_SUCC:
      return {
          data:action.payload
      }
    case FETCH_PRODUCTS_FAIL:
      return {
          ...state,
          error:action.payload
      };
    default:
      return state;
  }
};

export default reducer;
