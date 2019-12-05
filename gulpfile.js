'use strict';
var gulp = require('gulp'),
    gp   = require('gulp-load-plugins')();

// pug
gulp.task('pug',function(){
  return gulp.src('dev/pug/*.pug')
    .pipe(gp.pug({
      pretty: true,
      //doctype: 'html'
    }))
    .pipe(gulp.dest('public'));
});

//scss
gulp.task('scss',function(){
  return gulp.src('dev/scss/style.scss')
    .pipe(gp.sourcemaps.init())
    .pipe(gp.sass({}))
    .pipe(gp.autoprefixer({}))
    .on("error", gp.notify.onError({
      message: "Error: <%= error.message %>",
      title: "Error222 running something"
    }))
    // .pipe(gp.csso({
    //   restructure: true
    // }))
    .pipe(gp.sourcemaps.write())
    .pipe(gulp.dest('public'));
});

//watch
gulp.task('watch',function(){
  gulp.watch('dev/pug/**/*.pug',gulp.series('pug'))
  gulp.watch('dev/scss/**/*.scss',gulp.series('scss'))
});