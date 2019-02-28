/**************** Gulp.js 4 configuration ****************/

const

  // development or production
  devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),

  // directory locations
  dir = {
    src: 'src/',
    build: 'build/'
  },

  // modules
  gulp = require('gulp'),
  // sass modules
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  // util modules
  browsersync = devBuild ? require('browser-sync').create() : null,


/**************** CSS task ****************/

const cssConfig = {

  src: dir.src + 'scss/main.scss',
  watch: dir.src + 'scss/**/*',
  build: dir.build + 'css/',
  sassOpts: {
    sourceMap: devBuild,
    outputStyle: 'nested',
    imagePath: '/images/',
    precision: 3,
    errLogToConsole: true
  },

  postCSS: [
    require('postcss-assets')({
      loadPaths: ['images/'],
      basePath: dir.build
    }),
    require('autoprefixer')({
      browsers: ['> 1%']
    })
  ]

};

// remove unused selectors and minify production CSS
if (!devBuild) {

  cssConfig.postCSS.push(
    require('usedcss')({ html: ['index.html'] }),
    require('cssnano')
  );

}

function css() {

  return gulp.src(cssConfig.src)
    .pipe(sourcemaps ? sourcemaps.init() : noop())
    .pipe(sass(cssConfig.sassOpts).on('error', sass.logError))
    .pipe(postcss(cssConfig.postCSS))
    .pipe(sourcemaps ? sourcemaps.write() : noop())
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(cssConfig.build))
    .pipe(browsersync ? browsersync.reload({ stream: true }) : noop());

}
exports.css = css;


/**************** server task (now private) ****************/

const syncConfig = {
  server: {
    baseDir: './build',
    index: 'index.html'
  },
  port: 8000,
  open: false
};


/**************** watch task ****************/

function watch(done) {

  // CSS changes
  gulp.watch(cssConfig.watch, css);

  done();

}

/**************** default task ****************/

exports.default = gulp.series(exports.css, watch, server);
