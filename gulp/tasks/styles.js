let gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-easy-import'),
mixins = require('postcss-mixins');



gulp.task('styles', function() {
    return gulp.src('app/assets/styles/style.css')
    .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
    .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
      })
    .pipe(gulp.dest('app/temp/style'));
});
