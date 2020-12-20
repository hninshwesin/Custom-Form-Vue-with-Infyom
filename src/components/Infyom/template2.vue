<template>
    <div>
        <div class="row">
            <div class="side">
                <img src="@/assets/imgs/automobile/sss.jpg" class="img-fluid" alt="Responsive image">
                <div class="col-12">
                    <div class="row my-3">
                        <button type="button" class="btn btn-light text-danger col-12 col-md-3 my-1 rounded-pill"
                                data-toggle="modal" data-target="#goalkeeper" style=" border-style: solid;
  border-color: red;">
                            <i class="fa fa-angle-double-left my-1 float-left"></i> Contact Us
                            <i class="fa fa-angle-double-right my-1 float-right"></i>
                        </button>

                        <!-- Modal -->
                        <div class="modal" id="supersevenstar" data-backdrop="static" tabindex="-1" role="dialog"
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
                                <div class="modal-content card rounded-2 text-danger"
                                     style="font-size: 24px;border-style: solid;border-color: red;">
                                    <div class="row">
                                        <div class="col-1 ml-2 "><i class="fa fa-angle-double-left my-1"
                                                                    style="font-size: 24px"></i>
                                        </div>
                                        {{
                                        <div class="col-2 "><span class=""></span></div>
                                        }}
                                        <div class="col-8 offset-1  text-center"><h4>Contact Us</h4></div>
                                        <div class="col-1 ml-3 my-1 "><i class="fa fa-angle-double-right float-right"
                                                                         style="font-size: 24px;"></i></div>
                                    </div>
                                </div>
                                <div class="modal-content card rounded-2 bg-danger text-white"
                                     style="font-size: 24px;color: #F0FF33">
                                    <button class="btn btn-danger text-white" style="font-size: large"><i
                                            class="fa fa-phone float-left" style="font-size: 24px;"></i>Contact Us
                                    </button>
                                </div>
                                <div class="modal-content card rounded-2 bg-danger text-white"
                                     style="font-size: 24px;color: #F0FF33">
                                    <button class="btn btn-danger text-white" style="font-size: large"><i
                                            class="fa fa-envelope-square float-left" style="font-size: 24px;"></i> Email
                                        Us
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="btn btn-light col-12 col-md-3 my-1 text-danger rounded-pill"
                             style="border-style: solid;border-color: red;"><i class="fa fa-map-marker float-left"></i>
                            Locate Us
                        </div>
                        <div class="btn btn-light col-12 col-md-3 my-1 text-danger rounded-pill"
                             style="border-style: solid;border-color: red;"><i class="fa fa-car float-left"></i>Vehicle
                        </div>
                        <div class="btn btn-light col-12 col-md-3 my-1 text-danger rounded-pill"
                             style="border-style: solid;border-color: red;"><i class="fa fa-newspaper-o float-left"></i>
                            News and Promotions
                        </div>

                    </div>
                </div>
                <div id="carouselExampleSlidesOnly" class="carousel slide my-3" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/imgs/automobile/sss1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/automobile/sss2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/imgs/automobile/sss3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-light text-danger col-12 col-md-3 offset-md-3 my-1 rounded-pill"
                        data-toggle="modal" data-target="#followus" style=" border-style: solid;
  border-color: red;">
                    <i class="fa fa-angle-double-left my-1 float-left"></i> Follow Us
                    <i class="fa fa-angle-double-right my-1 float-right"></i>
                </button>

                <!-- Modal -->
                <div class="modal" id="followus" data-backdrop="static" tabindex="-1" role="dialog"
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
                        <div class="modal-content card rounded-2 text-danger"
                             style="font-size: 24px;border-style: solid;border-color: red;">
                            <div class="row">
                                <div class="col-1 ml-2 "><i class="fa fa-angle-double-left my-1"
                                                            style="font-size: 24px"></i>
                                </div>
                                {{
                                <div class="col-2 "><span class=""></span></div>
                                }}
                                <div class="col-8 offset-1  text-center"><h4>Follow Us</h4></div>
                                <div class="col-1 ml-3 my-1 "><i class="fa fa-angle-double-right float-right"
                                                                 style="font-size: 24px;"></i></div>
                            </div>
                        </div>
                        <div class="modal-content card rounded-2 bg-danger text-white"
                             style="font-size: 24px;color: #F0FF33">
                            <button class="btn btn-danger text-white" style="font-size: large"><i
                                    class="fa fa-globe float-left" style="font-size: 24px;"></i>Website
                            </button>
                        </div>
                        <div class="modal-content card rounded-2 bg-danger text-white"
                             style="font-size: 24px;color: #F0FF33">
                            <button class="btn btn-danger text-white" style="font-size: large"><i
                                    class="fab fa-facebook-square rounded-circle float-left"
                                    style="font-size: 24px;"></i>
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-light text-danger col-12 col-md-3 rounded-pill" data-toggle="modal"
                        data-target="#exampleModalLong" style="border-style: solid;border-color: red">
                    <i class="fa fa-angle-double-left float-left my-1"></i> Sale Hours <i
                        class="fa fa-angle-double-right float-right my-1"></i>
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
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
                        <div class="modal-content card rounded-2 text-danger"
                             style="font-size: 24px;border-style: solid;border-color: red;">
                            <div class="row">
                                <div class="col-1 ml-2 "><i class="fa fa-clock-o my-1" style="font-size: 24px"></i>
                                </div>
                                {{
                                <div class="col-2 "><span class=""></span></div>
                                }}
                                <div class="col-8 offset-1  text-center"><h4>Sale Hours</h4></div>
                                <div class="col-1 ml-3 my-1 "><i class="fa fa-clock-o float-right"
                                                                 style="font-size: 24px;"></i></div>
                            </div>
                        </div>
                        <div class="modal-content">
                            <div class="modal-body bg-danger" style="font-size: 24px;">
                                <p class="text-center">Mon-Fri: 8:00 AM - 4:00 PM<br>
                                    Saturday:8:00 AM - 4:00 PM<br>
                                    Sunday :Closed</p>
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
        name: "template2"
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