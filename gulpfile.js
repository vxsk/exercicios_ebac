const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar SASS
gulp.task('sass', function() {
    return gulp.src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function() {
    return gulp.src('src/images')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Tarefa para minificar JavaScript
gulp.task('uglify', function() {
    return gulp.src('src/js/script.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão que executa todas as tarefas acima
gulp.task('default', gulp.series('sass', 'imagemin', 'uglify'));
