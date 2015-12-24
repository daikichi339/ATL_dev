var gulp = require("gulp");
var jade = require("gulp-jade");
var data = require("gulp-data");
var less = require("gulp-less");
var typescript = require("gulp-typescript");
var prettify = require('gulp-prettify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//jade
gulp.task("jade", function(){
  gulp.src([
    "../source/jade/**/*.jade",
    "!../source/jade/include/*.jade"
  ])
    .pipe(plumber())
    .pipe(data(function(file) {
      return require('../source/json/common.json');
    }))
    .pipe(jade())
    .pipe(prettify())
    .pipe(gulp.dest("../"));
});

//less
gulp.task("less", function() {
  gulp.src([
    "../source/less/**/*.less",
    "!../source/less/**/_*.less"
  ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer('last 3 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("../css"));
});

//typescript
gulp.task("typescript", function(){
  gulp.src([
    "../source/typescript/**/*.ts",
    "!../source/typescript/**/_*.ts"
  ])
    .pipe(sourcemaps.init())
    .pipe(typescript({
      target: 'ES5',
      sortOutput: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("../js"));
});

//watch & browserSync
gulp.task("default", function() {
  browserSync.init(null, {
    port: 3000,
    server: {
      baseDir: "../",
      //proxy: "192.168.33.10"
    }
  });
  gulp.watch("../source/**/*.ts",["typescript"]);
  gulp.watch("../source/**/*.jade",["jade"]);
  gulp.watch("../source/**/*.less",["less"]);
  gulp.watch("../**/*.js", reload);
  gulp.watch("../**/*.css", reload);
  gulp.watch("../**/*.html", reload);
});