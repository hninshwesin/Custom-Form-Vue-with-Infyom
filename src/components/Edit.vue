<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Update Products Using Vue</div>
                    <br>
                    <div class="card-body">
                        <form v-on:submit.prevent>
                            <strong>Name: {{ this.$route.params.name }}</strong><br>
                            <input type="text" class="form-control" id="name" v-model="product.name">
                            <br><br>
                            <strong>Price: {{ this.$route.params.price }}</strong><br>
                            <textarea class="form-control" id="price" v-model="product.price"></textarea>
                            <br><br>
                          <strong>Description: {{ this.$route.params.description }}</strong><br>
                          <textarea class="form-control" id="description" v-model="product.description"></textarea>
                          <br><br>
                            <button class="btn btn-success" @click="updateProduct(product)">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {APIService} from '../APIService';

    // eslint-disable-next-line no-unused-vars
    const API_URL = 'http://localhost:8000';
    const apiService = new APIService();

    export default {
        name: "Edit",

        data() {
            return {
                product: {
                    name: "",
                    price: "",
                    description: "",
                },
            }
        },

        // props: ['id'],
        methods: {
            updateProduct(product) {
                const self = this
                apiService.updateProduct(product, this.$route.params.id).then(function (response) {
                    const status = JSON.parse(response.success);
                    if (status) {
                        self.$swal.fire({
                            title: 'Updated!',
                            text: 'Your Product has been updated!',
                            icon: 'success',
                            timer: 5000
                        })
                            .then(function(){
                                self.$router.push({name: 'home'})

                            })
                    }
                    console.log(status);
                }).catch(error => {
                    console.log(error.response)
                });
            },
        }
    }
</script>

<style scoped>

</style>