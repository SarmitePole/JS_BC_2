<h5>
no
</h5>

<h5>
no
</h5>

<h6>
no
</h6>

<h6>
no
</h6>

<div class="row">
    <div class="col">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent">
                <li class="breadcrumb-item"><a class="black-text" href="?">Home</a></li>
                <li class="breadcrumb-item"><a class="black-text" href="?page=articles">Articles</a></li>
                <li class="breadcrumb-item active">Article</li>
            </ol>
            </nav>
        <div style="height: 20px;"></div>     
    </div>
</div>

<div class="container content my-3">

    <div class="row">
        <div class="col-sm-6 text-center">
            <div class="row-sm-6 mb-3">
                <div class="col align-middle">
                    <a><img id="main-image" <?php echo '<img src="' . $article->img1 . '"'; ?> ></a>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-sm-4 no-gutters">
                    <a><img class="small-image mx-1" <?php echo '<img src="' . $article->img3 . '"'; ?>></a>
                </div>
                <div class="col-sm-4 no-gutters">
                    <a><img class="small-image" <?php echo '<img src="' . $article->img2 . '"'; ?>></a>
                </div>
                <div class="col-sm-4 no-gutters">
                    <a"><img class="small-image" <?php echo '<img src="' . $article->img4 . '"'; ?>></a>  
                </div>               
                                    
            </div>

            <div class="row mb-3">
                <div class="col-sm-4 no-gutters">
                    <a"><img class="small-image" <?php echo '<img src="' . $article->img4 . '"'; ?>></a>  
                </div>                  
                <div class="col-sm-4 no-gutters">
                    <a><img class="small-image" <?php echo '<img src="' . $article->img3 . '"'; ?>></a>
                </div>
                <div class="col-sm-4 no-gutters">
                    <a><img class="small-image mx-1" <?php echo '<img src="' . $article->img2 . '"'; ?>></a>
                </div>
                                        
            </div>
            
            <div class="row">                    
                <div class="col-sm-4 no-gutters">
                    <a><img class="small-image mx-1" <?php echo '<img src="' . $article->img2 . '"'; ?>></a>
                </div>
                <div class="col-sm-4 no-gutters">
                    <a"><img class="small-image" <?php echo '<img src="' . $article->img4 . '"'; ?>></a>  
                </div>     
                <div class="col-sm-4 no-gutters">
                    <a><img class="small-image" <?php echo '<img src="' . $article->img3 . '"'; ?>></a>
                </div>                  
            </div>
        </div>
            
        <div class="col-sm-6 text-justify">
            <h5><?= $article->title; ?></h5>
            <p><?php echo $article->text; ?></p>
            <p><?php echo $article->text; ?></p>
            <p><?php echo $article->text; ?></p>
            
        </div>            
    </div>

</div>        