<template>
    <div>
        <div class="row">
            <div class="side">
                <img src="@/assets/imgs/commerce/gabarMart/gabar.jpg" class="img-fluid " alt="Responsive image">
                <div class="col-12 col-md-6 offset-md-3 ">
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill"
                       style="border-style: solid;border-color: #636b6f"><i class="fas fa-bars float-left my-1"></i>Register
                        For Promotion</a>
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill"
                       style="border-style: solid;border-color: #636b6f"><i class="fas fa-phone float-left my-1"></i>Hotline</a>
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill"
                       style="border-style: solid;border-color: #636b6f"><i
                            class="fas fa-comment-dots float-left my-1"></i>Send Us Message</a>
                    <button type="button" class="btn btn-light text-dark col-12  my-1 rounded-pill" data-toggle="modal"
                            data-target="#gabarmart" style=" border-style: solid;
  border-color: #636b6f">
                        <i class="fa fa-angle-double-left my-1 float-left"></i> Services
                        <i class="fa fa-angle-double-right my-1 float-right"></i>
                    </button>

                    <!-- Modal -->
                    <div class="modal" id="gabarmart" data-backdrop="static" tabindex="-1" role="dialog"
                         aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="row">
                                <div class="col-md-2 col-3 text-center ">
                                    <button type="button" class="btn btn-danger modal-content rounded-circle"
                                            data-dismiss="modal"><i class="fa fa-home text-dark"
                                                                    style="font-size: 30px"></i></button>
                                </div>
                                <div class="col-md-2 col-3 text-center offset-md-8 offset-6 float-right ">
                                    <button type="button" class="btn btn-danger modal-content rounded-circle"
                                            data-dismiss="modal"><i class="fa fa-chevron-left text-dark"
                                                                    style="font-size: 30px"></i></button>
                                </div>
                            </div>
                            <div class="modal-content card rounded-2 text-warning"
                                 style="font-size: 24px;background-color: navy">
                                <div class="row">
                                    <div class="col-1 ml-2 "><i class="fa fa-angle-double-left my-1"
                                                                style="font-size: 24px"></i>
                                    </div>
                                    {{
                                    <div class="col-2 "><span class=""></span></div>
                                    }}
                                    <div class="col-8 offset-1  text-center"><h4>Services</h4></div>
                                    <div class="col-1 ml-3 my-1 "><i class="fa fa-angle-double-right float-right"
                                                                     style="font-size: 24px;"></i></div>
                                </div>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark"
                                 style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: aqua"><i
                                        class="fa fa-store-alt float-left" style="font-size: 24px;"></i>Merchants From
                                    USA
                                </button>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark"
                                 style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: aqua"><i
                                        class="fa fa-store-alt float-left" style="font-size: 24px;"></i>Merchants From
                                    EUROPE
                                </button>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark"
                                 style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: aqua"><i
                                        class="fa fa-store-alt float-left" style="font-size: 24px;"></i>Merchants From
                                    SINGAPORE
                                </button>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark"
                                 style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: aqua"><i
                                        class="fa fa-store-alt float-left" style="font-size: 24px;"></i>Merchants From
                                    JAPAN
                                </button>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark"
                                 style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: aqua"><i
                                        class="fa fa-store-alt float-left" style="font-size: 24px;"></i>Merchants From
                                    CHINA
                                </button>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark"
                                 style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: aqua"><i
                                        class="fa fa-store-alt float-left" style="font-size: 24px;"></i>Promotions
                                </button>
                            </div>


                        </div>
                    </div>
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill"
                       style="border-style: solid;border-color: #636b6f">Promotion</a>
                </div>
                <div id="carouselExample" class="carousel slide my-3" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/imgs/commerce/gabarMart/gabar1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/commerce/gabarMart/gabar2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/commerce/gabarMart/gabar3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 offset-md-3">
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill"
                       style="border-style: solid;border-color: #636b6f"><i class="fas fa-fire-alt float-left my-1"></i>Trending
                        Products</a>
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill"
                       style="border-style: solid;border-color: #636b6f"><i
                            class="fas fa-calculator float-left my-1"></i>Shipping Calculator</a>
                    <div class="row text-center">
                        <a href="#"
                           class="col-5 offset-1 col-md-5 btn btn-light text-dark text-center my-1 rounded-pill"
                           style="border-style: solid;border-color: #636b6f"><i class="fas fa-info float-left my-1"></i>Sign
                            up</a>
                        <a href="#" class="col-5 col-md-5 btn btn-light text-dark text-center my-1 rounded-pill"
                           style="border-style: solid;border-color: #636b6f"><i class="fas fa-info float-left my-1"></i>Login</a>
                    </div>

                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill"
                       style="border-style: solid;border-color: #636b6f"><i class="fas fa-phone float-left my-1"></i>Contact
                        Us</a>
                    <a href="#" class="col-12 col-md-12 btn btn-light text-dark text-center my-1 rounded-pill"
                       style="border-style: solid;border-color: #636b6f"><i
                            class="fas fa-snowflake float-left my-1"></i>How It Works</a>
                    <div class="row">
                        <img src="@/assets/imgs/commerce/gabarMart/facebook.png" alt="..."
                             class="img-thumbnail col-4 offset-2 col-md-2 offset-md-4" height="100px">
                        <img src="@/assets/imgs/commerce/gabarMart/google.png" alt="..."
                             class="img-thumbnail col-4 col-md-2 ml-2" height="100px">
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
        name: "template5"
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