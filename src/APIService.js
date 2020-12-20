import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';

export class APIService{

    constructor(){
    }

    // getProducts() {
    //     const url = `${API_URL}/api/products/`;
    //     return axios.get(url).then(response => response.data);
    // }

    getProduct(id) {
        const url = `${API_URL}/api/products/${id}`;
        return axios.get(url).then(response => response.data);
    }

    // createProduct(product){
    //
    //     const url = `${API_URL}/api/products?name=${product.name}&price=${product.price}`;
    //     return axios.post(url,product).then(response => response.data);
    // }

    updateProduct(product,id){
        // console.log(product);
        const url = `${API_URL}/api/shwe__infyoms/${id}?name=${product.name}&price=${product.price}&description=${product.description}`;
        return axios.put(url,product).then(response => response.data);
    }

    // deleteProduct(product){
    //     const url = `${API_URL}/api/products/${product.id}`;
    //     return axios.delete(url);
    // }
}



