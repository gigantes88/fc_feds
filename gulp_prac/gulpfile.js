const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const pump = require('pump');

const publicPath = {
  src: './public/src/',
  dest: './public/dist/',
}

// task를 등록한다.
gulp.task('hello', () => {
  return console.log('hello');
});

gulp.task('gulp', ['hello'], () => { // gulp 실행 전에 hello를 실행해 순차적으로 진행할 수 있도록 한다.
  return console.log('gulp');
});

gulp.task('world', ['gulp'], () => { // world 실행 전에 gulp를 실행해 순차적으로 진행할 수 있도록 한다.
  return console.log('world');
});

// gulp-concat task
gulp.task('concat', () => {
  pump([
    gulp.src([publicPath.src + 'pretty.js', publicPath.src + 'pretty.1.js']), // 파일명을 직접치거나 *로 전체선택
    concat('concatenated.js'),
    gulp.dest(publicPath.dest + 'js/'),
  ]);
});

// gulp-uglify task
gulp.task('uglify', ['concat'], () => {
  pump([
    gulp.src(publicPath.dest + 'js/concatenated.js'),
    uglify(),
    gulp.dest(publicPath.dest + 'js/')
  ]);
});


// gulp만 치면 주르르륵 실행할 수 있도록 default에 등록한다.
gulp.task('default', ['concat']);