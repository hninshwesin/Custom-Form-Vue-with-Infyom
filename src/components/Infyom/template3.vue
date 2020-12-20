<template>
    <div>
        <div class="row">
            <div class="side">
                <img src="@/assets/imgs/fuse/fuse_bg.jpg" class="img-fluid " alt="Responsive image">
                <div class="col-12">
                    <div class="row">
                        <a href="#" class="col-12 col-md-3 btn btn-dark text-white text-center my-1 rounded-pill"><i
                                class="fa fa-calendar-check-o float-left my-1"></i>Booking</a>
                        <a href="#" class="col-12 col-md-3 btn btn-dark text-white text-center my-1 rounded-pill"><i
                                class="fa fa-info float-left my-1"></i>About Us</a>
                        <a href="#" class="col-12 col-md-3 btn btn-dark text-white text-center my-1 rounded-pill"
                           data-toggle="modal" data-target="#exampleModalLong"><i
                                class="fa fa-clock-o float-left my-1"></i>Time
                            Schedule</a>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                             aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
                                     style="font-size: 24px;">
                                    <div class="row">
                                        <div class="col-1 ml-2 "><i class="fa fa-clock-o my-1"
                                                                    style="font-size: 24px"></i>
                                        </div>
                                        {{
                                        <div class="col-2 "><span class=""></span></div>
                                        }}
                                        <div class="col-8 offset-1  text-center"><h4>Time Schedule</h4></div>
                                        <div class="col-1 ml-3 my-1 "><i class="fa fa-clock-o float-right"
                                                                         style="font-size: 24px;"></i></div>
                                    </div>
                                </div>
                                <div class="modal-content">
                                    <div class="modal-body bg-dark text-white text-center" style="font-size: 24px;">
                                        <table class="col-12 offset-0">
                                            <tr>
                                                <td>Monday</td>
                                                <td>: CLOSED</td>
                                            </tr>
                                            <tr>
                                                <td>Tuesday</td>
                                                <td>: 09:00 - 17:00</td>
                                            </tr>
                                            <tr>
                                                <td>Wednesday</td>
                                                <td>: 21:30 - 3:00</td>
                                            </tr>
                                            <tr>
                                                <td> Thursday</td>
                                                <td>: 21:30 - 3:00</td>
                                            </tr>
                                            <tr>
                                                <td> Friday</td>
                                                <td>: 21:30 - 4:00</td>
                                            </tr>
                                            <tr>
                                                <td> Saturday</td>
                                                <td>: 21:30 - 4:00</td>
                                            </tr>
                                            <tr>
                                                <td>Sunday</td>
                                                <td>: 21:30 - 3:00</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="col-12 col-md-3 btn btn-dark text-white text-center my-1 rounded-pill"><i
                                class="fa fa-phone float-left my-1"></i>Contact Us</a>

                        <a href="#" class="col-12 col-md-4 btn btn-dark offset-md-2 my-1 rounded-pill"><i
                                class="fab fa-facebook-square my-1 float-left"></i>Facebook</a>
                        <a href="#" class="col-12 col-md-4 btn btn-dark my-1 rounded-pill"><i
                                class="fa fa-envelope-square my-1 float-left"></i>Email</a>
                        <a href="#" class="col-12 col-md-3 offset-md-3 btn btn-dark my-1 rounded-pill"><i
                                class="fa fa-calendar float-left my-1"></i>Event</a>
                        <a href="#" class="col-12 col-md-3 btn btn-dark my-1 rounded-pill" data-toggle="modal"
                           data-target="#vippack"><i class="fa fa-gift float-left"></i>VVIP Package</a>
                        <div class="modal fade" id="vippack" tabindex="-1" role="dialog" aria-labelledby="vippackTitle"
                             aria-hidden="true">
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
                                     style="font-size: 24px;">
                                    <div class="row">
                                        <div class="col-1 ml-2 "><i class="fa fa-gift my-1" style="font-size: 24px"></i>
                                        </div>
                                        {{
                                        <div class="col-2 "><span class=""></span></div>
                                        }}
                                        <div class="col-8 offset-1  text-center"><h4>VVIP PACKAGE</h4></div>
                                        <div class="col-1 ml-3 my-1 "><i class="fa fa-gift float-right"
                                                                         style="font-size: 24px;"></i></div>
                                    </div>
                                </div>
                                <div class="modal-content bg-dark">
                                    <div class="col-12">
                                        <div class="row my-5">
                                            <div class="col-12 col-md-4 my-1 text-white">
                                                <img src="@/assets/imgs/fuse/vvip1.jpg" class="img-thumbnail"
                                                     width="150px" height="150px" alt="">
                                                <span style="font-size: 20px">VVIP Pack (A)</span>
                                            </div>
                                            <div class="col-12 col-md-4 my-1 text-white ">
                                                <img src="@/assets/imgs/fuse/vvip2.jpg" class="img-thumbnail"
                                                     width="150px" height="150px" alt="">
                                                <span style="font-size: 20px">VVIP Pack (B)</span>
                                            </div>
                                            <div class="col-12 col-md-4  my-1 text-white ">
                                                <img src="@/assets/imgs/fuse/vvip3.jpg" class="img-thumbnail"
                                                     width="150px" height="150px" alt="">
                                                <span style="font-size: 20px">VVIP Pack (C)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="carouselExampleslide" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="@/assets/imgs/fuse/slide1.jpg" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="@/assets/imgs/fuse/slide2.jpg" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="@/assets/imgs/fuse/slide3.jpg" class="d-block w-100" alt="...">
                                </div>
                            </div>
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
        name: "template3"
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