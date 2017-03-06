var gulp = require('gulp');
var tsc  = require("gulp-typescript");
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var nodemon = require('gulp-nodemon');
var tsProject = tsc.createProject("tsconfig.json");

gulp.task('clean', function(cb) {
  return del('dist', cb);    
});

gulp.task('build', ['clean'], function () {
  return gulp.src('src/**/*.ts')
    .pipe(tsProject({
      noImplicitAny: true,
      out: 'output.js'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);

gulp.task('watch', ['scripts'], function() {
  gulp.watch('src/*.ts', ['clean', 'build', 'start']);
});

gulp.task('start', ['clean', 'build'], function () {
  nodemon({
    script: 'dist/server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  });
})