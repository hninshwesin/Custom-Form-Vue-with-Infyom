<template>
    <div>
        <h1>Template</h1>
        <div class="flex-container">
            <div class="clickable-container">
                <div>
                    <img src="@/assets/imgs/sport/bg.jpg" class="img-fluid" alt="Responsive image">

                    <div class="row">
                        <div class="col-12 col-sm-6  col-md-4 offset-md-2">
                            <a href="" class="btn btn-primary col-12"><i class="far fa-ticket float-left my-1"></i><span
                                    class="text-center">Ticket</span></a>
                            <a href="https://en.wikipedia.org/wiki/Shan_United_F.C." class="btn btn-primary col-12"><i
                                    class="fa fa-info-circle float-left my-1"></i><span
                                    class="text-center">About Shan United FC</span></a>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary col-12" data-toggle="modal"
                                    data-target="#achievement">
                                <i class="fa fa-trophy float-left my-1" style="font-size: 18px"></i> Club Achievements<i
                                    class="fa fa-chevron-down float-right"></i>
                            </button>

                            <!-- Modal -->
                            <div class="modal" id="achievement" data-backdrop="static" tabindex="-1" role="dialog"
                                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="row">
                                        <div class="col-md-2 col-3 text-center">
                                            <button type="button"
                                                    class="btn btn-danger modal-content rounded-circle text-center"
                                                    data-dismiss="modal"><i class="fa fa-home text-dark"
                                                                            style="font-size: 30px"></i></button>
                                        </div>
                                        <div class="col-md-2 col-3 text-center offset-md-8 offset-6 float-right">
                                            <button type="button" class="btn btn-danger modal-content rounded-circle"
                                                    data-dismiss="modal"><i class="fa fa-chevron-left text-dark text-center"
                                                                            style="font-size: 30px"></i></button>
                                        </div>
                                    </div>
                                    <div class="modal-content card rounded-2 text-success"
                                         style="font-size: 24px;background-color: #F0FF33">

                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-trophy my-1"
                                                                        style="font-size: 24px"></i>
                                            </div>
                                            {{
                                            <div class="col-2 "><span class=""></span></div>
                                            }}
                                            <div class="col-7 offset-1  text-center"><h4>Club Achievements</h4></div>
                                            <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <a href="" class="btn btn-primary col-12"><i
                                    class="fa fa-video-camera float-left my-1"></i><span
                                    class="text-center">Last Video</span></a>


                        </div>
                        <div class="col-12 col-sm-6  col-md-4">

                            <button type="button" class="btn btn-primary col-12" data-toggle="modal"
                                    data-target="#goalkeeper">
                                <i class="fa fa-futbol-o my-1 float-left" style="font-size: 18px"></i> GoalKeeper<i
                                    class="fa fa-chevron-down float-right"></i>
                            </button>

                            <!-- Modal -->
                            <div class="modal" id="goalkeeper" data-backdrop="static" tabindex="-1" role="dialog"
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
                                    <div class="modal-content card rounded-2 text-success"
                                         style="font-size: 24px;background-color: #F0FF33">
                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o my-1"
                                                                        style="font-size: 24px"></i>
                                            </div>
                                            {{
                                            <div class="col-2 "><span class=""></span></div>
                                            }}
                                            <div class="col-7 offset-1  text-center"><h4>GoalKeepers</h4></div>
                                            <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>
                                        </div>
                                    </div>
                                    <div class="modal-content card rounded-2 bg-dark"
                                         style="font-size: 24px;color: #F0FF33">
                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>
                                            </div>
                                            <div class="col-2 offset-0"><span class="">1</span></div>
                                            <div class="col-8 offset-0"><span>Thiha Si Thu</span></div>
                                        </div>
                                    </div>
                                    <div class="modal-content card rounded-2 bg-dark"
                                         style="font-size: 24px;color: #F0FF33">
                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>
                                            </div>
                                            <div class="col-2 offset-0"><span class="">18</span></div>
                                            <div class="col-8 offset-0"><span>Myo Min Latt</span></div>
                                        </div>
                                    </div>
                                    <div class="modal-content card rounded-2 bg-dark"
                                         style="font-size: 24px;color: #F0FF33">
                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>
                                            </div>
                                            <div class="col-2 "><span class="">28</span></div>
                                            <div class="col-8 "><span>Bhone Thitsar Min</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary col-12" data-toggle="modal"
                                    data-target="#defenders">
                                <i class="fa fa-futbol-o float-left my-1" style="font-size: 18px"></i> Defenders<i
                                    class="fa fa-chevron-down float-right"></i>
                            </button>

                            <!-- Modal -->
                            <div class="modal" id="defenders" data-backdrop="static" tabindex="-1" role="dialog"
                                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="row">
                                        <div class="col-md-2 col-3 text-center">
                                            <button type="button" class="btn btn-danger modal-content rounded-circle"
                                                    data-dismiss="modal"><i class="fa fa-home text-dark"
                                                                            style="font-size: 30px"></i></button>
                                        </div>
                                        <div class="col-md-2 col-3 text-center offset-md-8 offset-6 float-right">
                                            <button type="button" class="btn btn-danger modal-content rounded-circle"
                                                    data-dismiss="modal"><i class="fa fa-chevron-left text-dark"
                                                                            style="font-size: 30px"></i></button>
                                        </div>
                                    </div>
                                    <div class="modal-content card rounded-2 text-success"
                                         style="font-size: 24px;background-color: #F0FF33">

                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o my-1"
                                                                        style="font-size: 24px"></i>
                                            </div>
                                            {{
                                            <div class="col-2 "><span class=""></span></div>
                                            }}
                                            <div class="col-7 offset-1  text-center"><h4>Defenders</h4></div>
                                            <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>
                                        </div>

                                    </div>

                                    <div class="modal-content card rounded-2 bg-dark"
                                         style="font-size: 24px;color: #F0FF33">
                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>
                                            </div>
                                            <div class="col-2"><span class="">13</span></div>
                                            <div class="col-8"><span>Mr.Stenven</span></div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <button type="button" class="btn btn-primary col-12" data-toggle="modal"
                                    data-target="#midlefielders">
                                <i class="fa fa-futbol-o float-left my-1" style="font-size: 18px"></i> Midlefielders<i
                                    class="fa fa-chevron-down float-right"></i>
                            </button>

                            <!-- Modal -->
                            <div class="modal" id="midlefielders" data-backdrop="static" tabindex="-1" role="dialog"
                                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="row">
                                        <div class="col-md-2 col-3 text-center">
                                            <button type="button" class="btn btn-danger modal-content rounded-circle"
                                                    data-dismiss="modal"><i class="fa fa-home text-dark"
                                                                            style="font-size: 30px"></i></button>
                                        </div>
                                        <div class="col-md-2 col-3 text-center offset-md-8 offset-6 float-right">
                                            <button type="button" class="btn btn-danger modal-content rounded-circle"
                                                    data-dismiss="modal"><i class="fa fa-chevron-left text-dark"
                                                                            style="font-size: 30px"></i></button>
                                        </div>
                                    </div>
                                    <div class="modal-content card rounded-2 text-success"
                                         style="font-size: 24px;background-color: #F0FF33">

                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o my-1"
                                                                        style="font-size: 24px"></i>
                                            </div>
                                            {{
                                            <div class="col-2 "><span class=""></span></div>
                                            }}
                                            <div class="col-7 offset-1  text-center"><h4>Midlefielders</h4></div>
                                            <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>
                                        </div>

                                    </div>

                                    <div class="modal-content card rounded-2  bg-dark"
                                         style="font-size: 24px;color: #F0FF33">
                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>
                                            </div>
                                            <div class="col-2"><span class="">21</span></div>
                                            <div class="col-8"><span>Mr.David</span></div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <button type="button" class="btn btn-primary col-12" data-toggle="modal" data-target="#forward">
                                <i class="fa fa-futbol-o float-left my-1" style="font-size: 18px"></i>Forward<i
                                    class="fa fa-chevron-down float-right"></i>
                            </button>

                            <!-- Modal -->
                            <div class="modal" id="forward" data-backdrop="static" tabindex="-1" role="dialog"
                                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="row">
                                        <div class="col-3 col-md-2 text-center">
                                            <button type="button" class="btn btn-danger modal-content rounded-circle"
                                                    data-dismiss="modal"><i class="fa fa-home text-dark"
                                                                            style="font-size: 30px"></i></button>
                                        </div>
                                        <div class="col-3 col-md-2 text-center offset-6  offset-md-8 float-right">
                                            <button type="button" class="btn btn-danger modal-content rounded-circle"
                                                    data-dismiss="modal"><i class="fa fa-chevron-left text-dark"
                                                                            style="font-size: 30px"></i></button>
                                        </div>
                                    </div>
                                    <div class="modal-content card rounded-2 text-success"
                                         style="font-size: 24px;background-color: #F0FF33">

                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o my-1"
                                                                        style="font-size: 24px"></i>
                                            </div>
                                            {{
                                            <div class="col-2 "><span class=""></span></div>
                                            }}
                                            <div class="col-7 offset-1  text-center"><h4>Forward</h4></div>
                                            <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>
                                        </div>

                                    </div>

                                    <div class="modal-content card rounded-2  bg-dark"
                                         style="font-size: 24px;color: #F0FF33">
                                        <div class="row">
                                            <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>
                                            </div>
                                            <div class="col-2"><span class="">9</span></div>
                                            <div class="col-8"><span>Zin Min Htun</span></div>
                                        </div>

                                    </div>

                                </div>
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
                <div class="overlay">
                    <a class="overlay-content" href="/template1">Edit</a>
                </div>
            </div>
            <div class="clickable-container">
                <div>
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
                <div class="overlay">
                    <a class="overlay-content" href="/template2">Edit</a>
                </div>
            </div>
            <div class="clickable-container">
                <div>
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
                <div class="overlay">
                    <a class="overlay-content" href="/template3">Edit</a>
                </div>
            </div>
            <div class="clickable-container">
                <div>
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
                <div class="overlay">
                    <a class="overlay-content" href="/template4">Edit</a>
                </div>
            </div>
            <div class="clickable-container">
                <div>
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
                <div class="overlay">
                    <a class="overlay-content" href="/template5">Edit</a>
                </div>
            </div>
            <div class="clickable-container">
                <div>
                    <img src="@/assets/imgs/Business/UPG Promotion/upg7.jpg" class="img-fluid " alt="Responsive image">
                    <marquee><p style="font-size: 24px;" class="my-2">This text will scroll from right to left</p></marquee>
                    <div class="col-12">
                        <div class="row">
                            <a href="#" class="col-12 col-md-4 btn btn-primary text-white text-center my-1 rounded-pill"><i
                                    class="far fa-registered float-left my-1"></i>Register For Promotion</a>
                            <a href="#" class="col-12 col-md-4 btn btn-primary text-white text-center my-1 rounded-pill"><i
                                    class="fas fa-bullhorn float-left my-1"></i>Announcement</a>
                            <a href="#" class="col-12 col-md-4 btn btn-primary text-white text-center my-1 rounded-pill"><i
                                    class="fas fa-headset  float-left my-1"></i>Our Hotline</a>
                            <a href="#" class="col-12 col-md-4 btn btn-primary text-white text-center my-1 rounded-pill"><i
                                    class="fab fa-facebook-messenger float-left my-1"></i>Messenger</a>
                            <a href="#" class="col-12 col-md-4 btn btn-primary text-white text-center my-1 rounded-pill"><i
                                    class="fas fa-tags float-left my-1"></i>Lucky Draw Promotion Web Page</a>
                            <a href="#" class="col-12 col-md-4 btn btn-primary text-white text-center my-1 rounded-pill"><i
                                    class="fas fa-clipboard-list float-left my-1"></i>Term and Conditions</a>
                            <div id="carouselExampleSlid" class="carousel slide my-3" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="@/assets/imgs/Business/UPG Promotion/upg1.jpg" class="d-block w-100"
                                             alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="@/assets/imgs/Business/UPG Promotion/upg2.jpg" class="d-block w-100"
                                             alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="@/assets/imgs/Business/UPG Promotion/upg3.jpg" class="d-block w-100"
                                             alt="...">
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="col-12 col-md-4 btn btn-primary text-white text-center my-1 rounded-pill"><i
                                    class="fas fa-magic float-left my-1"></i>Interim Lucky Draw Program<i
                                    class="fas fa-magic float-right my-1"></i></a>
                            <a href="#" class="col-12 col-md-4 btn btn-primary text-white text-center my-1 rounded-pill"><i
                                    class="fas fa-trophy float-left my-1"></i>Interim Lucky Draw Winners Gallery</a>
                            <a href="#" class="col-12 col-md-4 btn btn-primary text-white text-center my-1 rounded-pill"><i
                                    class="fas fa-magic float-left my-1"></i>Promotion Items<i
                                    class="fas fa-magic float-right my-1"></i></a>
                            <a href="#"
                               class="col-5 col-md-4 offset-md-2 offset-1 btn btn-primary text-white text-center rounded  my-1"><i
                                    class="fab fa-facebook-square" style="font-size: 40px"></i></a>
                            <a href="#" class="col-5 col-md-4 btn btn-primary text-white text-center my-1 ml-1  rounded"><i
                                    class="fas fa-th float-left" style="font-size: 40px"></i>UPG Group</a>
                            <!-- Second carousel-->
                            <div id="carouselExampleSli" class="carousel slide my-3" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="@/assets/imgs/Business/UPG Promotion/upg.jpg" class="d-block w-100"
                                             alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="@/assets/imgs/Business/UPG Promotion/upg5.jpg" class="d-block w-100"
                                             alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="@/assets/imgs/Business/UPG Promotion/upg6.jpg" class="d-block w-100"
                                             alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="@/assets/imgs/Business/UPG Promotion/upg4.jpg" class="d-block w-100"
                                             alt="...">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overlay">
                    <a class="overlay-content" href="/template6">Edit</a>
                </div>
            </div>
            <div class="clickable-container">
                <div>
                    <img src="@/assets/imgs/education/sfi/logo.jpg" class="img-fluid " alt="Responsive image">
                    <button type="button" class="btn btn-light text-dark col-12 col-md-6 offset-md-3  my-1 " data-toggle="modal" data-target="#goalkeepe"  style=" border-style: solid;
  border-color: black; background-color: darkgrey">
                        <i class="fa fa-angle-double-left my-1 float-left" ></i> Call Us Now
                        <i class="fa fa-angle-double-right my-1 float-right"></i>
                    </button>

                    <!-- Modal -->
                    <div class="modal" id="goalkeepe" data-backdrop="static" tabindex="-1" role="dialog"
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
                                 style="font-size: 24px;background-color: darkgrey">
                                <div class="row">
                                    <div class="col-1 ml-2 "><i class="fa fa-angle-double-left my-1" style="font-size: 24px"></i>
                                    </div>
                                    {{                            <div class="col-2 "><span class=""></span></div>}}
                                    <div class="col-8 offset-1  text-center"><h4>Call Us Now</h4></div>
                                    <div class="col-1 ml-3 my-1 "><i class="fa fa-angle-double-right float-right" style="font-size: 24px;"></i></div>
                                </div>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark" style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: darkgrey"><i class="fa fa-phone-alt float-left" style="font-size: 24px;"></i>Hotline 1</button>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark" style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: darkgrey"><i class="fa fa-phone-alt float-left" style="font-size: 24px;"></i>Hotline 2</button>
                            </div>

                        </div>
                    </div>

                    <a href="" class="btn btn-light col-12 col-md-6 offset-md-3 my-1" style="background-color: darkgrey; border-style: solid;border-color: black"><i class="fas fa-envelope-square float-left my-1" style="font-size: large"></i>Email Us</a>
                    <a href="" class="btn btn-light col-12 col-md-6 offset-md-3 my-1" style="background-color: darkgrey; border-style: solid;border-color: black"><i class="fas fa-map-marker-alt float-left my-1"></i>Campuses</a>
                    <a href="" class="btn btn-light col-12 col-md-6 offset-md-3 my-1" style="background-color: darkgrey; border-style: solid;border-color: black"><i class="fas fa-project-diagram float-left my-1"></i>ICM</a>
                    <a href="" class="btn btn-light col-12 col-md-6 offset-md-3 my-1" style="background-color: darkgrey; border-style: solid;border-color: black"><i class="fas fa-project-diagram float-left my-1"></i>ICM</a>
                    <a href="" class="btn btn-light col-12 col-md-6 offset-md-3 my-1" style="background-color: darkgrey; border-style: solid;border-color: black"><i class="fas fa-project-diagram float-left my-1"></i>ABE</a>
                    <a href="" class="btn btn-light col-12 col-md-6 offset-md-3 my-1" style="background-color: darkgrey; border-style: solid;border-color: black"><i class="fas fa-project-diagram float-left my-1"></i>Undergraduate</a>
                    <a href="" class="btn btn-light col-12 col-md-6 offset-md-3 my-1" style="background-color: darkgrey; border-style: solid;border-color: black"><i class="fas fa-project-diagram float-left my-1"></i>MBA</a>
                    <button type="button" class="btn btn-light text-dark col-12 col-md-6 offset-md-3  my-1 " data-toggle="modal" data-target="#obm"  style=" border-style: solid;
  border-color: black; background-color: darkgrey">
                        <i class="fa fa-angle-double-left my-1 float-left" ></i> OBM
                        <i class="fa fa-angle-double-right my-1 float-right"></i>
                    </button>

                    <!-- Modal -->
                    <div class="modal" id="obm" data-backdrop="static" tabindex="-1" role="dialog"
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
                                 style="font-size: 24px;background-color: darkgrey">
                                <div class="row">
                                    <div class="col-1 ml-2 "><i class="fa fa-angle-double-left my-1" style="font-size: 24px"></i>
                                    </div>
                                    {{                           <div class="col-2 "><span class=""></span></div>}}
                                    <div class="col-8 offset-1  text-center"><h4>OBM</h4></div>
                                    <div class="col-1 ml-3 my-1 "><i class="fa fa-angle-double-right float-right" style="font-size: 24px;"></i></div>
                                </div>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark" style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: darkgrey"><i class="fas fa-project-diagram float-left my-1"></i>OBM Level 2</button>
                            </div>
                            <div class="modal-content card rounded-2 bg-light text-dark" style="font-size: 24px;color: #F0FF33;">
                                <button class="btn btn-light text-dark" style="background-color: darkgrey"><i class="fas fa-project-diagram float-left my-1"></i>OBM Level 3</button>
                            </div>

                        </div>
                    </div>
                    <a href="" class="btn btn-light col-12 col-md-6 offset-md-3 my-1" style="background-color: darkgrey; border-style: solid;border-color: black"><i class="fas fa-project-diagram float-left my-1"></i>English</a>
                    <div id="carouselslider" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="@/assets/imgs/education/sfi/sfu1.jpg"  class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/imgs/education/sfi/sfu2.jpg"  class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/imgs/education/sfi/sfu4.jpg"  class="d-block w-100" alt="...">
                            </div>
                        </div>
                    </div>
                    <img src="@/assets/imgs/education/sfi/fblogo.png"  alt="..." class="img-thumbnail col-md-1 offset-md-3 col-3 offset-0 my-5">
                    <img src="@/assets/imgs/education/sfi/iglogo.png"  alt="..." class="img-thumbnail col-md-1 offset-md-1 col-3 offset-1 my-5">
                    <img src="@/assets/imgs/education/sfi/youtubelogo.jpg"  alt="..." class="img-thumbnail col-md-1 offset-md-1 col-3 offset-1 my-5">
                </div>
                <div class="overlay">
                    <a class="overlay-content" href="/template7">Edit</a>
                </div>
            </div>
            <div class="clickable-container">
                <div>
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
                <div class="overlay">
                    <a class="overlay-content" href="/template8">Edit</a>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "Template",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        background-color: #96c1ec;
        padding: 0 4px;
        /*align-items: baseline;*/
    }

    .flex-container > div {
        background-color: #f1f1f1;
        width: 400px;
        margin: 25px;
        text-align: center;
        line-height: 100px;
        font-size: 30px;
    }
    .clickable-container {
        position:relative;
        color:white;
        width:220px;
        display:block;
    }

    .clickable-container:hover {
        cursor:pointer;
        color:#fff490;
    }
    .overlay{
        display:none;
        text-align: center;
    }
    .clickable-container:hover .overlay {
        position:absolute;
        top:0;
        left:0;
        display: flex;
        flex-direction:column;
        justify-content:center;
        background: #1d1f21;
        border-radius: 5px;
        width:100%;
        height:100%;
        opacity:0.95;
    }
    .overlay-content {
        font-size:2.5rem;
    }


</style>