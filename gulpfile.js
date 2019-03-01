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
  // html modules
  preprocess = require('gulp-preprocess'),
  htmlclean = require('gulp-htmlclean'),
  // js modules
  babel = require('gulp-babel'),
  webpack = require('webpack-stream'),
  uglify = require('gulp-uglify'),
  sourcemaps = devBuild ? require('gulp-sourcemaps') : null,
  // node modules
  node_dependencies = Object.keys(require('./package.json').dependencies || {}),
  // util modules
  noop = require('gulp-noop'),
  size = require('gulp-size'),
  plumber = require('gulp-plumber'),
  browsersync = devBuild ? require('browser-sync').create() : null,
  concat = require('gulp-concat'),
  pkg = require('./package.json');

console.log('Gulp', devBuild ? 'development' : 'production', 'build');

/**************** html task ****************/
const htmlConfig = {
  src: dir.src + '*.html',
  watch: [dir.src + '*.html', dir.src + 'template/**/*'],
  build: dir.build,
  context: {
    devBuild: devBuild,
    author: pkg.author,
    version: pkg.version
  }
}

function html() {
  var page = gulp.src(htmlConfig.src).pipe(preprocess({ context: htmlConfig.context }));
  if (!devBuild) {
    page = page.pipe(htmlclean());
  }
  return page.pipe(gulp.dest(htmlConfig.build));
};

exports.html = html

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

/**************** JS task ****************/
const jsConfig = {
  src: dir.src + 'js/main.js',
  watch: dir.src + 'js/**/*',
  build: dir.build + 'js/',
}

function js() {
  return gulp.src(jsConfig.src)
    .pipe(plumber())
    .pipe(webpack({
      mode: 'production'
    }))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(jsConfig.build));
}
exports.js = js

/**************** Vendor task ****************/
const vendorConfig = {
  src: './node_modules/',
  watch: './node_modules/',
  build: dir.build + 'node_modules/',
}
function vendor() {
  if (node_dependencies.length === 0) {
    return new Promise((resolve) => {
      console.log("No dependencies specified");
      resolve();
    });
  }

  return gulp.src(node_dependencies.map(dependency => vendorConfig.src + dependency + '/**/*.*'), { base: vendorConfig.src })
    .pipe(gulp.dest(vendorConfig.build))
};

exports.vendor = vendor


/**************** server task (now private) ****************/

const syncConfig = {
  server: {
    baseDir: './build',
    index: 'index.html'
  },
  port: 8000,
  open: false
};

// browser-sync
function server(done) {
  if (browsersync) browsersync.init(syncConfig);
  done();
}


/**************** watch task ****************/

function watch(done) {

  // html changes
  gulp.watch(htmlConfig.src, html);

  // CSS changes
  gulp.watch(cssConfig.watch, css);

  // JS changes
  gulp.watch(jsConfig.watch, js);

  // Node Module changes
  gulp.watch(vendorConfig.watch, vendor)

  done();

}

/**************** default task ****************/

exports.default = gulp.series(exports.html, exports.css, exports.js, exports.vendor, watch, server);
