import axios from 'axios';

export default class DataApi {
    static getProducts() {
        console.log('Getting Products');
        return axios.get('http://localhost:4000/products')
        .then(res => res.data)
        .catch(error => { throw error });
    }

    static addProduct(product) {
        console.log('Adding Product');
        return axios.post('http://localhost:4000/products', product)
        .then(res => res.data)
        .catch(err => {throw err});
    }

    static getProduct(id) {
        console.log('Getting Product with id '+id);
        return axios.get('http://localhost:4000/products/'+id)
        .then(res => res.data)
        .catch(error => { throw error });
    }
}