<template>
    <div>
        <div class="tabs-left col-md-4">
            <!--        <div id='container' style="margin:50px auto 0; width:250px;">-->
            <!--            <br>-->
            <!--            <ejs-dropdownlist id='dropdownlist' placeholder='Select Content Type' :dataSource='infyoms' :fields='fields'></ejs-dropdownlist>-->
            <!--        </div>-->
            <br>
            <h5>Select Name List :
                <select v-model="selected1">
                    <option v-for="(category, index) in categories" :key="index" :value="{name : category.name}">{{ category.name }}</option>
                </select>
            </h5>
            <h5>Name: {{selected1.name }}</h5>
            <br>
            <h5>Select Content Type :
                <select v-model="selected2">
                    <option v-for="(infyom, index) of infyoms" :key="index" :value="{contentType : infyom.contentType}">{{ infyom.contentType }}</option>
                </select>
            </h5>
            <h5>Content Type: {{selected2.contentType}}</h5>
            <br>
<!--            <button class="btn btn-success" @click="submit">Submit</button>-->
        </div>
        <div class="tabs-left col-md-4">
            <br>
            <h5>Select Price List :
                <select v-model="selected3">
                    <option v-for="(category, index) in categories" :key="index" :value="{price : category.price}">{{ category.price }}</option>
                </select>
            </h5>
            <h5>Price: {{selected3.price }}</h5>
            <br>
            <h5>Select Content Type :
                <select v-model="selected4">
                    <option v-for="(infyom, index) of infyoms" :key="index" :value="{contentType : infyom.contentType}">{{ infyom.contentType }}</option>
                </select>
            </h5>
            <h5>Content Type: {{selected4.contentType }}</h5>
            <br>
<!--            <button class="btn btn-success" @click="submit1">Submit</button>-->
        </div>
        <div class="tabs-left col-md-4">
            <br>
            <h5>Select Description List :
                <select v-model="selected5">
                    <option v-for="(category, index) in categories" :key="index" :value="{description : category.description}">{{ category.description }}</option>
                </select>
            </h5>
            <br>
            <h5>Select Content Type :
                <select v-model="selected6">
                    <option v-for="(infyom, index) of infyoms" :key="index" :value="{contentType : infyom.contentType}">{{ infyom.contentType }}</option>
                </select>
            </h5>
            <br>
<!--            <button class="btn btn-success" @click="submit2">Submit</button>-->
        </div>
        <br>
        <div class="col-md-12">
            <div class="phone">
                <div class="screen">
                    <a v-if="submit" class="nav" v-bind:href="'mailto:' + selected1.name"> {{selected1.name }}</a>
                    <h5 v-if="submit1" class="nav" v-bind:href="'https://www.rabbit-converter.org/Rabbit/' + selected3.price">{{selected3.price }}</h5>
                    <h5 v-if="submit2" class="nav">{{selected5.description }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Show",
        data() {
            return {
                selected1: '',
                selected2: '',
                selected3: '',
                selected4: '',
                selected5: '',
                selected6: '',
                categories: '',
                infyoms: [
                    // {
                    //     "name": "id",
                    //     "dbType": "increments",
                    //     "htmlType": "",
                    //     "validations": "",
                    //     "searchable": false,
                    //     "fillable": false,
                    //     "primary": true,
                    //     "inForm": false,
                    //     "inIndex": false,
                    //     "inView": false
                    // },
                    {
                        "name": "name",
                        "dbType": "string",
                        "htmlType": "text",
                        "validations": "required",
                        "contentType": "email",
                        "searchable": true,
                        "fillable": true,
                        "primary": false,
                        "inForm": true,
                        "inIndex": true,
                        "inView": true
                    },
                    {
                        "name": "price",
                        "dbType": "bigInteger",
                        "htmlType": "number",
                        "validations": "required",
                        "contentType": "url",
                        "searchable": true,
                        "fillable": true,
                        "primary": false,
                        "inForm": true,
                        "inIndex": true,
                        "inView": true
                    },
                    {
                        "name": "description",
                        "dbType": "longText",
                        "htmlType": "text",
                        "validations": "required",
                        "contentType": "phone",
                        "searchable": true,
                        "fillable": true,
                        "primary": false,
                        "inForm": true,
                        "inIndex": true,
                        "inView": true
                    },
                    // {
                    //     "name": "created_at",
                    //     "dbType": "timestamp",
                    //     "htmlType": "",
                    //     "validations": "",
                    //     "searchable": false,
                    //     "fillable": false,
                    //     "primary": false,
                    //     "inForm": false,
                    //     "inIndex": false,
                    //     "inView": true
                    // },
                    // {
                    //     "name": "updated_at",
                    //     "dbType": "timestamp",
                    //     "htmlType": "",
                    //     "validations": "",
                    //     "searchable": false,
                    //     "fillable": false,
                    //     "primary": false,
                    //     "inForm": false,
                    //     "inIndex": false,
                    //     "inView": true
                    // }
                ],

            }
        },

        mounted() {
            const API_URL = 'http://127.0.0.1:8000';
            const URL = `${API_URL}/api/shwe__infyoms/`
            axios.get(URL)
                .then(response => {
                    this.categories = response.data.data
                })
                .catch(error => {
                    console.log(error);
                });
        },
        methods: {
            submit(){
            },
            submit1(){
                console.log(this.selected3.price)
            },
            submit2(){
                console.log(this.selected5.description)
            }
        }
    }
</script>

<style scoped>
    .phone {
        height: 50%; /* whatever height you need */
        position: relative;
        width: 500px;
        clear: right;
        display: flex;
        flex-direction: column; /* used to separate the divs vertically */
        /* instead of horizontally */
        border-radius: 5%;
        border: 2px solid deepskyblue;
        padding-left: 50px;
        padding-right: 50px;
    }

    .phone .screen {
        flex: 9; /* screen will take 9/10 spaces from the div.phone */
        overflow-y: auto; /* enables scroll */
    }

    .phone .nav {
        flex: 10; /* nav will take 1/10 spaces from the div.phone */
    }
</style>