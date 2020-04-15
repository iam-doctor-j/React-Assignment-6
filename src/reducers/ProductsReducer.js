import * as ActionTypes from '../constants/ActionTypes';
import InitialState from './InitialState';

 export default function productsReducer(state=InitialState._products, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
       case ActionTypes.INITIALIZE:
           return action.products;
       case ActionTypes.ADD_PRODUCT:
           return [
               ...state,
               Object.assign({}, action.product)
           ];
       default: 
           return state;
    }
 }