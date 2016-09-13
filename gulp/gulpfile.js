var gulp = require("gulp");
var jade = require("gulp-jade");
var data = require("gulp-data");
var typescript = require("gulp-typescript");
var prettify = require('gulp-prettify');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var casperJs = require('gulp-casperjs');
var postcss = require("gulp-postcss");
var cssnext = require("postcss-cssnext");

//jade
gulp.task("jade", function(){
  gulp.src([
    "../source/jade/**/*.jade",
    "!../source/jade/include/_*.jade"
  ])
    .pipe(plumber())
    .pipe(data(function(file) {
      return require('../source/json/common.json');
    }))
    .pipe(jade())
    .pipe(prettify())
    .pipe(gulp.dest("../"));
});

//css
gulp.task("css", function() {
  var plugin = [
    require("postcss-nested"),
    require("postcss-import"),
    require("postcss-mixins"),
    cssnext({browsers: ['last 3 version']})
  ];
  gulp.src([
    "../source/css/**/*.css",
    "!../source/css/**/_*.css"
  ])
    .pipe(plumber())
    .pipe(postcss(plugin))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("../css"))
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

//test
gulp.task('test', function () {
  gulp.src('../test/sample_test_02.js')
    .pipe(casperJs());
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
