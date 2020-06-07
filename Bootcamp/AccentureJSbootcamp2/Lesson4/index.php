<?php
require_once '../functions.php';
// dd([1, 2, 3]); ///par cik funkciju lapā dd ir rakstīts ar echo '<pre>';, tad funkcijas rezultats ir smuki sakārtots

// // tālākos inklūdus nerāda, jo funkcijās šī dd f-ja ir ar DIE
// dd(123);

dd($_SERVER);

require_once '../parts/header.php';
require_once '../parts/content.php';
require_once '../parts/footer.php';