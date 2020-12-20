<template>
    <div>
        <div class="row">
            <div class="side col-md-4" id="left">
                <img src="@/assets/imgs/sport/bg.jpg" class="img-fluid" alt="Responsive image">
                <br><br>
                <div class="row">
                    <div class="col-12 col-sm-6  col-md-4 offset-md-2">
                        <div class="btn btn-primary col-12" href="#button-option1" datatype="ButtonElement">
                            <i title="select icon" class="far fa-ticket float-left my-1"></i>
                            <a href="#text-option1" title="select text" class="btn btn-primary"
                               @click="isHidden1 = !isHidden1">
<!--                                <span class="text-center" v-if="isHidden1">-->
<!--                                    Ticket-->
<!--                                </span>-->
                                <span class="text-center">
                                    {{ selected1.name || selected1.price || selected1.description }}
                                </span>
                            </a>
                        </div>
                        <br><br>
                        <div class="btn btn-primary col-12" href="#button-option1" datatype="ButtonElement">
                            <i title="select icon" class="fa fa-info-circle float-left my-1"></i>
                            <a href="#text-option2" title="select text" class="btn btn-primary"
                               @click="isHidden2 = !isHidden2">
                                <span class="text-center">
                                    {{ selected2.name || selected2.price || selected2.description }}
                                </span>
                            </a>
                        </div>
                        <br><br>
                        <div class="btn btn-primary col-12" href="#button-option1" datatype="ButtonElement">
                            <i title="select icon" class="fa fa-video-camera float-left my-1"></i>
                            <a href="#text-option3" title="select text" class="btn btn-primary"
                               @click="isHidden3 = !isHidden3">
                                <span class="text-center">
                                    {{ selected3.name || selected3.price || selected3.description }}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6  col-md-4">
                        <div class="btn btn-primary col-12" href="#button-option1" datatype="ButtonElement">
                            <i title="select icon" class="fa fa-video-camera float-left my-1"></i>
                            <a href="#text-option4" title="select text" class="btn btn-primary"
                               @click="isHidden4 = !isHidden4">
                                <span class="text-center">
                                    {{ selected4.name || selected4.price || selected4.description }}
                                </span>
                            </a>
                        </div>
                        <br><br>
                        <div class="btn btn-primary col-12" href="#button-option1" datatype="ButtonElement">
                            <i title="select icon" class="fa fa-video-camera float-left my-1"></i>
                            <a href="#text-option5" title="select text" class="btn btn-primary"
                               @click="isHidden5 = !isHidden5">
                                <span class="text-center">
                                    {{ selected5.name || selected5.price || selected5.description }}
                                </span>
                            </a>
                        </div>
                        <br><br>
                        <div class="btn btn-primary col-12" href="#button-option1" datatype="ButtonElement">
                            <i title="select icon" class="fa fa-video-camera float-left my-1"></i>
                            <a href="#text-option6" title="select text" class="btn btn-primary"
                               @click="isHidden6 = !isHidden6">
                                <span
                                    class="text-center">
                                    {{ selected6.name || selected6.price || selected6.description }}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleSlides" class="carousel slide my-3" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/imgs/sport/shan1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/sport/shan2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/sport/shan3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
                <div class="col-12 my-3">
                    <div class="row">
                        <a href="" class="btn btn-dark col-4 rounded-pill"> <i
                                class="fab fa-facebook float-left text-primary"></i>Follow Us</a>
                        <a href="" class="btn btn-dark col-4 rounded-pill"> <i
                                class="fa fa-envelope-square float-left text-warning"></i>Email</a>
                        <a href="" class="btn btn-dark col-4 rounded-pill"> <i
                                class="fa fa-map-marker float-left text-warning"></i>Location</a>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="col-md-8" id="center">
                    <div id="text-option1" class="edit-selected-element block TextElement" v-show="!isHidden1">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Text Options 1</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Select Name :
                                <select v-model="selected1">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{name : category.name}">{{ category.name }}
                                    </option>
                                </select>
                                </span>
                                <span class="group-title">Select Price :
                                <select v-model="selected1">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{price : category.price}">{{ category.price }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Description :
                                <select v-model="selected1">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{description : category.description}">{{ category.description }}
                                    </option>
                                </select>
                                    </span>
                            </div>
                            <br>
                        </div>
                    </div>
                    <div id="button-option1" class="edit-selected-element block ButtonElement" v-show="!isHidden1">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Button Options 1</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <!-- <ejs-colorpicker cssClass="e-hide-value" :modeSwitcher="false"></ejs-colorpicker> -->
                                <span class="group-title">Color</span>

                                <!--                                <div class="edit-Color p15">-->
                                <!--                                    <div class="background-color">-->
                                <!--                                        <label class="odLabelInline">Color</label>-->
                                <!--                                        <input type="text" id="full" value="#ffffff" data-attr="backgroundColor"-->
                                <!--                                               class="backgroundColorEditor" style="display: none;">-->
                                <!--                                        <div class="sp-replacer sp-light">-->
                                <!--                                            <div class="sp-preview">-->
                                <!--                                                <div class="sp-preview-inner"-->
                                <!--                                                     style="background-color: rgb(220, 193, 193);"></div>-->
                                <!--                                            </div>-->
                                <!--                                            <div class="sp-dd">-->
                                <!--                                                <span class="glyphicon glyphicon-menu-down">-->

                                <!--                                                </span>-->
                                <!--                                            </div>-->
                                <!--                                        </div>-->
                                <!--                                    </div>-->
                                <!--                                </div>-->
                            </div>
                        </div>
                        <div class="actions-block block">
                                    <div class="actions-selector form-group">
                                        <span class="actions-title block-title">Action : </span>
                                            <div>
                                                <select class="el-action" for="text-option1">
                                                    <option value="">not selected</option>
                                                    <option value="link">Link</option>
                                                    <option value="call">Call</option>
                                                    <!-- <option value="contactForm">ContactForm</option> -->
                                                    <option value="navigation">Navigation</option>
                                                    <!-- <option value="contactSMS">ContactSMS</option> -->
                                                </select>
                                            </div>
                                    </div>

                                    <div class="actions-body block-body" >
                                        <form class="actions-body-form">
                                            <div class="linkEditor" data-action="link">
                                                <br>
                                                <input type="hidden" name="type" value="default">
                                                <input name="link" placeholder="Please Type Link" type="text" for="text-option1" value="">
                                                <br>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="actions-body block-body"><form class="actions-body-form"></form></div>
                                </div>
                    </div>
                    <br>
                    <div id="text-option2" class="edit-selected-element block TextElement" v-show="!isHidden2">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Text Options 2</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Select Name :
                                <select v-model="selected2">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{name : category.name}">{{ category.name }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Price :
                                <select v-model="selected2">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{price : category.price}">{{ category.price }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Description :
                                <select v-model="selected2">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{description : category.description}">{{ category.description }}
                                    </option>
                                </select>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="button-option2" class="edit-selected-element block ButtonElement" v-show="!isHidden2">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Button Options 2</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Color</span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="text-option3" class="edit-selected-element block TextElement" v-show="!isHidden3">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Text Options 3</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Select Name :
                                <select v-model="selected3">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{name : category.name}">{{ category.name }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Price :
                                <select v-model="selected3">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{price : category.price}">{{ category.price }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Description :
                                <select v-model="selected3">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{description : category.description}">{{ category.description }}
                                    </option>
                                </select>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="button-option3" class="edit-selected-element block ButtonElement" v-show="!isHidden3">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Button Options 3</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Color</span>
                            </div>
                            <br>
                        </div>
                    </div>
                    <br>
                    <div id="text-option4" class="edit-selected-element block TextElement" v-show="!isHidden4">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Text Options 4</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Select Name :
                                <select v-model="selected4">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{name : category.name}">{{ category.name }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Price :
                                <select v-model="selected4">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{price : category.price}">{{ category.price }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Description :
                                <select v-model="selected4">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{description : category.description}">{{ category.description }}
                                    </option>
                                </select>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="button-option4" class="edit-selected-element block ButtonElement" v-show="!isHidden4">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Button Options 4</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Color</span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="text-option5" class="edit-selected-element block TextElement" v-show="!isHidden5">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Text Options 2</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Select Name :
                                <select v-model="selected5">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{name : category.name}">{{ category.name }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Price :
                                <select v-model="selected5">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{price : category.price}">{{ category.price }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Description :
                                <select v-model="selected5">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{description : category.description}">{{ category.description }}
                                    </option>
                                </select>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="button-option5" class="edit-selected-element block ButtonElement" v-show="!isHidden5">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Button Options 5</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Color</span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="text-option6" class="edit-selected-element block TextElement" v-show="!isHidden6">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Text Options 6</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Select Name :
                                <select v-model="selected6">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{name : category.name}">{{ category.name }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Price :
                                <select v-model="selected6">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{price : category.price}">{{ category.price }}
                                    </option>
                                </select>
                                    </span>
                                <span class="group-title">Select Description :
                                <select v-model="selected6">
                                    <option v-for="(category, index) in categories" :key="index"
                                            :value="{description : category.description}">{{ category.description }}
                                    </option>
                                </select>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="button-option6" class="edit-selected-element block ButtonElement" v-show="!isHidden6">
                        <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Button Options 6</span>
                        </div>
                        <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                                <span class="group-title">Color</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <h2>Footer</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    // import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
    // import { enableRipple } from '@syncfusion/ej2-base';

    // enableRipple(true);
    // Vue.use(ColorPickerPlugin);

    export default {
        name: "template1",
        data() {
            return {
                categories: '',
                selected1: '',
                selected2: '',
                selected3: '',
                selected4: '',
                selected5: '',
                selected6: '',
                color: '',
                isHidden1: true,
                isHidden2: true,
                isHidden3: true,
                isHidden4: true,
                isHidden5: true,
                isHidden6: true,
            }
        },
        mounted() {
            const API_URL = 'http://127.0.0.1:8000';
            const URL = `${API_URL}/api/shwe__infyoms/`
            axios.get(URL)
                .then(response => {
                    this.categories = response.data.data
                    console.log(this.categories)
                    // this.isHidden1 = false
                })
                .catch(error => {
                    console.log(error);
                });
        },
        methods: {
            getlist(){
                
            }
        },
    }
</script>

<style lang="scss" scoped>
// @import './node_modules/@syncfusion/ej2-base/styles/material.css';
// @import './node_modules/@syncfusion/ej2-buttons/styles/material.css';
// @import './node_modules/@syncfusion/ej2-popups/styles/material.css';
// @import './node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
// @import './node_modules/@syncfusion/ej2-inputs/styles/material.css';

    .row {
        display: flex;
        flex-wrap: wrap;
    }

    .side {
        flex: 30%;
        height: 750px;
        width: 500px;
        margin: 0;
        padding: 20px;
        overflow-y: scroll;
    }

    .main {
        flex: 70%;
        padding: 20px;
        height: 750px;
        background-color: #ffffff;
    }

    .main > div {
        float: left;
        box-sizing: border-box;
    }

    .col-md-8 {
        width: 67%;
    }

    .footer {
        padding: 20px;
        text-align: center;
        background: #ddd;
        width: 100%;
    }

    .wrap-el-options {
        padding-top: 28px;
    }

    .ivr-element-title {
        color: #c11f66;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        text-transform: capitalize;
        box-sizing: border-box;
        width: 750px;
        height: 60px;
        border-color: #dddedf;
        background-color: #e0e8f0;
    }

    .TextElement .ivr-element-title {
        display: inline-block;
        text-align: center;
    }

    .ButtonElement .ivr-element-title {
        display: inline-block;
        text-align: center;
    }

    .edit-selected-element-title {
        background: #e0e8f0;
    }

    .edit-selected-element-body {
        width: 100%;
        /* width: 445px; */
        /* max-width: 450px; */
        background: #f0f3f6;
    }

    .edit-selected-element-body > div {
        padding: 5px 0;
    }

    .edit-selected-element-body-group {
        background-color: #f0f3f6;
        /*padding: 2%;*/
        border-width: 3px;
        border-left: 1px solid #dddedf;
        border-right: 1px solid #dddedf;
    }

    .group-title {
        display: block;
        margin-bottom: 12px;
        padding: 10px 0 12px 15px;
        color: #c350a6;
        border-bottom: 1px solid #dddedf;
        font-size: 18px;
        font-style: normal;
        font-weight: normal;
        /*font-family: "OpenSans", "proxima_nova_rgregular";*/
    }

    .edit-selected-element-body-group > div {
        /* display: inline-block;
        width: 100%; */
        margin: 0 auto;
        width: 300px;
        text-align: center;
    }


    .p15 {
        padding: 0 15px;
    }

    .odLabelInline {
        display: inline-block;
        margin-right: 5px;
        font-size: 18px;
        font-style: normal;
        font-weight: normal;
        /*font-family: "OpenSans", "proxima_nova_rgregular";*/
    }

    .sp-replacer {
        border-radius: 8px;
        border: 1px solid #9dabb8;
        padding: 5px;
        background: #fff;
    }

    .sp-preview {
        border: 1px solid #9caab7;
    }

    .sp-preview, .sp-alpha, .sp-thumb-el {
        position: relative;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
    }

    .ButtonElement .actions-block {
    padding: 10px 10px 50px 0;
    border-left: 1px solid #dddedf;
    border-right: 1px solid #dddedf;
    background-color: #f0f3f6;
}

.block {
    position: relative;
}

.actions-title.block-title {
    display: block;
    margin-bottom: 12px;
    padding: 10px 0 12px 15px;
    color: #c350a6;
    border-bottom: 1px solid #dddedf;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    font-family: "OpenSans", "proxima_nova_rgregular";
}

.block-title {
    display: inline-block;
    font-family: serif;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}

.actions-block .el-action {
    margin: 5px 10px 5px 15px;
}

    /*[class$="Element"] .ivr-element-title {*/
    /*    margin-left: 20px;*/
    /*}*/

    .wrap-el-options > div {
        display: block;
        box-sizing: border-box;
        color: #fff;
    }

</style>

<!--                                <span class="group-title" v-for="(field, index) of database" :key="index">-->
<!--                                    <h5 v-if="field.searchable">Select {{ field.name }} :-->
<!--                                        <select v-model="selected1">-->
<!--                                            <option v-for="(category, index) in categories" :key="index">-->
<!--                                                {{category.name}}-->
<!--                                            </option>-->
<!--                                            <option v-for="(category, index) in categories" :key="index">-->
<!--                                                {{category.price}}-->
<!--                                            </option>-->
<!--                                            <option v-for="(category, index) in categories" :key="index">-->
<!--                                                {{category.description}}-->
<!--                                            </option>-->
<!--                                        </select>-->
<!--                                    </h5>-->
