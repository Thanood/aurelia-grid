/**
 * Created by weagl on 9/4/2015.
 */
var gulp = require('gulp');
var paths = require('../paths');
var eslint = require('gulp-eslint');

gulp.task('lint', function(){
    return gulp.src(paths.source)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});