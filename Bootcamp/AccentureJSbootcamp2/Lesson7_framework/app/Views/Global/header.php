<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


    <title>Document</title>
</head>
<body>
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="?">Home</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="?page=aboutUs">About us</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="?page=contactUs">Contact Us</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="?page=articles">Articles</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="?page=posts">Posts</a>
    </li>

    <?php if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn']) { ?>
      <li class="nav-item">
        <a class="nav-link" href="?page=log-out">Log out</a>
      </li>

    <?php } else { ?>
      <li class="nav-item">
        <a class="nav-link" href="?page=login">Log in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="?page=registration">Registration</a>
      </li>

    <?php } ?>
    
  </ul>
 
