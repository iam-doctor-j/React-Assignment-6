import DataApi from "../Data/DataApi";
import * as ActionTypes from "../constants/ActionTypes";

export function loadProductsSuccess(products) {
    return { type: ActionTypes.INITIALIZE, products };
}

export function addProductSuccess(product) {
    return { type: ActionTypes.ADD_PRODUCT, product };
}

export function getProductSuccess(product) {
    return { type: ActionTypes.VIEW_PRODUCT, product };
}

export function initProducts() {
    return function(dispatch) {
        console.log('dispatch ==>');
        console.log(dispatch);
        return DataApi.getProducts().then(products => {
            dispatch(loadProductsSuccess(products));
        }).catch(err => {
            throw err;
        })
    }
}

export function addProduct(product) {
    let newProduct = {
        "productName": product.productName,
        "Quantity": product.productQuantity,
        "Price": product.productPrice
    };
    console.log(newProduct);
    return function(dispatch) {
        return DataApi.addProduct(newProduct).then(product => {
            dispatch(addProductSuccess(product));
        }).catch(err => {
            throw err;
        })
    }
}

export function getProduct(id) {
    return function(dispatch) {
        return DataApi.getProduct(id).then(product => {
            dispatch(getProductSuccess(product));
        }).catch(err => {
            throw err;
        });
    }
}