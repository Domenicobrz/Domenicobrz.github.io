<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8" />
    <meta name="author" content="3D Viewer" />
    <title>Drapr viewer page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
   







	<script>
	window.addEventListener("load", init);

	function init() {


		let tutorialVideo = document.createElement("video");

		let onCanPlay = function() {
		
		    tutorialVideo.play();
		

		    tutorialVideo.removeEventListener("canplay", onCanPlay);
		};

		tutorialVideo.addEventListener("canplay", onCanPlay);
		tutorialVideo.src = "assets/videos/tutorial.mp4";
		tutorialVideo.autoplay = true;
		tutorialVideo.muted = true;
		tutorialVideo.loop = true;
		tutorialVideo.playsinline = true;
		tutorialVideo.setAttribute("playsinline", "");

		document.body.appendChild(tutorialVideo);
	}

	</script>







	<style>
	
	html, body {
		margin: 0;
		width: 100%;
		height: 100%;
	}

	video {
		position: absolute;
		top: 50%;
		left: 50%;

		width: 70%;
		height: auto;
		transform: translate(-50%, -50%);
	}
	
	</style>


</head>
<body>



		<!-- <video src="assets/videos/tutorial.mp4" autoplay muted loop playsinline type="video/mp4"></video> -->



</body>
</html>
