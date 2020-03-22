<content>

    <div>
        <p> some useles text </p>
    </div>

    <div>
        <p> some useles text </p>
    </div>

    <div>
        <p> some useles text </p>
    </div>

    <?php
        foreach ($carousels as $carousel) {
            echo '<img src="' . $carousel->img1 . '">';
            echo '<p>' . $carousel->text . '</p>';
        }
    ?>

    <?php
        foreach ($cards as $card) {
            echo '<img src="' . $card->img1 . '">';
            echo '<p>' . $card->title . '</p>';
            echo '<p>' . $card->text . '</p>';
        }
    ?>

    <div id="title-page" class="container">
        <div class="row m-5">
            <div class="col-md-10 mx-auto justify-content-center h-50"></div>

                <div id="carouselExampleIndicators" class="carousel slide  mx-auto" style="width: 800px;" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="..\public\images\consultantSeniorSmiling.jpg" alt="First slide">
                            <div class="carousel-caption d-none d-lg-block text-wrap bd-highlight text-warning">
                                <h1>What if seniors had the opportunity to communicate every day with people they choose?</h1>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..\public\images\mainHapy.jpg" alt="Second slide">
                            <div class="carousel-caption d-none d-lg-block text-wrap bd-highlight">
                                <h1>There are so many interesting and clever people to share their daily reflections with</h1>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..\public\images\ConsultantCenterN.jpg" alt="Third slide">
                            <div class="carousel-caption d-none d-lg-block text-wrap bd-highlight text-primary">
                                <h1>We could find the best communication partner</h1>
                            </div>
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>

                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>
            </div>    
        </div>   

       
       
    
        <div class ="row h-15 m-3">
            <div class="col-md-3">
                <div class="card bg-light mb-3 h-100" id="card">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="..\public\images\OldSchoolPhoneN.jpg" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                    <h5 class="card-title"><a href="?page=articles">Step 1</a></h5>
                                <p class="card-text">Call us and tell us about your interests and daily routines</p>                              
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="col-md-3">
                <div class="card bg-light mb-3 h-100" id="card">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="..\public\images\ConsultantGrandKidsN.jpg" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                    <h5 class="card-title"><a href="?page=articles">Step 2</a></h5>
                                <p class="card-text">We will agree on a consultant who will continue to monitor the success of your daily talks</p>         
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="col-md-3">
                <div class="card bg-light mb-3 h-100" id="card">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="..\public\images\teachinToUsePhone.jpg" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                    <h5 class="card-title"><a href="?page=articles">Step 3</a></h5>
                                <p class="card-text">Technical difficulties? Bad connection? Too fashionable phone? - let's find a solution</p>                              
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="col-md-3">
                <div class="card bg-light mb-3 h-100" id="card">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="..\public\images\mainHapy.jpg" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"><a href="?page=articles">Step 4</a></h5>
                                <p class="card-text">DONE - LET'S TALK</p>                              
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>

</content>