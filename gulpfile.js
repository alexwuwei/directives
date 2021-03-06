'use strict';

const gulp = require('gulp');
const lint = require('gulp-eslint');
const webpack = require('gulp-webpack');
const del = require('del');

let paths = ['*.js', 'public/js/*.js', 'public/index.html'];

gulp.task('eslint', () => {
  gulp.src(paths)
  .pipe(lint())
  .pipe(lint.format());
});


gulp.task('del-build', () => {
  return del([
    __dirname + '/public/build/**', __dirname + '!/public/build'
  ])
  .then(paths => console.log('Deleted files and folders:\n', paths.join('\n')));
});

gulp.task('copy-html', () => {
  gulp.src(__dirname + '/public/index.html')
  .pipe(gulp.dest(__dirname + '/public/build'));
});

gulp.task('copy-css', () => {
  gulp.src(__dirname + '/public/css/*.css')
  .pipe(gulp.dest(__dirname + '/public/build'));
});

gulp.task('webpack', () => {
  return gulp.src(__dirname + '/public/js/app.js')
  .pipe(webpack({
    watch: true,
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(__dirname + '/public/build'));
});

gulp.task('watch', () => {
  gulp.watch(paths);
});

gulp.task('default', ['eslint', 'del-build', 'webpack', 'copy-html', 'copy-css']);
