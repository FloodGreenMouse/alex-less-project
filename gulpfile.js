const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const less = require('gulp-less')
const rename = require('gulp-rename')
const pug = require('gulp-pug')

function server (done) {
  browserSync.init({
    server: {
      baseDir: './src'
    },
    cors: true,
    notify: false,
    ui: false
  })
  done()
}

function reload (cb) {
  browserSync.reload()
  cb()
}

function styles () {
  return gulp.src('./src/less/index.less')
    .pipe(less())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./src/styles'))
    .pipe(browserSync.stream())
}

function index () {
  return gulp.src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./src'))
    .pipe(browserSync.stream())
}

function templates () {
  return gulp.src('./src/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./src/templates'))
    .pipe(browserSync.stream())
}

function components () {
  return gulp.src('./src/components/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./src/components'))
    .pipe(browserSync.stream())
}


function watch () {
  gulp.watch('./src/*.html', reload)
  gulp.watch('./src/templates/*.html', reload)
  gulp.watch('./src/less/*.less', styles)
  gulp.watch('./src/less/*/*.less', styles)
  gulp.watch('./src/*.pug', templates)
  gulp.watch('./src/templates/*.pug', templates)
  gulp.watch('./src/components/*.pug', templates)
}

exports.index = index
exports.templates = templates
exports.components = components
exports.styles = styles
exports.server = server
exports.reload = reload
exports.watch = watch

exports.default = gulp.series(
  index,
  components,
  templates,
  styles,
  gulp.series(
    server,
    watch)
)

// gulp.task('pug', () => {
//   return gulp.src('./src/index.pug')
//     .pipe(pug({}))
//     .pipe(gulp.dest('./src'))
//     .pipe(browserSync.stream())
// })
//
// gulp.task('less', () => {
//   return gulp.src('./src/less/index.less')
//     .pipe(less())
//     .pipe(rename('index.css'))
//     .pipe(gulp.dest('./src/styles'))
//     .pipe(browserSync.stream())
// })
//
// function reload (done) {
//   browserSync.reload()
//   done()
// }
//
// gulp.task('watch', () => {
//   gulp.watch('./src/*.pug', gulp.series('pug'))
//   gulp.watch('./src/less/*.less', gulp.series('less'))
//   gulp.watch('./src/less/*/*.less', gulp.series('less'))
//   gulp.watch('*.html', reload)
// })
//
// gulp.task('default', gulp.parallel('browserSync', gulp.series('less', 'watch')))
