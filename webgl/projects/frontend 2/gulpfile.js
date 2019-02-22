// including plugins
var gulp = require('gulp');
var concat = require("gulp-concat");


// task
gulp.task('default', function () {

    return gulp.src([
        "libs/dependencies/three.js",
        "libs/dependencies/anime.js",
        "libs/dependencies/dat.gui.js",
        "libs/dependencies/OBJLoader.js",
        "libs/dependencies/OrbitControls.js",

        "libs/shaders/composite.js",
        "libs/shaders/fxaa.js",
        "libs/shaders/mesh.js",
        "libs/shaders/planes.js",

        "libs/fx.js",
        "libs/icons.js",
        "libs/main.js",
        "libs/musicCanvas.js",
        "libs/s4chart.js",
        "libs/s5clock.js",
        "libs/sectionAnimations.js",
        "libs/utils.js",
    ]) // path to your files
    .pipe(concat('bundle.js'))  // concat and name it "dependencies.js"
    .pipe(gulp.dest('dist'));
});