let gulp = require('gulp'),
build = require('gulp-build');
 
gulp.task('build', function() {
  gulp.src('app')
      .pipe(build({ GA_ID: '123456' }))
      .pipe(gulp.dest('dist'))
});