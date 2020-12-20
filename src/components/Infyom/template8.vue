<template>
    <div>
        <div class="row">
            <div class="side">
                <img src="@/assets/imgs/finance/okdollar/logo.jpg" class="img-fluid " alt="Responsive image">
                <button type="button" class="btn btn-light text-dark col-12 col-md-6 offset-md-3  my-1 " data-toggle="modal" data-target="#callus"  style=" border-style: solid;
  border-color: black; background-color: #F0FF33; color: navy">
                    <i class="fas fa-phone-alt my-1 float-left" ></i> Call Us
                    <i class="fa fa-angle-double-right my-1 float-right"></i>
                </button>

                <!-- Modal -->
                <div class="modal" id="callus" data-backdrop="static" tabindex="-1" role="dialog"
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
                        <div class="modal-content card rounded-2"
                             style="font-size: 24px;background-color: #F0FF33">
                            <div class="row">
                                <div class="col-1 ml-2 "><i class="fa fa-phone-alt my-1" style="font-size: 24px"></i>
                                </div>
                                {{                           <div class="col-2 "><span class=""></span></div>}}
                                <div class="col-8 offset-1  text-center"><h4>Call Us</h4></div>
                                <div class="col-1 ml-3 my-1 "><i class="fa fa-angle-double-right float-right" style="font-size: 24px;"></i></div>
                            </div>
                        </div>
                        <div class="modal-content card rounded-2 bg-light text-dark" style="font-size: 24px;color: #F0FF33;">
                            <button class="btn btn-light text-dark" style="background-color: #F0FF33"><i class="fas fa-phone-alt float-left my-1"></i>Hotline 1</button>
                        </div>
                        <div class="modal-content card rounded-2 bg-light text-dark" style="font-size: 24px;color: #F0FF33;">
                            <button class="btn btn-light text-dark" style="background-color: #F0FF33"><i class="fas fa-phone-alt float-left my-1"></i>Hotline 2</button>
                        </div>
                        <div class="modal-content card rounded-2 bg-light text-dark" style="font-size: 24px;color: #F0FF33;">
                            <button class="btn btn-light text-dark" style="background-color: #F0FF33"><i class="fas fa-phone-alt float-left my-1"></i>Hotline 3</button>
                        </div>

                    </div>
                </div>
                <a href="" class="btn btn-light col-12 col-md-6 offset-md-3" style="background-color: #F0FF33;color: navy;border-color: black;border-style: solid">SMS Us</a>
                <a href="" class="btn btn-light col-12 col-md-6 offset-md-3" style="background-color: #F0FF33;color: navy;border-color: black;border-style: solid">WhatsApp Us</a>
                <a href="" class="btn btn-light col-12 col-md-6 offset-md-3" style="background-color: #F0FF33;color: navy;border-color: black;border-style: solid">Email Us</a>
                <a href="" class="btn btn-light col-12 col-md-6 offset-md-3" style="background-color: #F0FF33;color: navy;border-color: black;border-style: solid">Locate Us</a>
                <a href="" class="btn btn-light col-12 col-md-6 offset-md-3" style="background-color: #F0FF33;color: navy;border-color: black;border-style: solid">Account Login</a>
                <button type="button" class="btn btn-light text-dark col-12 col-md-6 offset-md-3  my-1 " data-toggle="modal" data-target="#lostphone"  style=" border-style: solid;
  border-color: black;background-color: #F0FF33">
                    <i class="fa fa-angle-double-left my-1 float-left" ></i> Lost Phone
                    <i class="fa fa-angle-double-right my-1 float-right"></i>
                </button>

                <!-- Modal -->
                <div class="modal" id="lostphone" data-backdrop="static" tabindex="-1" role="dialog"
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
                        <div class="modal-content card rounded-2"
                             style="font-size: 24px;background-color: #F0FF33">
                            <div class="row">
                                <div class="col-1 ml-2 "><i class="fa fa-angle-double-left my-1" style="font-size: 24px"></i>
                                </div>
                                {{                            <div class="col-2 "><span class=""></span></div>}}
                                <div class="col-8 offset-1  text-center"><h4>Lost Phone</h4></div>
                                <div class="col-1 ml-3 my-1 "><i class="fa fa-angle-double-right float-right" style="font-size: 24px;"></i></div>
                            </div>
                        </div>
                        <div class="modal-content card rounded-2 bg-light text-dark" style="font-size: 24px;color: #F0FF33;">
                            <button class="btn btn-light text-dark" style="background-color: #F0FF33"><i class="fas fa-arrow-right float-left my-1"></i>Block and Transfer Account</button>
                        </div>
                        <div class="modal-content card rounded-2 bg-light text-dark" style="font-size: 24px;color: #F0FF33;">
                            <button class="btn btn-light text-dark" style="background-color: #F0FF33"><i class="fas fa-arrow-right float-left my-1"></i>Block Account</button>
                        </div>

                    </div>
                </div>
                <a href=""><img src="@/assets/imgs/finance/okdollar/www.png" alt="..." class="img-thumbnail col-md-1 offset-md-4 col-3 offset-2 my-5"></a>
                <div id="carouselExampleSlidesO" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/imgs/finance/okdollar/ok1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/finance/okdollar/ok2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/finance/okdollar/ok3.jpg" class="d-block w-100" alt="...">
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
        name: "template8"
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