var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
// var cleanCSS = require('gulp-clean-css');
// var autoprefixer = require('gulp-autoprefixer');
// var htmlreplace = require('gulp-html-replace');
// var obfuscate = require('gulp-obfuscate');
// var rename = require('gulp-rename');
var sass = require('gulp-sass');
// var js_obfuscator = require('gulp-js-obfuscator');
var javascriptObfuscator = require('gulp-javascript-obfuscator');

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
 
gulp.task('default', function() {

    gulp.src([    'libs/dependencies/camera_v1.05.js',
                  'libs/dependencies/fontfaceobserver.js',
    'libs/utils/Utils.js',
    'libs/utils/shader.js',



    'libs/mainCanvas/mouseController.js',
    'libs/mainCanvas/mainCanvas.js',
    'libs/mainCanvas/backgroundRenderer.js',
    'libs/mainCanvas/pointsRenderer.js',
    'libs/mainCanvas/linesRenderer.js',
    'libs/mainCanvas/postProcessRenderer.js',
   


    'libs/mainCanvas/Shaders/globalVars.js',
    'libs/mainCanvas/Shaders/common.js',
    'libs/mainCanvas/Shaders/postProcBlit.js',
    'libs/mainCanvas/Shaders/offpoints.js',
    'libs/mainCanvas/Shaders/background.js',
    'libs/mainCanvas/Shaders/pointsTF.js',
    'libs/mainCanvas/Shaders/points.js',
    'libs/mainCanvas/Shaders/linesTF.js',
    'libs/mainCanvas/Shaders/lines.js',
    'libs/mainCanvas/Shaders/blit.js',



    'libs/mainCanvas/icosahedronGeometry.js',

    'libs/footer.js',

    'libs/music.js',

    'libs/feedback.js',

    'libs/async.js',    

    'libs/typography.js',    

    'libs/menu.js',    

    'libs/main.js',
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('build.js'))
        .pipe(javascriptObfuscator())
        .pipe(gulp.dest('dist'));



    gulp.src('./css/main.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist'));
});


gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));

  // // takes only main.css from the ./css folder, otherwise we copy-bug inside the final style.css
  // gulp.src('./css/main.css')
  //   .pipe(concat('style.css'))
  //   .pipe(gulp.dest('dist'));
});
 
gulp.task('watcher', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});