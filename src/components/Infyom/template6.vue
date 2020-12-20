<template>
    <div>
        <div class="row">
            <div class="side">
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
        name: "template6"
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