<?php

session_start();

require_once '../app/Views/BaseView.php';

require_once '../app/Controllers/HomeController.php';
require_once '../app/Controllers/InfoController.php';
require_once '../app/Controllers/ArticlesController.php';
require_once '../app/Controllers/ChatController.php';
require_once '../app/Controllers/UsersController.php';
require_once '../app/Controllers/ErrorsController.php';

require_once '../app/Repositories/ArticlesRepository.php';
require_once '../app/Repositories/CardsRepository.php';
require_once '../app/Repositories/CarouselsRepository.php';
require_once '../app/Repositories/DB.php';
require_once '../app/Repositories/UsersRepository.php';

require_once '../app/Models/Article.php';
require_once '../app/Models/Card.php';
require_once '../app/Models/Carousel.php';
require_once '../app/Models/User.php';

function dd($data)
{
    echo '<pre>';
    var_dump($data);
    die;
}


$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="password";
$dbname="js_bc_2";

$dsn = "mysql:host={$host};port={$port};dbname={$dbname}";

try {
    DB::$connection = new PDO($dsn, $user, $password);
    DB::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int) $e->getCode());
}
