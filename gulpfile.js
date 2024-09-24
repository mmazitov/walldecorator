// commands


var gulp = require('gulp'); // основной

var sass = require('gulp-sass'); // sass

var spritesmith = require('gulp.spritesmith'); // спрайт

var imagemin = require('gulp-imagemin'); // сжатие картинок
var imageminJpegtran = require('imagemin-jpegtran'); // сжатие картинок
var pngquant = require('imagemin-pngquant'); // сжатие картинок

var uglify = require('gulp-uglify'); // Минификация JS
var csso = require('gulp-csso'); // Минификация CSS

// PATH
var path = {
    // Пути, куда складывать готовые после сборки файлы
    build: { 
        html: 'build/',
        css: 'css/',
		minicss: 'build/css/',
        js: 'build/js/',
        img: 'build/img/',
        pic: 'build/pic/',
        fonts: 'build/fonts/'
    },
    // Пути откуда брать исходники
    src: { 
		html: '*.html',
        sass: 'sass/*.scss',
        style: 'css/*.css',
        js: 'js/*.js',
        img: 'img/**/*.*',             //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        spr: 'img/icons/*.png',     //Выбираем все картинки в папке с спрайтами
        pic: 'pic/**/*.*',
		fonts: 'fonts/**/*.*',
    },
    // Указываем, за изменением каких файлов мы хотим наблюдать
    watch: {
        img: 'img/*.*',
		spr: 'img/icons/*.png',
        sass: 'sass/*.scss'
    },
    clean: './build'
};

/** MAIN **/
// SASS
gulp.task('sass:build', function () {
  gulp.src(path.src.sass)
    .pipe(sass({
        includePaths: [path.src.sass],
        style: 'compressed',
        errLogToConsole: true
    }).on('error', sass.logError))
    .pipe(gulp.dest(path.build.css));
});

// SPRITE
gulp.task('sprite:generate', function() {
    var spriteData = 
        gulp.src(path.src.spr) // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.scss',
                imgPath: '../img/sprite.png',
            }));
    spriteData.img.pipe(gulp.dest('./img/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./sass/')); // путь, куда сохраняем стили
});

/** SECONDARY **/
// HTML
gulp.task('html', function() {
     return gulp.src('*.html')
        .pipe(gulp.dest(path.build.html));
});

// CSS
gulp.task('css', function() {
     return gulp.src(path.src.style)
        .pipe(csso())
        .pipe(gulp.dest(path.build.minicss));
});

// JS
gulp.task('js', function() {
     return gulp.src(path.src.js)
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
});

// FONTS
gulp.task('fonts', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

// IMAGES
gulp.task('images', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            optimizationLevel: 7, // 0-7
			interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [imageminJpegtran(),pngquant()]
        }))
        .pipe(gulp.dest(path.build.img)); //И бросим в build

    gulp.src(path.src.pic) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            optimizationLevel: 7, // 0-7
			interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [imageminJpegtran(),pngquant()]
        }))
        .pipe(gulp.dest(path.build.pic)); //И бросим в build
});

/** WATCH **/
gulp.task('watch', function() {
	gulp.watch(path.src.sass, ['sass:build']);
	gulp.watch(path.src.spr, ['sprite:generate']);
});

/** BUILD MINI **/
gulp.task('build', [
    'html',
    'css',
    'js',
    'fonts',
	'images'
]);