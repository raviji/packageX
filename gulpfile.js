var gulp = require('gulp');
var gutil = require('gulp-util');
var copy = require('gulp-copy');
var bower = require('gulp-bower');
var sourcemaps = require('gulp-sourcemaps');
var install = require("gulp-install");
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var unzip = require('gulp-unzip');
/*"scripts": {
    "init": "npm install",
    "install": "bower install"
  },*/

var gulp_config = {
    // Source files for bower_includes
    // JS Includes
    JsIncludes: [
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js",
        "bower_components/angular/angular.min.js"
    ],
    CssInclude: [
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/mdi/css/materialdesignicons.min.css"
    ],
    FontInclude: [
        "bower_components/font-awesome/fonts/fontawesome-webfont.eot",
        "bower_components/font-awesome/fonts/fontawesome-webfont.svg",
        "bower_components/font-awesome/fonts/fontawesome-webfont.ttf",
        "bower_components/font-awesome/fonts/fontawesome-webfont.woff",
        "bower_components/font-awesome/fonts/fontawesome-webfont.woff2",
        "bower_components/font-awesome/fonts/fontawesome-webfont.otf",
        "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
        "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
        "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
        "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
        "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
        "bower_components/mdi/fonts/materialdesignicons-webfont.eot",
        "bower_components/mdi/fonts/materialdesignicons-webfont.svg",
        "bower_components/mdi/fonts/materialdesignicons-webfont.ttf",
        "bower_components/mdi/fonts/materialdesignicons-webfont.woff",
        "bower_components/mdi/fonts/materialdesignicons-webfont.woff2"
    ],
    // Dest Folder Path for bower_includes
    //bowerJsonOut: 'app/dist/js/html',
    bowerScriptsOut: 'app/bower_includes/scripts',
    bowerStylesOut: 'app/bower_includes/styles',
    bowerStylesImagesOut: 'app/bower_includes/styles/images',
    bowerFontsOut: 'app/bower_includes/fonts',
    bowerImagesOut: 'app/bower_includes/images',
    buildFolder: 'build',
    deployFolder: '/Applications/MAMP/htdocs/gp/build'
}

//Copying Js from Component to Includes
gulp.task('copyJs', function() {
    return gulp.src(gulp_config.JsIncludes).pipe(gulp.dest(gulp_config.bowerScriptsOut));
});
//Copying CSS from Component to Includes
gulp.task('copyCss', ['copyJs'], function() {
    return gulp.src(gulp_config.CssInclude).pipe(gulp.dest(gulp_config.bowerStylesOut));
});
//Copying CSS from Component to Includes
gulp.task('copyFonts', ['copyCss'], function() {
    return gulp.src(gulp_config.FontInclude).pipe(gulp.dest(gulp_config.bowerFontsOut));
});

//make deployFolder
gulp.task('zipBuild', ['copyFonts'], function() {
    return gulp.src(['app/**/*'])
        .pipe(zip('app.zip'))
        .pipe(gulp.dest(gulp_config.buildFolder));
});

gulp.task('cleanDeployFolder', ['zipBuild'], function(cb) {
    return gulp.src(gulp_config.deployFolder + '/*', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('deployBuild', ['cleanDeployFolder'], function() {
    return gulp
        .src(gulp_config.buildFolder + "/app.zip")
        .pipe(unzip())
        .pipe(gulp.dest(gulp_config.deployFolder));
});

//Making task as default
gulp.task('default', ['copyFonts'], function() {

});
gulp.task('deploy', ['deployBuild'], function() {

});