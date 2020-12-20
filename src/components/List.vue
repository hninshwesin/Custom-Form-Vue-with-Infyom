<template>
    <ChildList :products="products" :numberOfProducts="numberOfProducts"></ChildList>
</template>

<script>
    // import {APIService} from '../APIService';
    import ChildList from "./ChildList";
    import axios from "axios";
    // eslint-disable-next-line no-unused-vars
    // const API_URL = 'http://localhost:8000';
    // const apiService = new APIService();

    export default {
        name: "List",

        components: {ChildList},

        data() {
            return {
                products: [],
                numberOfProducts : 0,
            };
        },
            mounted() {
                // const API_URL = 'http://127.0.0.1:8000';
                // const URL = `${API_URL}/api/shwe__infyoms/`
                axios.get(URL).then((response) => {
                    this.products = response.data.data;
                    // const data = response.data.data
                    // const fetchedProducts = []
                    // for (let key in data){
                    //     const product = data[key]
                    //     product.id = key
                    //     fetchedProducts.push(product)
                    // }
                    // this.products = fetchedProducts
                    // console.log(this.products)
                    this.numberOfProducts = response.data.data.length;
                    // console.log(this.numberOfProducts)
                    // return this.products;
                    }
                )
            },


        // mounted() {
        //     this.created();
        //     // const API_URL = 'http://127.0.0.1:8000';
        //     // const URL = `${API_URL}/api/products/`
        //     // axios.get(URL).then((response) => {
        //     //     // console.log(JSON.stringify(response.data.data))
        //     //     this.products = response.data.data[0].name;
        //     //     console.log(this.products)
        //     //     // console.log(this.products.data[0].price)
        //     //     this.numberOfProducts = response.data.data.length;
        //     //     console.log(this.numberOfProducts)
        //     // });
        // },
    }
</script>

<style scoped>

</style>