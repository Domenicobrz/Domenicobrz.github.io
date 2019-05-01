<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8" />
    <meta name="author" content="3D Viewer" />
    <title>Drapr viewer page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
   
   
    <link href="dist/main.css" rel="stylesheet" type="text/css" />
    <!-- <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:700" rel="stylesheet">  -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700" rel="stylesheet">  -->
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:600,800" rel="stylesheet">
    <!-- <link href="https://fonts.googleapis.com/css?family=Noto+Serif+SC:600" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css?family=Fahkwang:500,600" rel="stylesheet">



    <script src="dist/dependencies.js"></script>

    <script>
    <?php 
        $php_shirt_roughness        = 'undefined';
        $php_shirt_metallic         = 'undefined';
        $php_shirt_reflectivity     = 'undefined';
        $php_shirt_envmap_intensity = 'undefined';
        $php_mannequin_color        = 'undefined';
        $php_envmapJSON             = 'undefined';
        $php_viewer_data_json       = 'undefined';
        $php_bodyshape              = 'undefined';
        $php_height                 = 'undefined'; // in inches
        $php_weight                 = 'undefined'; 
        $php_pantsType              = 'undefined';
        $php_skinTexture            = 'undefined';
        $php_view_type              = 'undefined';
        $php_sceneparams            = 'undefined';
        $php_associate_id           = 'undefined';
        $php_customer_id            = 'undefined';
        $php_viewer_state           = 'undefined';
        $php_envmap_blur            = 0.5;
        $php_envmap_brightness      = 1.05;
        $php_viewer_id              = 22;
        $php_hide_skin_texture      = 'true';
        $php_show_controls          = 'false';
        $php_show_stats_widget      = 'false';
        $php_antialiasing           = 'true';
        $php_zoom_level             = 0.1;
        $php_enable_zoom_widget     = 'false';
        $php_skip_intro             = 'false';
        $php_look_article_id        = 'undefined';

        if (isset($_REQUEST['shirt_roughness'])) {
            $php_shirt_roughness = $_REQUEST['shirt_roughness'];
        }
        if (isset($_REQUEST['shirt_metallic'])) {
            $php_shirt_metallic = $_REQUEST['shirt_metallic'];
        }
        if (isset($_REQUEST['shirt_reflectivity'])) {
            $php_shirt_reflectivity = $_REQUEST['shirt_reflectivity'];
        }
        if (isset($_REQUEST['shirt_envmap_intensity'])) {
            $php_shirt_envmap_intensity = $_REQUEST['shirt_envmap_intensity'];
        }
        if (isset($_REQUEST['show_controls'])) {
            $php_show_controls = (string)$_REQUEST['show_controls'];
        }
        if (isset($_REQUEST['show_stats_widget'])) {
            $php_show_stats_widget = (string)$_REQUEST['show_stats_widget'];
        }
        if (isset($_REQUEST['zoom_level'])) {
            $php_zoom_level = $_REQUEST['zoom_level'];
        }
        if (isset($_REQUEST['antialiasing'])) {
            $php_antialiasing = (string)$_REQUEST['antialiasing'];
        }
        if (isset($_REQUEST['mannequin_color'])) {
            $php_mannequin_color = (string)$_REQUEST['mannequin_color'];
        }
        if (isset($_REQUEST['envmapJSON'])) {
            $php_envmapJSON = '"'.(string)$_REQUEST['envmapJSON'].'"';
        }
        if (isset($_REQUEST['viewer_data_json'])) {
            $php_viewer_data_json = '"'.(string)$_REQUEST['viewer_data_json'].'"';
        }
        if (isset($_REQUEST['enable_zoom_widget'])) {
            $php_enable_zoom_widget = (string)$_REQUEST['enable_zoom_widget'];
        }
        if (isset($_REQUEST['bodyshape'])) {
            $php_bodyshape = (string)$_REQUEST['bodyshape'];
        }
        if (isset($_REQUEST['height'])) {
            $php_height = (string)$_REQUEST['height'];
        }
        if (isset($_REQUEST['pantsType'])) {
            $php_pantsType = (string)$_REQUEST['pantsType'];
        }
        if (isset($_REQUEST['skinTexture'])) {
            $php_skinTexture = (string)$_REQUEST['skinTexture'];
        }
        if (isset($_REQUEST['envmap_blur'])) {
            $php_envmap_blur = $_REQUEST['envmap_blur'];
        }
        if (isset($_REQUEST['envmap_brightness'])) {
            $php_envmap_brightness = $_REQUEST['envmap_brightness'];
        }
        if (isset($_REQUEST['weight'])) {
            $php_weight = $_REQUEST['weight'];
        }
        if (isset($_REQUEST['viewer_id'])) {
            $php_viewer_id = $_REQUEST['viewer_id'];
        }
        if (isset($_REQUEST['view_type'])) {
            $php_view_type = $_REQUEST['view_type'];
        }
        if (isset($_REQUEST['sceneparams'])) {
            $php_sceneparams = $_REQUEST['sceneparams'];
        }
        if (isset($_REQUEST['associate_id'])) {
            $php_associate_id = $_REQUEST['associate_id'];
        }
        if (isset($_REQUEST['customer_id'])) {
            $php_customer_id = $_REQUEST['customer_id'];
        }
        if (isset($_REQUEST['hide_skin_texture'])) {
            $php_hide_skin_texture = $_REQUEST['hide_skin_texture'];
        }
        if (isset($_REQUEST['skip_intro'])) {
            $php_skip_intro = $_REQUEST['skip_intro'];
        }
        if (isset($_REQUEST['viewer_state'])) {
            $php_viewer_state = $_REQUEST['viewer_state'];
        }
		if (isset($_REQUEST['size'])) {
            $php_size = $_REQUEST['size'];
        }
		if (isset($_REQUEST['color'])) {
            $php_color = $_REQUEST['color'];
        }
		if (isset($_REQUEST['gender'])) {
            $php_gender = strtolower($_REQUEST['gender']);
        }
		if (isset($_REQUEST['look_article_id'])) {
            $php_look_article_id = $_REQUEST['look_article_id'];
        }
		
		if($php_bodyshape == "undefined")
		{
			if($php_gender == "male")
				$php_bodyshape = "mrhomboid";
			else
				$php_bodyshape = "hourglass";
		}
    ?>
    
    // as soon as you add any of the older viewer's .php variables here,
    // be sure to switch their .php variable convention from camelCase to underscore_case
    var phpData = {
        viewerDataJSONpath:  <?php echo $php_viewer_data_json ?>,
        antiAliasing:        <?php echo $php_antialiasing ?>,
        zoomLevel:           0.5,
        showStatsWidget:     <?php echo $php_show_stats_widget ?>,
        envmapBlur:          <?php echo $php_envmap_blur ?>,
        envmapBrightness:    <?php echo $php_envmap_brightness ?>,

        viewerId:            '<?php echo $php_viewer_id ?>',
        customerId:          '<?php echo $php_customer_id ?>',
        associateId:         '<?php echo $php_associate_id ?>',
        viewType:            "<?php echo $php_view_type ?>",
        skipIntro:           <?php echo $php_skip_intro ?>,
		
		size:            	 "<?php echo $php_size ?>",
		gender:            	 "<?php echo $php_gender ?>",
		color:            	 "<?php echo $php_color ?>",
        look_article_id:     <?php echo $php_look_article_id ?>,

        viewerState:         '<?php echo $php_viewer_state ?>'
    }
    </script>

    <script src="dist/bundle.js"></script>




</head>
<body>

    <div class="view-container">
        
    </div>


    <?php require("php/icons.php"); ?>

</body>
</html>
