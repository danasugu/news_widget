const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const sass = require('gulp-sass'); // not working in gulp 4 //
const browserSync = require('browser-sync').create();
const del = require('del');

//compile scss into css

async function style() {
  //1. where is my scss file
  return await gulp
    .src('./scss/**/*.scss')
    //2. pass file through sass compiler
    .pipe(sass().on('error', sass.logError))
    //3. where do i save the compiled css?
    .pipe(gulp.dest('./css'))
    //4. steam changes to all browser
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
