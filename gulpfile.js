var bowerFiles      = require('main-bower-files');
var changed         = require('gulp-changed');
var gulp            = require('gulp');
var inject          = require('gulp-inject');
var jade            = require('gulp-jade');
var livereload      = require('gulp-livereload');
var notify          = require('gulp-notify');
var rename          = require('gulp-rename');
var sass            = require('gulp-sass');

/**
 * regresa un array de todos los scripts utilizados en el projecto
 * @return {string[]}
 */
function rutasScripts( dev ) {

    'use strict';

    if( !dev ) {
        dev = false;
    }

    var scripts,
        i = 0;

    /**
     * [scripts description]
     * @type {string[]}
     */
    scripts = bowerFiles({
        filter: '/**/*.js'
    }).concat( [
        'app/js/**/*.js'
    ] );

    return scripts;
}

gulp.task( 'inject', function() {

    'use strict';

    return gulp.src('app/index.html')
        .pipe( inject(
            gulp.src(rutasScripts(true), {read: false}), {
                relative: false,
                transform: function( filepath, file, index, length, targetFile ) {

                    return '<script src="' + filepath.replace('/app/', '') +
                        '"></script>';

                }
            }) )
        .pipe( notify({
            title: 'inyectados los scripts :D',
            message: ' :S',
            icon: __dirname + '/node_modules/gulp-notify/assets/gulp.png'
        }))
        .pipe(gulp.dest('./app'));

});

gulp.task('sass', function() {

    'use strict';

    return gulp.src('sass/app.scss')
        .pipe( sass() )
        .pipe( gulp.dest('app/css') )
        .pipe( notify({
            title: 'Sass',
            message: 'Sass compilado a css, revisa si ocurrio algun error en ' +
                'consola',
            icon: __dirname + '/node_modules/gulp-notify/assets/gulp.png'
        }) );

});

gulp.task('jade', function() {

    'use strict';

    return gulp.src('jade/**/*.jade')
        .pipe(changed('./app/partials', {extension: '.html'}))
        .pipe(jade({
            pretty: true,
        }))
        .pipe(gulp.dest('./app/partials'))
        .pipe( notify({
            title: 'Jade',
            message: '<%= file.relative %> compilado',
            icon: __dirname + '/node_modules/gulp-notify/assets/gulp.png'
        }) );
});

gulp.task('watch', function() {

    'use strict';
    livereload.listen();
    var server = livereload();

    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('jade/**/*.jade', ['jade']);
    gulp.watch(['app/partials/**/*.html', 'app/index.html'])
        .on('change', function(file) {
            console.log('ddfg');
            server.changed(file.path);
        });
    gulp.watch('app/js/**/*.js', ['inject'])
        .on('change', function(file) {
            server.changed(file.path);
        });
    gulp.watch('app/css/**/*.css')
        .on('change', function(file) {
            server.changed(file.path);
        });

});

gulp.task('bower-list', function() {

    'use strict';

    return console.log(bowerFiles({
        filter: '/**/*.js'
    }));
});

gulp.task('default', ['inject', 'sass', 'jade', 'watch']);
