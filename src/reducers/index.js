import { combineReducers } from "redux";
import productsReducer from './ProductsReducer';
import productReducer from './ProductReducer';

const rootReducer = combineReducers({
    productsReducer,
    productReducer
});

export default rootReducer;