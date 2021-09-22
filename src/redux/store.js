import { createStore } from 'redux';
import productReducer from './products/productReducer';
const store = createStore(productReducer);

export default store;
