<?php 
error_reporting(E_ALL); 
$siteRoot = __DIR__;
?>


<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>




    <script src='libs/dependencies/gl-matrix-min.js'></script>
    <script src='dist/build.js'></script>








    <link rel="stylesheet" href='css/main.css'/>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:800" rel="stylesheet"> 
    <!-- font-family: 'Work Sans', sans-serif; -->

    <style>
        * {
            margin: 0;
        }
    </style>
</head>
<body>

    <?php /*require $siteRoot."/core/HeadCarousel.php";*/ ?>
    
    <canvas id="mainCanvas"> </canvas>


</body>
</html>
