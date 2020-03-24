<h4>
no
</h4>

<h4>
no
</h4>

<h4>
no
</h4>

<div class="container content my-3">
                           

<div class="container content my-3">
        <div class="row mt-3">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent">
                        <li class="breadcrumb-item"><a class="black-text" href="?">Home</a></li>
                        <li class="breadcrumb-item active">Articles</li>
                    </ol>
                    </nav>
                <div style="height: 20px;"></div>     
            </div>
        </div>
            
        
        
        <?php
        foreach ($articles as $article) {  

            ?>
            <div class="card mb-3" style="max-width: 100%;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <a data-fancybox="gallery1" href="">
                    <?php echo '<img src="' . $article->img1 . '">'; ?>
                    </a>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">
                        <?php echo '<a href="?page=article&id=' . $article->id . '">' . $article->title . '</a>'; ?>
                        </h5>
                        <?php echo '<p>' . $article->intro . '</p>'; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
            
        }
        ?>


        

       