<template>
    <div>
        <h4>*Select Product Name</h4>
        <select v-on:submit.prevent v-model="product.name">
            <option disabled value="">Please select one</option>
            <option>Chocolate</option>
            <option>Ice cream</option>
            <option>Green Tea</option>
            <option>Matcha</option>
        </select>
        <br>
        <span>Name : {{ product.name }}</span>
        <br>
        <h4>*Select Product Price</h4>
        <form v-on:submit.prevent>
            <input type="radio" id="one" value="100" v-model="product.price">
            <label for="one">100</label>
            <br>
            <input type="radio" id="two" value="300" v-model="product.price">
            <label for="two">300</label>
            <br>
            <input type="radio" id="three" value="500" v-model="product.price">
            <label for="three">500</label>
            <br>
            <input type="radio" id="four" value="700" v-model="product.price">
            <label for="four">700</label>
        </form>
        <br>
        <span>Price: {{ product.price }}</span>
        <br>
        <button class="btn btn-success" @click="createProduct(product)">Submit</button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Dropdownold",
        data(){
            return {
                product: {
                    name: '',
                    price: ''
                }
            }
        },
        methods: {
            createProduct(product) {
                const self = this
                const API_URL = 'http://127.0.0.1:8000';
                const URL = `${API_URL}/api/products?name=s${product.name}&price=${product.price}`
                axios.post(URL,product).then(function (response) {
                    const status = response.data.success;
                    if (status) {
                        self.$swal.fire({
                            title: 'Created!',
                            text: 'Your Product has been created!',
                            icon: 'success',
                            timer: 5000
                        })
                            .then(function () {
                                self.$router.push({name: 'home'})

                            })
                    }
                    console.log(status);
                }).catch(error => {
                    console.log(error)
                });

            }
        },
    }
</script>

<style scoped>

</style>