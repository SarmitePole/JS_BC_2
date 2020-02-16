<?php

// home
// posts
// info
// - about us
// - contact us
// users
// - login
// - registration
// super-secret

require_once '../app/Views/BaseView.php';
require_once '../app/Controllers/HomeController.php';
require_once '../app/Controllers/InfoController.php';
require_once '../app/Controllers/PostsController.php';
require_once '../app/Controllers/UsersController.php';
require_once '../app/Controllers/ErrorsController.php';
require_once '../app/Controllers/SuperSecretController.php';
require_once '../app/Repositories/PostsRepository.php';
require_once '../app/Models/Post.php';


// $page = isset($_GET['page']) ? 'home'; paskaidrojums
$page = $_GET['page'] ?? 'home';

switch($page) {
    case 'home':
        echo (new HomeController)->index();
        break;

    case 'posts':
        echo (new PostsController)->index();
        break;

    case 'aboutUs':
        echo (new InfoController)->aboutUs();
        break;

    case 'contactUs':
        echo (new InfoController)->contactUs();
        break;
      
    case 'posts':
        echo (new PostsController)->index();
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

function dd($data)
{
    echo '<pre>';
    var_dump($data);
    die;
}

// echo (new HomeController)->index();
// echo (new PostsController)->index();