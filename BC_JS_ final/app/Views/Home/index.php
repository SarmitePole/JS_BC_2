<div>
    <p> no </p>
</div>

<div>
    <p> no </p>
</div>

<div>
    <p> no </p>
</div>

<div class="container">
    <div class="row m-5">
        <div class="col-10 justify-content-center h-50"></div>
            <div id="carouselExampleIndicators" class="carousel slide mx-auto" style="width: 800px;" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">

                <?php
                foreach ($carousels as $i=> $carousel) {
                ?>
                                         
                    <div class="carousel-item item <?php if ($i == 0) echo "active" ?>">

                        <img class="d-block w-100"
                        <?php echo 'src="' . $carousel->img1 . '"';?>
                        >
                        
                        <div class="carousel-caption d-none d-lg-block text-wrap bd-highlight text-warning">
                            <h1>
                                <?php echo '<p>' . $carousel->text . '</p>';?>
                            </h1>
                        </div>                        
                    </div>                       

                <?php
                }
                ?>

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
<div>


<div class="container mx-auto">
     
    <div class="row"> 

        <?php
        foreach ($cards as $card) {
        ?>
        
        <div class="col-md-3 card bg-light m-1 h-10" id="card">
             
            <div class="row">
                
                <div class="card-img-top">      
                    <?php echo '<img src="' . $card->img1 . '">';?>
                </div>

                <div class="col-md card h-100">
                    <div class="card-body">
                        <h5 class="card-title"><a href="?page=articles">
                        <?php echo '<p>' . $card->title . '</p>';?>
                        </a></h5>
                        <p class="card-text ">
                        <?php echo '<p>' . $card->text . '</p>';?>
                        </p>                              
                    </div>
                </div>
                
            </div>    
                       
        </div> 

        <?php        
        }
        ?>

    </div>   
            
</div>          
        


    