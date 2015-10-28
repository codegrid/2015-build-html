var gulp = require('gulp');
var ect = require('gulp-ect');

gulp.task('html', function() {
  //各ページとなるファイルの場所を指定する
  return gulp.src([
      //srcディレクトリ以下のhtmlファイルを対象にする
      'src/**/*.html',
      //インクルードファイルや継承するためのファイルは除外する
      '!src/{layout,include}/**/*'
    ])
    .pipe(ect({
      data : {
        //テンプレート内で利用できるデータ
        sitename: 'My website',
        author: {
          firstName: 'Shotaro',
          lastName: 'Sakamaki'
        },
        list    : ['りんご', 'ごりら', 'ライオン']
      },
      //ectで利用するテンプレートファイルの拡張子
      ext : '.html'
    }))
    //出力先を選択する
    .pipe(gulp.dest('htdocs'));
});
