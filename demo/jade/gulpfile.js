var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('html', function () {
  return gulp.src([
      //srcディレクトリ以下のhtmlファイルを対象にする
      'src/**/*.jade',
      //インクルードファイルや継承するためのファイルは除外する
      '!src/{layout,include}/**/*'
    ])
    .pipe(jade({
      locals: {
        //テンプレート内で利用できるデータ
        sitename: 'My website',
        author: {
          firstName: 'Shotaro',
          lastName: 'Sakamaki'
        },
        list: ['りんご', 'ごりら', 'ライオン']
      },
      //出力先するHTMLを整形する場合はtrue
      pretty: true
    }))
    //出力先を選択する
    .pipe(gulp.dest('./htdocs'))
});
