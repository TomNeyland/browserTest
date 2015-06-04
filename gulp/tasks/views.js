'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    notify = require('gulp-notify');

// Views task
gulp.task('views', function() {
    gulp.src(['index.html'])
        .pipe(gulp.dest('build/'));

    gulp.src(['public/app/*.html', 'public/**/*.html', 'public/**/*.json','public/**/*.png'])
        .pipe(gulp.dest('build/app'));
});
