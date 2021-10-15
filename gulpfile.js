const gulp = require('gulp')
const browserSync = require('browser-sync').create()

gulp.task('browserSync', () => {
  browserSync.reload()
})

gulp.task('default', () => {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  })

  gulp.watch('./src/*.html', gulp.series('browserSync'))
  gulp.watch('./src/*/*.html', gulp.series('browserSync'))
})
