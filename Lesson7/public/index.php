<?php

// home
// info
// - about us
// - contacts
// login
// registration
// super-secret

require_once '../app/Views/BaseView.php';
require_once '../app/Controllers/HomeController.php';
require_once '../app/Controllers/AboutUsController.php';
require_once '../app/Controllers/ContactUsController.php';
require_once '../app/Controllers/PostsController.php';
require_once '../app/Controllers/LoginController.php';
require_once '../app/Controllers/RegistrationController.php';

// $page = isset($_GET['page']) ? 'home'; paskaidrojums
$page = $_GET['page'] ?? 'home';

switch($page) {
    case 'home':
        echo (new HomeController)->index();
        break;

    case 'aboutUs':
        echo (new AboutUsController)->index();
        break;

    case 'contactUs':
        echo (new ContactUsController)->index();
        break;
      
    case 'posts':
        echo (new PostsController)->index();
        break;

    case 'login':
        echo (new LoginController)->index();
        break;    

    case 'registration':
        echo (new RegistrationController)->index();
        break;        

    defoult:
        echo (new HomeController)->index();
}

// echo (new HomeController)->index();
// echo (new PostsController)->index();