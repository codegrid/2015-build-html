var gulp = require('gulp');
var rename = require('gulp-rename');
var hb = require('gulp-hb');

gulp.task('html', function() {
  //各ページとなるファイルの場所を指定する
  return gulp.src('./src/pages/**/*.hbs')
    .pipe(hb({
      data: {
        //テンプレート内で利用できるデータ
        sitename: 'My website',
        author: {
          firstName: 'Shotaro',
          lastName: 'Sakamaki'
        },
        list    : ['りんご', 'ごりら', 'ライオン']
      },
      helpers: [
        //継承を可能にするヘルパーを指定する
        './node_modules/handlebars-layouts/dist/handlebars-layouts.js'
      ],
      //インクルードや継承するための雛形の設置場所を指定する
      partials: './src/partials/**/*.hbs',
      bustCache: true
    }))
    //拡張子をhbsからhtmlに変更する
    .pipe(rename(function(path) {
      path.extname = '.html';
    }))
    //出力先を選択する
    .pipe(gulp.dest('./htdocs'));
});
