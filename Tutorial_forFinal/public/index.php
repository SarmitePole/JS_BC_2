<?php

require_once '../app/functions.php'; 
// Ar šo requiru aiziet uz failu Functions, kuram jābūt Global un kurā stāv visi vajadzīgie "required once"

// $page = isset($_GET['page']) ? 'home'; paskaidrojums
$page = $_GET['page'] ?? 'home';

switch($page) {
    case 'home':
        echo (new HomeController)->index();
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

    case 'registration':
        echo (new UsersController)->registration();
        break;  

    case 'log-out':
        echo (new UsersController)->logOut();
        break;

    case 'users':
        echo (new UsersController)->index();
        break;
        

    default:
        echo (new ErrorsController)->error404();
}

// echo (new HomeController)->index();
// echo (new PostsController)->index();