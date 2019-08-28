var gulp = require('gulp')
var errors = require('./index.js')
var path = require('path')

gulp.task('generate-docs', function (cb) {
  errors.generateDocs(errors, path.join(__dirname, 'docs', 'errors.md'), function(err) {

  });
})

gulp.task('prepublish', ['generate-docs'])
