var gulp            = require('gulp'),
    server          = require('gulp-webserver'),
    inject          = require('gulp-inject'),
    sass            = require('gulp-sass'),
    concat          = require('gulp-concat'),
    watch           = require('gulp-watch'),
    angularFilesort = require('gulp-angular-filesort'),
    util = require('gulp-util')
    ;

var defined = {
    scss: './app/**/*.scss',
    js  : './app/**/*.js'
};

gulp.task('webserver', webserver);

gulp.task('injectJs', injectJs);

gulp.task('mapSass', mapSass);

gulp.task('watch', function () {
    watch(defined.scss, mapSass);
    watch(defined.js, injectJs);
});

function webserver() {
    var webServerOptions = {
        host            : '0.0.0.0',
        port            : '8080',
        livereload      : true,
        fallback        : 'index.html',
        open            : true
    };
    return gulp.src('.')
        .pipe(server(webServerOptions));
}

function injectJs() {
    var sources = gulp.src([defined.js]).pipe(angularFilesort());

    return gulp.src('./index.html')
        .pipe(inject(sources))
        .pipe(gulp.dest('.'));
}

function mapSass() {
    return gulp.src(defined.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./assets/css'));
}