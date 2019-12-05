# Gulp - мониторинг изменений gulp.watch
В Gulp имеется встроенная функция
--
gulp.watch
--
для отслеживания изменений в любом из файлов проекта.
Это очень удобно в работе, так как отпадает необходимость вручную запускать определенную задачу каждый раз, когда нужно зафиксировать эти изменения.

. Допустим, у нас имеются две именованные задачи, одна из которых выполняет минификацию js-файлов
--
gulp-uglify
--
, а вторая - конкатенацию css-файлов
--
gulp-concat
--
'''
    // Uglify Task

    gulp.task('uglify', function(){
      gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
    });

    // Concat Task

    gulp.task('concat', function() {
      gulp.src('css/*.css')
        .pipe(concat('one.css'))
        .pipe(gulp.dest('build/css'))
    });
'''