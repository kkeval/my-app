import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCC,
} from "./productTypes";
import data from "../db.json";

export const fetchProductData = (data) => {
  return (dispatch) => {
    dispatch(fetchProduct());
    fetch(" http://localhost:8000/data")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data,
      dispatch(fetchProductSuccess(data))
    }).catch(error => {
      dispatch(fetchProductFailure(error))
    })
  };
};
export const fetchProduct = () => {
  return {
    type: FETCH_PRODUCTS,
  };
};

export const fetchProductSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_SUCC,
    payload: data,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAIL,
    payload: error,
  };
};
