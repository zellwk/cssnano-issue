const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const cssnano = require('gulp-cssnano')

gulp.task('default', () => {
  return gulp.src('./scss/styles.scss')
  .pipe(sass({
    includePaths: ['./node_modules']
  }))
  .pipe(autoprefixer({
      browsers: ['last 20 versions']
  }))
  .pipe(gulp.dest('./css'))
})


gulp.task('min', () => {
  return gulp.src('./scss/styles.scss')
  .pipe(sass({
    includePaths: ['./node_modules']
  }))
  .pipe(autoprefixer({
      browsers: ['last 20 versions']
  }))
  .pipe(cssnano())
  .pipe(rename('styles.min.css'))
  .pipe(gulp.dest('./css'))
})
