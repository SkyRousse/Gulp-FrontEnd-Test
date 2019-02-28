//gulpfile.js

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

//style paths
var sassFiles = 'assets/styles/sass/**/*.scss',
    cssDest = 'assets/styles/css/';

livereload({ start: true })

gulp.task('styles', function() {
  gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(sassFiles,['styles']);
});
