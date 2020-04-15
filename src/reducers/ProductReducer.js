import InitialState from "./InitialState";
import * as ActionTypes from '../constants/ActionTypes';

export default function productReducer(state=InitialState._product, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case ActionTypes.VIEW_PRODUCT:
            return action.product;
        default:
            console.log(InitialState._product);
            return state;
    }
}