const { src, dest } = require('gulp');
const prettier = require('gulp-prettier');

function validate() {
  return src('styles/*.*')
    .pipe(prettier.check());
}

function format() {
  return src('styles/prettier.css')
    .pipe(prettier())
    .pipe(dest('styles'));
}

exports.validate = validate;
exports.format = format;