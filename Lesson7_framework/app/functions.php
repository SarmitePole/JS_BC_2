<?php

session_start();

require_once '../app/Views/BaseView.php';
require_once '../app/Controllers/HomeController.php';
require_once '../app/Controllers/InfoController.php';
require_once '../app/Controllers/PostsController.php';
require_once '../app/Controllers/ArticlesController.php';
require_once '../app/Controllers/UsersController.php';
require_once '../app/Controllers/ErrorsController.php';
require_once '../app/Controllers/SuperSecretController.php';
require_once '../app/Repositories/PostsRepository.php';
require_once '../app/Repositories/ArticlesRepository.php';
require_once '../app/Repositories/UsersRepository.php';
require_once '../app/Repositories/DB.php';
require_once '../app/Models/Post.php';
require_once '../app/Models/Article.php';
require_once '../app/Models/User.php';

function dd($data)
{
    echo '<pre>';
    var_dump($data);
    die;
}

// skolas variants-----------------------------------------------
// $host = '127.0.0.1';
// $db = 'bootcamp';
// $user = 'root';
// $pass = '';
// $charset = 'utf8';

// šie ir mainīgie, kuri ir pieejas dati datu bāzei
// host - tas ir datubāzes serveris. Jo reizem datu bāze var stāvet citur
// db - datubāzes nosaukum
// lietotājvards un parole. Šeit tie ir šitādi
// charset - nosaka kādā valodā runāsim
// šos mainīgos ieliek HOP -LŪDZu skatīt nākošo koda rindu

// skolas variants-----------------------------------------------
// $dsn = "mysql:host=$host;dbname=$db;charset=$charset";

// try {
//     DB::$connection = new PDO($dsn, $user, $pass);
//     DB::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// } catch (PDOException $e) {
//     throw new PDOException($e->getMessage(), (int) $e->getCode());
// }

//šis TRY-CATCH ir domāts, ja netiek lapā iekšā, tad visu aizmet atpakaļ uz user+pass vietu. Šis domāts veikmīgai runāšanai ar Querijeim. Caur PDO notiek "saruna" ar  datubāzi


// $query = $pdo->query("SELECT * FROM posts");
// // dd($query); šis tikai parādīs, ka ir tāds masīvs
// // dd($query->fetch()); šis parāda tikai pirmo rindu...tobiš dabūjam tikai struktūru
// // dd($query->fetchAll()); šitā var dabūt visus, bet, ja datu bāzē ir miljons ierakstu, tad varēs mierīgi pakārties

// while ($row = $query->fetch()) {
//     echo $row['id'] . ' -*-*-*- ' . $row['title'] . '<br>';
// };




// Lieliskā Sarmīte tikko uztaisīja  - darbam no Workbenča------------

$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="password";
$dbname="bootcamp";

$dsn = "mysql:host={$host};port={$port};dbname={$dbname}";

try {
    DB::$connection = new PDO($dsn, $user, $password);
    DB::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int) $e->getCode());
}
