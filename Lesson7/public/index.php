<?php

// phpinfo();
// die; ar šo apskatās, kādi extentioni ir pieejami šajā PHP versijā

// home
// articles
// - article
// - article
// posts
// - post
// - post...
// info
// - about us
// - contact us
// users
// - login
// - registration
// super-secret

require_once '../app/functions.php'; 
// Ar šo requiru aiziet uz failu Functions, kuram jābūt Global un kurā stāv visi vajadzīgie "required once"

// $page = isset($_GET['page']) ? 'home'; paskaidrojums
$page = $_GET['page'] ?? 'home';

switch($page) {
    case 'home':
        echo (new HomeController)->index();
        break;

    case 'posts':
        echo (new PostsController)->index();
        break;

    case 'post':
        echo (new PostsController)->viewPost();
        break;  
    
    case 'articles':
        echo (new ArticlesController)->index();
        break;

    case 'article':
        echo (new ArticlesController)->viewArticle();
        break;    

    case 'aboutUs':
        echo (new InfoController)->aboutUs();
        break;

    case 'contactUs':
        echo (new InfoController)->contactUs();
        break;
      
    case 'login':
        echo (new UsersController)->login();
        break;    

    case 'registration':
        echo (new UsersController)->registration();
        break;  
        
    case 'superSecret':
        echo (new SuperSecretController)->index();
        break;    

    default:
        echo (new ErrorsController)->error404();
}

// echo (new HomeController)->index();
// echo (new PostsController)->index();