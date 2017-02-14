
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');

gulp.task('deploy', function() {
  return gulp.src(['_book/*/*/*','_book/*/*','_book/*'])
    .pipe(ghPages());
});

gulp.task('build',shell.task([
	'gitbook build'
]));

gulp.task('serve', shell.task([
  'gitbook serve'
]));

gulp.task('default',['build','deploy','serve']);