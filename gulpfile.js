const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const less = require('gulp-less')
const rename = require('gulp-rename')

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  })
})

gulp.task('less', () => {
  return gulp.src('./src/less/index.less')
    .pipe(less())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./src/styles'))
    .pipe(browserSync.stream())
})

gulp.task('watch', () => {
  gulp.watch('./src/*.html', gulp.series('browserSync'))
  gulp.watch('./src/*/*.html', gulp.series('browserSync'))
  gulp.watch('./src/less/*.less', gulp.series('less'))
  gulp.watch('./src/less/*/*.less', gulp.series('less'))
})

gulp.task('default', gulp.parallel('less', 'browserSync', 'watch'))
