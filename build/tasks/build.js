/**
 * Created by ben on 8/24/2015.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var paths = require('../paths');
var compileOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');

gulp.task('build-system', function(){
	return gulp.src([paths.source, '!' + paths.jspm, '!' + paths.config])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(changed(paths.output, {extension: '.js'}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(babel(assign({}, compileOptions, {modules: 'system'})))
		.pipe(sourcemaps.write({includeContent: true}))
		.pipe(gulp.dest(paths.output));
});

//gulp.task('build-view-models', function(){
//	return gulp.src(paths.viewModels)
//		.pipe(plumber())
//		.pipe(changed(paths.output.vvm, {extension: '.js'}))
//		.pipe(sourcemaps.init({loadMaps: true}))
//		.pipe(babel(compileOptions))
//		.pipe(sourcemaps.write({includeContent: true}))
//		.pipe(gulp.dest(paths.output.vvm));
//});

gulp.task('build-html', function(){
	return gulp.src([paths.html, '!' + paths.jspm])
		.pipe(changed(paths.output, {extension: '.html'}))
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-sass', function(){
	return gulp.src([paths.sass, '!' + paths.jspm])
			.pipe(changed(paths.output, {extension: '.css'}))
			.pipe(sass())
			.pipe(gulp.dest(paths.output))
});

gulp.task('build-css', function(){
	return gulp.src([paths.css, '!' + paths.jspm])
			.pipe(changed(paths.output, {extension: '.css'}))
			.pipe(gulp.dest(paths.output));
});

//gulp.task('build-main', function(){
//	return gulp.src(paths.main)
//		.pipe(changed(paths.output.root, {extension: '.html'}))
//		.pipe(gulp.dest(paths.output.root));
//});



gulp.task('move-config', function(){
	return gulp.src(paths.config)
		.pipe(changed(paths.output))
		.pipe(gulp.dest(paths.output));
});

gulp.task('move-jspm', function(){
	return gulp.src(paths.jspm)
			.pipe(changed(paths.jspmOut))
			.pipe(gulp.dest(paths.jspmOut));
});

//gulp.task('move-lib', function(){
//	return gulp.src(paths.scripts.lib).pipe(gulp.dest(paths.output.lib));
//});

gulp.task('build', function(callback){
	return runSequence(
		'clean',
		['build-system', 'build-html', 'build-sass', 'build-css', 'move-jspm', 'move-config'],
		callback
	);
});