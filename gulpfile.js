var gulp= require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('dist/css/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'));
  });

  gulp.task('default ',[ 'sass'],function(){
    gulp.watch('dist/css/scss/**/*.scss', ['sass']);
 });