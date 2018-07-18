var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
// var cleanCSS = require('gulp-clean-css');
// var autoprefixer = require('gulp-autoprefixer');
// var htmlreplace = require('gulp-html-replace');
// var obfuscate = require('gulp-obfuscate');
// var rename = require('gulp-rename');
var js_obfuscator = require('gulp-js-obfuscator');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
 
gulp.task('default', function() {

    gulp.src([ //'gl-matrix-min.js', 
               'shader.js',
               'utils/texture.js',
               'utils.js',
               'quadtree.js',
               'nodes.js',
               'programs/pointProgram.js',
               'programs/lineProgram.js',
               'programs/backgroundProgram.js',
               'programs/meshProgram.js',
             'shaders/common.js',
             'shaders/backgroundv.js',
             'shaders/backgroundf.js',
             'shaders/meshpointf.js',
             'shaders/meshpointv.js',
             'shaders/pointv.js',
             'shaders/pointf.js',
             'shaders/linev.js',
             'shaders/linef.js',
             'shaders/meshv.js',
             'shaders/meshf.js',

             'meshes/headset/headset.js',
             'meshes/card/card.js',
             'meshes/dollar/dollar.js',
             'meshes/euro/euro.js',
             'meshes/note/note.js',
             'meshes/play/play.js',
             'meshes/rocket.js',
             'meshes/twitter.js',
             'meshes/glasses.js',
             'meshes/plane.js',
             'meshes/tree.js',
             'meshes/note.js',

             'mouseController.js',
             'guiCommands.js',
             'video.js',
             'main.js',
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('build.js'))
        .pipe(minify({
            ext:{
               src:'.js',
               min:'.min.js'
           }
        }))
        // .pipe(js_obfuscator())
        // .pipe(obfuscate())
        .pipe(gulp.dest('dist'));

    
    // gulp.src('tobuild.html')
    //     .pipe(htmlreplace({
    //         'js':  'dist/build.min.js'
    //     }))
    //     .pipe(rename('index.html'))
    //     .pipe(gulp.dest('./'));
});