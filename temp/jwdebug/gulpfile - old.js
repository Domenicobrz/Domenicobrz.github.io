// including plugins
var gulp = require('gulp');
var concat = require("gulp-concat");
var javascriptObfuscator = require('gulp-javascript-obfuscator');


// task
gulp.task('concat', function () {

    gulp.src([
        
    "libs/dependencies/webgl/three.js",
    "libs/dependencies/webgl/MODIFIED-OrbitControls.js",
    "libs/dependencies/webgl/stats.min.js",

    "libs/dependencies/webgl/new-ctm-loader/lzma.js",
    "libs/dependencies/webgl/new-ctm-loader/MODIFIED-ctm.js",
    "libs/dependencies/webgl/new-ctm-loader/MODIFIED-CTMLoader.js",

    "libs/dependencies/webgl/loaders/EXRLoader.js",
    "libs/dependencies/webgl/loaders/EquirectangularToCubeGenerator.js",
    "libs/dependencies/webgl/loaders/LoaderSupport.js",
    "libs/dependencies/webgl/loaders/OBJLoader2.js",

    "libs/dependencies/webgl/pmrem/PMREMGenerator.js",
    "libs/dependencies/webgl/pmrem/PMREMCubeUVPacker.js",

    "libs/dependencies/anime.js",
    "libs/dependencies/dat.gui.min.js",
    "libs/dependencies/mobile-detect.js",
    "libs/dependencies/rSlider.js",
    "libs/dependencies/iNoBounce.js",

    ]) // path to your files
    .pipe(concat('dependencies.js'))  // concat and name it "dependencies.js"
    .pipe(gulp.dest('dist'));


    gulp.src([
        
        "libs/components/general/component.js",
        "libs/components/general/multiPanel.js",
        "libs/components/general/windowHeader.js",
        "libs/components/general/garmentInfoHeader.js",
        "libs/components/general/sizeSelector.js",
        "libs/components/general/colorSelector.js",
        "libs/components/general/text.js",
        "libs/components/general/gridPhotos.js",
        "libs/components/general/separator.js",
        "libs/components/general/buttonsGrid.js",
        "libs/components/general/fixedButton.js",
        "libs/components/general/dropdown.js",
    
    
        "libs/modals/sideModal.js",
        "libs/modals/menuModal.js",
        "libs/modals/loginModal.js",
        "libs/modals/resetPasswordModal.js",
        "libs/modals/downloadAppModal.js",
        "libs/modals/customerModal.js",
        "libs/modals/smallModal.js",
    
        "libs/windows/mainWindow.js",
    
        "libs/utils.js",
        "libs/deviceInfo.js",
        "libs/envmapFilters.js",
        "libs/webglViewer.js",
        "libs/GarmentLoader.js",
        "libs/clock.js",
    
        "libs/integrated/JSONAPIController.js",
        "libs/integrated/assetsLoader.js",
        "libs/integrated/localStorageManager.js",
    
        "libs/main.js",

    ]) // path to your files
    .pipe(concat('bundle.js'))  // concat and name it "bundle.js"
    .pipe(javascriptObfuscator())
    .pipe(gulp.dest('dist'));
});