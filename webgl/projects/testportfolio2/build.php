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






    <link rel="stylesheet" href='dist/style.css'/>
    <!--<link href="https://fonts.googleapis.com/css?family=Work+Sans:800" rel="stylesheet"> -->
    <!-- font-family: 'Work Sans', sans-serif; -->

    <style>
        * {
            margin: 0;
        }
    </style>
</head>
<body>

    <?php require $siteRoot."/core/svgFunctions.php"; ?>
    <?php /*require $siteRoot."/core/HeadCarousel.php";*/ ?>
    

    <?php require $siteRoot."/core/Masthead.php"; ?>
    <?php require $siteRoot."/core/Footer.php"; ?>
    

    <!--<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('test.png'); background-size: 1345px 100%; opacity: 0.1;"></div>-->
    <!--<div style="width: 500px; height: 1500px; position: relative;"></div>-->

    <?php require $siteRoot."/core/svgs.php"; ?>

</body>
</html>
