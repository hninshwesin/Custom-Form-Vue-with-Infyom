<!--<template>-->
<!--    <div>-->
<!--        <div class="row">-->
<!--            <div class="side col-md-4" id="left">-->
<!--                <img src="@/assets/imgs/sport/bg.jpg" class="img-fluid" alt="Responsive image">-->
<!--                <br><br>-->
<!--                <div class="row">-->
<!--                    <div class="col-12 col-sm-6  col-md-4 offset-md-2">-->
<!--                        <div class="btn btn-primary col-12" title="select button">-->
<!--                            <i title="select icon" class="far fa-ticket float-left my-1"></i>-->
<!--                            <a href="#text-option1" title="select text" class="btn btn-primary col-8"-->
<!--                               @click="isHidden1 = !isHidden1"><span-->
<!--                                    class="text-center" style="border-color:#fff">{{ selected1.name || selected1.price || selected1.description }}</span>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="btn btn-primary col-12" title="select button">-->
<!--                            <i title="select icon" class="fa fa-info-circle float-left my-1"></i>-->
<!--                            <a href="#text-option2" title="select text" class="btn btn-primary col-8"-->
<!--                               @click="isHidden2 = !isHidden2"><span-->
<!--                                    class="text-center" style="border-color:#fff">{{ selected2.name || selected2.price || selected2.description }}</span>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        &lt;!&ndash; Button trigger modal &ndash;&gt;-->
<!--                        &lt;!&ndash;                        <button type="button" class="btn btn-primary col-12" data-toggle="modal"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                data-target="#achievement">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <i class="fa fa-trophy float-left my-1" style="font-size: 18px"></i> Club Achievements<i&ndash;&gt;-->
<!--                        &lt;!&ndash;                                class="fa fa-chevron-down float-right"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </button>&ndash;&gt;-->

<!--                        &lt;!&ndash;                        &lt;!&ndash; Modal &ndash;&gt;&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <div class="modal" id="achievement" data-backdrop="static" tabindex="-1" role="dialog"&ndash;&gt;-->
<!--                        &lt;!&ndash;                             aria-labelledby="staticBackdropLabel" aria-hidden="true">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <div class="modal-dialog" role="document">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-md-2 col-3 text-center">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                class="btn btn-danger modal-content rounded-circle text-center"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-home text-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-md-2 col-3 text-center offset-md-8 offset-6 float-right">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button" class="btn btn-danger modal-content rounded-circle"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-chevron-left text-dark text-center"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2 text-success"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;background-color: #F0FF33">&ndash;&gt;-->

<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-trophy my-1"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                    style="font-size: 24px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        {{&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2 "><span class=""></span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        }}&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-7 offset-1  text-center"><h4>Club Achievements</h4></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        &ndash;&gt;-->
<!--                        <div class="btn btn-primary col-12" title="select button">-->
<!--                            <i title="select icon" class="fa fa-video-camera float-left my-1"></i>-->
<!--                            <a href="#text-option3" title="select text" class="btn btn-primary col-8"-->
<!--                               @click="isHidden3 = !isHidden3"><span-->
<!--                                    class="text-center" style="border-color:#fff">{{ selected3.name || selected3.price || selected3.description }}</span>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-12 col-sm-6  col-md-4">-->
<!--                        <div class="btn btn-primary col-12" title="select button">-->
<!--                            <i title="select icon" class="fa fa-video-camera float-left my-1"></i>-->
<!--                            <a href="#text-option4" title="select text" class="btn btn-primary col-8"-->
<!--                               @click="isHidden4 = !isHidden4"><span-->
<!--                                    class="text-center" style="border-color:#fff">{{ selected4.name || selected4.price || selected4.description }}</span>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="btn btn-primary col-12" title="select button">-->
<!--                            <i title="select icon" class="fa fa-video-camera float-left my-1"></i>-->
<!--                            <a href="#text-option5" title="select text" class="btn btn-primary col-8"-->
<!--                               @click="isHidden5 = !isHidden5"><span-->
<!--                                    class="text-center" style="border-color:#fff">{{ selected5.name || selected5.price || selected5.description }}</span>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="btn btn-primary col-12" title="select button">-->
<!--                            <i title="select icon" class="fa fa-video-camera float-left my-1"></i>-->
<!--                            <a href="#text-option6" title="select text" class="btn btn-primary col-8"-->
<!--                               @click="isHidden6 = !isHidden6"><span-->
<!--                                    class="text-center" style="border-color:#fff">{{ selected6.name || selected6.price || selected6.description }}</span>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        &lt;!&ndash;                        <button type="button" class="btn btn-primary col-12" data-toggle="modal"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                data-target="#goalkeeper">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <i class="fa fa-futbol-o my-1 float-left" style="font-size: 18px"></i> GoalKeeper<i&ndash;&gt;-->
<!--                        &lt;!&ndash;                                class="fa fa-chevron-down float-right"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </button>&ndash;&gt;-->

<!--                        &lt;!&ndash;                        &lt;!&ndash; Modal &ndash;&gt;&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <div class="modal" id="goalkeeper" data-backdrop="static" tabindex="-1" role="dialog"&ndash;&gt;-->
<!--                        &lt;!&ndash;                             aria-labelledby="staticBackdropLabel" aria-hidden="true">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <div class="modal-dialog" role="document">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-md-2 col-3 text-center ">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button" class="btn btn-danger modal-content rounded-circle"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-home text-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-md-2 col-3 text-center offset-md-8 offset-6 float-right ">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button" class="btn btn-danger modal-content rounded-circle"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-chevron-left text-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2 text-success"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;background-color: #F0FF33">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o my-1"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                    style="font-size: 24px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        {{&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2 "><span class=""></span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        }}&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-7 offset-1  text-center"><h4>GoalKeepers</h4></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2 bg-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;color: #F0FF33">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2 offset-0"><span class="">1</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-8 offset-0"><span>Thiha Si Thu</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2 bg-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;color: #F0FF33">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2 offset-0"><span class="">18</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-8 offset-0"><span>Myo Min Latt</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2 bg-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;color: #F0FF33">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2 "><span class="">28</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-8 "><span>Bhone Thitsar Min</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <button type="button" class="btn btn-primary col-12" data-toggle="modal"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                data-target="#defenders">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <i class="fa fa-futbol-o float-left my-1" style="font-size: 18px"></i> Defenders<i&ndash;&gt;-->
<!--                        &lt;!&ndash;                                class="fa fa-chevron-down float-right"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </button>&ndash;&gt;-->

<!--                        &lt;!&ndash;                        &lt;!&ndash; Modal &ndash;&gt;&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <div class="modal" id="defenders" data-backdrop="static" tabindex="-1" role="dialog"&ndash;&gt;-->
<!--                        &lt;!&ndash;                             aria-labelledby="staticBackdropLabel" aria-hidden="true">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <div class="modal-dialog" role="document">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-md-2 col-3 text-center">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button" class="btn btn-danger modal-content rounded-circle"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-home text-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-md-2 col-3 text-center offset-md-8 offset-6 float-right">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button" class="btn btn-danger modal-content rounded-circle"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-chevron-left text-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2 text-success"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;background-color: #F0FF33">&ndash;&gt;-->

<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o my-1"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                    style="font-size: 24px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        {{&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2 "><span class=""></span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        }}&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-7 offset-1  text-center"><h4>Defenders</h4></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2 bg-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;color: #F0FF33">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2"><span class="">13</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-8"><span>Mr.Stenven</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <button type="button" class="btn btn-primary col-12" data-toggle="modal"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                data-target="#midlefielders">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <i class="fa fa-futbol-o float-left my-1" style="font-size: 18px"></i> Midlefielders<i&ndash;&gt;-->
<!--                        &lt;!&ndash;                                class="fa fa-chevron-down float-right"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </button>&ndash;&gt;-->

<!--                        &lt;!&ndash;                        &lt;!&ndash; Modal &ndash;&gt;&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <div class="modal" id="midlefielders" data-backdrop="static" tabindex="-1" role="dialog"&ndash;&gt;-->
<!--                        &lt;!&ndash;                             aria-labelledby="staticBackdropLabel" aria-hidden="true">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <div class="modal-dialog" role="document">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-md-2 col-3 text-center">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button" class="btn btn-danger modal-content rounded-circle"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-home text-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-md-2 col-3 text-center offset-md-8 offset-6 float-right">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button" class="btn btn-danger modal-content rounded-circle"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-chevron-left text-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2 text-success"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;background-color: #F0FF33">&ndash;&gt;-->

<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o my-1"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                    style="font-size: 24px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        {{&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2 "><span class=""></span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        }}&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-7 offset-1  text-center"><h4>Midlefielders</h4></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2  bg-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;color: #F0FF33">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2"><span class="">21</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-8"><span>Mr.David</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <button type="button" class="btn btn-primary col-12" data-toggle="modal" data-target="#forward">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <i class="fa fa-futbol-o float-left my-1" style="font-size: 18px"></i>Forward<i&ndash;&gt;-->
<!--                        &lt;!&ndash;                                class="fa fa-chevron-down float-right"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </button>&ndash;&gt;-->

<!--                        &lt;!&ndash;                        &lt;!&ndash; Modal &ndash;&gt;&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <div class="modal" id="forward" data-backdrop="static" tabindex="-1" role="dialog"&ndash;&gt;-->
<!--                        &lt;!&ndash;                             aria-labelledby="staticBackdropLabel" aria-hidden="true">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <div class="modal-dialog" role="document">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-3 col-md-2 text-center">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button" class="btn btn-danger modal-content rounded-circle"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-home text-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="col-3 col-md-2 text-center offset-6  offset-md-8 float-right">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <button type="button" class="btn btn-danger modal-content rounded-circle"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                data-dismiss="modal"><i class="fa fa-chevron-left text-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                        style="font-size: 30px"></i></button>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2 text-success"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;background-color: #F0FF33">&ndash;&gt;-->

<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o my-1"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                                                    style="font-size: 24px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        {{&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2 "><span class=""></span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        }}&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-7 offset-1  text-center"><h4>Forward</h4></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-auto "><i class="fa fa-chevron-down float-right"></i></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                <div class="modal-content card rounded-2  bg-dark"&ndash;&gt;-->
<!--                        &lt;!&ndash;                                     style="font-size: 24px;color: #F0FF33">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    <div class="row">&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-1 ml-2 "><i class="fa fa-futbol-o" style="font-size: 18px"></i>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-2"><span class="">9</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                        <div class="col-8"><span>Zin Min Htun</span></div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                                    </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                                </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->

<!--                    </div>-->
<!--                </div>-->
<!--                <div id="carouselExampleSlides" class="carousel slide my-3" data-ride="carousel">-->
<!--                    <div class="carousel-inner">-->
<!--                        <div class="carousel-item active">-->
<!--                            <img src="@/assets/imgs/sport/shan1.jpg" class="d-block w-100" alt="...">-->
<!--                        </div>-->
<!--                        <div class="carousel-item">-->
<!--                            <img src="@/assets/imgs/sport/shan2.jpg" class="d-block w-100" alt="...">-->
<!--                        </div>-->
<!--                        <div class="carousel-item">-->
<!--                            <img src="@/assets/imgs/sport/shan3.jpg" class="d-block w-100" alt="...">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-12 my-3">-->
<!--                    <div class="row">-->
<!--                        <a href="" class="btn btn-dark col-4 rounded-pill"> <i-->
<!--                                class="fab fa-facebook float-left text-primary"></i>Follow Us</a>-->
<!--                        <a href="" class="btn btn-dark col-4 rounded-pill"> <i-->
<!--                                class="fa fa-envelope-square float-left text-warning"></i>Email</a>-->
<!--                        <a href="" class="btn btn-dark col-4 rounded-pill"> <i-->
<!--                                class="fa fa-map-marker float-left text-warning"></i>Location</a>-->
<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->
<!--            <div class="main">-->
<!--                <div class="col-md-8" id="center">-->
<!--                    <div id="text-option1" class="edit-selected-element block TextElement" v-if="!isHidden1">-->
<!--                        <div class="edit-selected-element-title block-title border-radius-style no-frame">-->
<!--                            <span class="ivr-element-title">Text Options 1</span>-->
<!--                        </div>-->
<!--                        <div class="edit-selected-element-body block-body">-->
<!--                            <h5>Select Name :-->
<!--                                <select v-model="selected1">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{name : category.name}">{{ category.name }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Price :-->
<!--                                <select v-model="selected1">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{price : category.price}">{{ category.price }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Description :-->
<!--                                <select v-model="selected1">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{description : category.description}">{{ category.description }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <br>-->
<!--                    <div id="text-option2" class="edit-selected-element block TextElement" v-if="!isHidden2">-->
<!--                        <div class="edit-selected-element-title block-title border-radius-style no-frame">-->
<!--                            <span class="ivr-element-title">Text Options 2</span>-->
<!--                        </div>-->
<!--                        <div class="edit-selected-element-body block-body">-->
<!--                            <h5>Select Name :-->
<!--                                <select v-model="selected2">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{name : category.name}">{{ category.name }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Price :-->
<!--                                <select v-model="selected2">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{price : category.price}">{{ category.price }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Description :-->
<!--                                <select v-model="selected2">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{description : category.description}">{{ category.description }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <br>-->
<!--                    <div id="text-option3" class="edit-selected-element block TextElement" v-if="!isHidden3">-->
<!--                        <div class="edit-selected-element-title block-title border-radius-style no-frame">-->
<!--                            <span class="ivr-element-title">Text Options 3</span>-->
<!--                        </div>-->
<!--                        <div class="edit-selected-element-body block-body">-->
<!--                            <h5>Select Name :-->
<!--                                <select v-model="selected3">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{name : category.name}">{{ category.name }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Price :-->
<!--                                <select v-model="selected3">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{price : category.price}">{{ category.price }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Description :-->
<!--                                <select v-model="selected3">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{description : category.description}">{{ category.description }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <br>-->
<!--                    <div id="text-option4" class="edit-selected-element block TextElement" v-if="!isHidden4">-->
<!--                        <div class="edit-selected-element-title block-title border-radius-style no-frame">-->
<!--                            <span class="ivr-element-title">Text Options 4</span>-->
<!--                        </div>-->
<!--                        <div class="edit-selected-element-body block-body">-->
<!--                            <h5>Select Name :-->
<!--                                <select v-model="selected4">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{name : category.name}">{{ category.name }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Price :-->
<!--                                <select v-model="selected4">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{price : category.price}">{{ category.price }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Description :-->
<!--                                <select v-model="selected4">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{description : category.description}">{{ category.description }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <br>-->
<!--                    <div id="text-option5" class="edit-selected-element block TextElement" v-if="!isHidden5">-->
<!--                        <div class="edit-selected-element-title block-title border-radius-style no-frame">-->
<!--                            <span class="ivr-element-title">Text Options 5</span>-->
<!--                        </div>-->
<!--                        <div class="edit-selected-element-body block-body">-->
<!--                            <h5>Select Name :-->
<!--                                <select v-model="selected5">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{name : category.name}">{{ category.name }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Price :-->
<!--                                <select v-model="selected5">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{price : category.price}">{{ category.price }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Description :-->
<!--                                <select v-model="selected5">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{description : category.description}">{{ category.description }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <br>-->
<!--                    <div id="text-option6" class="edit-selected-element block TextElement" v-if="!isHidden6">-->
<!--                        <div class="edit-selected-element-title block-title border-radius-style no-frame">-->
<!--                            <span class="ivr-element-title">Text Options 6</span>-->
<!--                        </div>-->
<!--                        <div class="edit-selected-element-body block-body">-->
<!--                            <h5>Select Name :-->
<!--                                <select v-model="selected6">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{name : category.name}">{{ category.name }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Price :-->
<!--                                <select v-model="selected6">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{price : category.price}">{{ category.price }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                            (OR)-->
<!--                            <h5>Select Description :-->
<!--                                <select v-model="selected6">-->
<!--                                    <option v-for="(category, index) in categories" :key="index"-->
<!--                                            :value="{description : category.description}">{{ category.description }}-->
<!--                                    </option>-->
<!--                                </select>-->
<!--                            </h5>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="footer">-->
<!--                <h2>Footer</h2>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

<!--</template>-->

<!--<script>-->
<!--    import axios from "axios";-->

<!--    export default {-->
<!--        name: "template1 old",-->
<!--        data() {-->
<!--            return {-->
<!--                selected1: '',-->
<!--                selected2: '',-->
<!--                selected3: '',-->
<!--                selected4: '',-->
<!--                selected5: '',-->
<!--                selected6: '',-->
<!--                categories: '',-->
<!--                isHidden1: true,-->
<!--                isHidden2: true,-->
<!--                isHidden3: true,-->
<!--                isHidden4: true,-->
<!--                isHidden5: true,-->
<!--                isHidden6: true,-->

<!--            }-->
<!--        },-->
<!--        mounted() {-->
<!--            const API_URL = 'http://127.0.0.1:8000';-->
<!--            const URL = `${API_URL}/api/shwe__infyoms/`-->
<!--            axios.get(URL)-->
<!--                .then(response => {-->
<!--                    this.categories = response.data.data-->
<!--                })-->
<!--                .catch(error => {-->
<!--                    console.log(error);-->
<!--                });-->
<!--        },-->
<!--        methods: {-->
<!--            changeText() {-->

<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    .row {-->
<!--        display: flex;-->
<!--        flex-wrap: wrap;-->
<!--    }-->

<!--    .side {-->
<!--        flex: 30%;-->
<!--        background-color: white;-->
<!--        height: 750px;-->
<!--        width: 500px;-->
<!--        margin: 0;-->
<!--        padding: 20px;-->
<!--        overflow-y: scroll;-->
<!--    }-->

<!--    .main {-->
<!--        flex: 70%;-->
<!--        padding: 20px;-->
<!--        height: 750px;-->
<!--        background-color: #ffffff;-->
<!--    }-->

<!--    .main > div {-->
<!--        float: left;-->
<!--        box-sizing: border-box;-->
<!--    }-->

<!--    .col-md-8 {-->
<!--        width: 67%;-->
<!--    }-->

<!--    .footer {-->
<!--        padding: 20px;-->
<!--        text-align: center;-->
<!--        background: #ddd;-->
<!--        width: 100%;-->
<!--    }-->

<!--    .wrap-el-options {-->
<!--        padding-top: 28px;-->
<!--    }-->

<!--    .ivr-element-title {-->
<!--        color: #c11f66;-->
<!--        font-size: 25px;-->
<!--        font-style: normal;-->
<!--        font-weight: 400;-->
<!--        text-transform: capitalize;-->
<!--        box-sizing: border-box;-->
<!--        width: 750px;-->
<!--        height: 60px;-->
<!--        border-color: #dddedf;-->
<!--        background-color: #e0e8f0;-->
<!--    }-->

<!--    .TextElement .ivr-element-title {-->
<!--        display: inline-block;-->
<!--        text-align: center;-->
<!--        margin-left: 20px;-->
<!--    }-->

<!--    /*[class$="Element"] .ivr-element-title {*/-->
<!--    /*    margin-left: 20px;*/-->
<!--    /*}*/-->

<!--    .wrap-el-options > div {-->
<!--        display: block;-->
<!--        box-sizing: border-box;-->
<!--        color: #fff;-->
<!--    }-->

<!--</style>-->
