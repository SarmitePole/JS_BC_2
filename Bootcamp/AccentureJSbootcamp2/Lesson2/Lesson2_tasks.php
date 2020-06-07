<?php

$task = [
    'title' => 'Buy milk',
    'isCompleted' => false,

]

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
<ol>
    <li>
        <?php if ($task['isCompleted'] == true) { ?>
            <del>
        <?php } ?>
        <?php echo $task['title']; ?>
        <?php if ($task['isCompleted'] == true) { ?>
            </del>
        <?php } ?>
    </li>
</ol>


</body>
</html>