<?php
require_once '../functions.php';
// dd([1, 2, 3]); ///par cik funkciju lapā dd ir rakstīts ar echo '<pre>';, tad funkcijas rezultats ir smuki sakārtots

// // tālākos inklūdus nerāda, jo funkcijās šī dd f-ja ir ar DIE
// dd(123);



require_once '../parts/header.php';
$page = 'home';
if (isset($_GET['page'])) {
    $page = $_GET['page'];
}

switch ($page) {
    case ('home'):
        require_once '../parts/content.php';
        break;
    case ('about'):
        require_once '../Pages/about.php';
        break;
    case ('contacts'):
        require_once '../Pages/contacts.php';
        break;
    case ('login'):
        require_once '../Pages/login.php';
        break;
    default:
        require_once '../Pages/404.php';
         
}



require_once '../parts/content.php';
require_once '../parts/footer.php';

