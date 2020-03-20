<?php


// home
// posts
// info
// - about us
// - contacts
// login
// registration
// super-sercret

require_once '../app/functions.php';



$page = $_GET['page'] ?? 'home';

switch ($page) {
    case 'home':
        echo (new HomeController)->index();
        break;
    case 'articles':
        echo (new ArticlesController)->index();
        break;
    case 'article':
        echo (new ArticlesController)->viewArticle();
        break;
    case 'about-us':
        echo (new InfoController)->aboutUs();
        break;
    case 'contact-us':
        echo (new InfoController)->contactUs();
        break;
    case 'login':
        echo (new UsersController)->login();
        break;
    case 'registration':
        echo (new UsersController)->register();
        break;
    case 'super-secret':
        echo (new SuperSecretController)->index();
        break;

    default:
        echo (new ErrorsController)->error404();
}


