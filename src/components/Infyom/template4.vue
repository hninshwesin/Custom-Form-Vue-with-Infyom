<template>
    <div>
        <div class="row">
            <div class="side">
                <div id="carouselExamples" class="carousel slide my-3" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/imgs/consumers/allNatureMyanmar/anm1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/consumers/allNatureMyanmar/anm2.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 offset-md-3 " >
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill" style="background-color: lime"><i class="fas fa-phone float-left my-1"></i>Contact Us</a>
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill" style="background-color: lime"><i class="fas fa-comment-dots float-left my-1"></i>Send SMS</a>
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill" style="background-color: lime"><i class="fab fa-facebook-f float-left my-1"></i>Facebook</a>
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill" style="background-color: lime"><i class="fas fa-map-marker-alt float-left my-1"></i>Our Office</a>
                </div>
                <div id="carouselslide" class="carousel slide my-3" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/imgs/consumers/allNatureMyanmar/anm3.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/consumers/allNatureMyanmar/anm4.jpg" class="d-block w-100" alt="...">
                        </div>

                    </div>
                </div>
            </div>
            <div class="main">

            </div>
            <div class="footer">
                <h2>Footer</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "template4"
    }
</script>

<style scoped>
    .row {
        display: flex;
        flex-wrap: wrap;
    }
    .side {
        flex: 30%;
        background-color: white;
        height: 750px;
        width: 500px;
        margin: 0;
        padding: 20px;
        overflow-y: scroll;
    }
    .main {
        flex: 70%;
        background-color: #ecb6b6;
        padding: 20px;
        height: 750px;
    }
    .footer {
        padding: 20px;
        text-align: center;
        background: #ddd;
        width: 100%;
    }
</style>
