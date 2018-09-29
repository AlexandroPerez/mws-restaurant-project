import gulp from 'gulp';
import responsive from 'gulp-responsive';

gulp.task('images', function() {
  return gulp.src('images/**/*.jpg')
    .pipe(responsive({
      // Resize all jpg images to three different sizes: 300, 600 and 800
      '**/*.jpg': [{
        width: 800,
        quality: 70,
        rename: { suffix: '-large'}
      }, {
        width: 600,
        quality: 50,
        rename: { suffix: '-medium'}
      }, {
        width: 300,
        quality: 40,
        rename: { suffix: '-small'}
      }]
    },))
    .pipe(gulp.dest('img/'));
});