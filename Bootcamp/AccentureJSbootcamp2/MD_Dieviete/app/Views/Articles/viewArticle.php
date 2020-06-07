<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
</head>
<body>
    
</body>
</html>


<div class="container-fluid">
    <div class="row">
        <div class="col-sm">
        <h1></h1>
        </div>
    </div>

    <div class="row">
        <div class="col-sm text-center">
        <h2><?= $article->title; ?></h2>
        </div>
    </div>

    <div class="row">
        <div class="col-sm text-center">
        <h6><?= $article->intro; ?></h6>
        </div>
    </div>

   
    <div class="row mb-3 d-sm-flex">
        <div class="col-sm-2 mx-auto">
        <?= '<img src="' . $article->img1 . '">';?>
        </div>
        <div class="col-sm-2 mx-auto">
        <?= '<img src="' . $article->img2 . '">';?>
        </div>
        <div class="col-sm-2 mx-auto">
        <?= '<img src="' . $article->img1 . '">';?>
        </div>
        <div class="col-sm-2 mx-auto">
        <?= '<img src="' . $article->img2 . '">';?>
        </div>
    </div>
        
    <div class="row">
        <div class="col-sm">
        <p><?= $article->text; ?></p>
        <p><?= $article->text; ?></p>
        <p><?= $article->text; ?></p>
        <p><?= $article->text; ?></p>
        <p><?= $article->text; ?></p>
        <p><?= $article->text; ?></p>
        </div>
    </div>

</div>