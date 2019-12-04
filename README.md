# gulp_dev
* установить node
* установить gulp <https://demisx.github.io/gulp4/2015/01/15/install-gulp4.html>

---

* $ npm init -y ( создали package.json. name не должно быть gulp )
* $ npm install gulp --save-dev ( установка gulp )
* $ gulp -v ( проверить версию gulp )
  - CLI version: 2.2.0
  - Local version: 4.0.2

---
## Работа с терминалом
- cd - переход по дереву папок
  - .. - переход на один уровень выше (cd ..)
  - ../.. - переход на два уровня выше (cd ../..)
  - d: - переход на диск d (cd d:)
  - - - вернуться в предыдущую папку (cd -)
  - !$ - переместимся в вновь созданную папку если команду ввести сразу (cd !$)
- ls - посмотреть все содержимое папки в которой находишься
  - -f - показывает все скрытые файлы
  - -l - полная информация о файлах и о папках
  - -a - показывает все скрытые файлы и папки
- pwd - полный путь к папке в которой находишься
- mkdir - создание директории или директорий
  - mkdir app/css/button -p - ключ для созданиа папок еще в несуществующей директории (-p)
- rmdir - удалить пустые папки
- rm имя_папки -r - удалить папку и ее содержимое (-r)
- rm имя_файла - удалить файл
- touch - создание файлов
- echo - записываем данные в файл
- cp имя_файла и_куда_копировать - копирование файлов (cp index.html app)
- cp имя_папки/* . - копировать все файлы из указанной папки в текущую директорию (cp app/* .)
- mv имя_файла и_куда_переместить - перемещение файлов (mv index.html app)
- mv имя_файла_который_надо_переименовать имя_файла_после_переименования - переименовать файл (mv index.html index2.html)
- clear - очистить консоль
---

## Создаем структуру проекта и настройку шаблона
* mkdir dev gulp public ( создали папки: dev gulp public )
* touch gulpfile.js .gitignore ( создали файл gulpfile.js .gitignore )
* echo node_modules>.gitignore ( записали node_modules в .gitignore )
* cd dev ( переходим в папку dev )
* mkdir fonts html images inc js pug scss svg ( создаем папки )
* touch scss/style.scss (coздаем файл стилей style.scss )

## Установка плагинов
* gulp-pug - <https://www.npmjs.com/package/gulp-pug> ( npm i gulp-pug --save-dev )
  --
    gulp.task('pug',function(){
      return gulp.src('dev/pug/*.pug') // - указываем что надо собирать
        .pipe(pug({
          pretty: true // - без этого параметра минимизирует html в одну строку
        }))
        .pipe(gulp.dest('public')); // - собирает в указанную папку
    })
  --
* gulp-load-plugins - <https://www.npmjs.com/package/gulp-load-plugins> ( npm i gulp-load-plugins --save-dev )
    позволяет не писать подключаемый плагин в общий список плагинов, а подключать через переменную
  --
    gp   = require('gulp-load-plugins')();
  --
* gulp-sass <https://www.npmjs.com/package/gulp-sass> ( npm i gulp-sass --save-dev )
    отвечает за компиляцию SCSS
  --
    gulp.task('scss',function(){
      return gulp.src('dev/scss/style.scss') // - указываем что надо собирать
        .pipe(gp.sass({}))
        .pipe(gulp.dest('public')); // - собирает в указанную папку
    });
  --
* gulp-csso <https://github.com/ben-eb/gulp-csso> ( npm install gulp-csso --save-dev )
    отвечает за:
    - минификацию css
    - объединяет свойства одинаковых селекторов
  --
    .pipe(gp.csso())
  --
    .pipe(gp.csso({
        restructure: false, // - По умолчанию используется минимизация структуры для максимального сжатия. Передайте false, если вы хотите отключить эту функцию.
        sourceMap: true,
        debug: true
    }))
  --
* gulp-notify <https://www.npmjs.com/package/gulp-notify> ( npm install --save-dev gulp-notify )
* gulp-sourcemaps <https://www.npmjs.com/package/gulp-sourcemaps> ( npm i gulp-sourcemaps --save-dev )
* gulp-autoprefixer <https://www.npmjs.com/package/gulp-autoprefixer> (npm install --save-dev gulp-autoprefixer)