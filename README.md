# Gulp4 demo project
A simple demo of using Gulp4 for modern web development.

## See the project live on github-pages
[Gulp4Demo](https://skyrousse.github.io/Gulp-FrontEnd-Test/)

*Know issue: your browser may block scripts from http://via.placeholder.com/  - in order for the images to load in you need to tell your browser to ignore this warning and allow the scripts to load *

## Here is a list of the current features:

- Copy HTML files from `src` to `build` directory
- Support for using html templates
- Compile Sass to CSS, autoprefix, minify CSS and put it inside `build` directory
- Compile ES6+ to ES5, concatenate JS files and minify code
- Compress and copy images into `build` directory
- Copy dependencies specified in `package.json` from `src/node_modules` directory into `node_modules` folder inside `build` directory
- Import dependencies into your application with ES6 modules
- Spin up local dev server at `http://localhost:3000` including auto-reloading

## Requirements
This should be installed on your computer in order to get up and running:

- [Node.js](https://nodejs.org/en/)
- [Gulp 4](https://gulpjs.com/)
- [Sass](http://sass-lang.com/)

## Dependencies
These [npm](https://www.npmjs.com/) packages are used in this project:

- [@babel/core](https://www.npmjs.com/package/@babel/core)
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [browser-sync](https://www.npmjs.com/package/browser-sync)
- [del](https://www.npmjs.com/package/del)
- [gulp](https://www.npmjs.com/package/gulp)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-babel](https://www.npmjs.com/package/gulp-babel)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [webpack-stream](https://www.npmjs.com/package/webpack-stream)

For more information, take a look at the [package.json]((https://github.com/SkyRousse/Gulp-FrontEnd-Test/blob/master/package.json)) file or visit the linked npm package sites.

## Usage

### Build scripts

1. `npm start`: This is the normal development script used to build all files and run all tasks, but also to serve a development server and watch for changes.
2. `npm run build`: This is used to build all files and run all tasks without serving a development server and watching for changes.

### Images types that are supported
The following types of images are currently supported:

- PNG
- JPG / JPEG
- GIF
- SVG
- ICO (not compressed)

### Specifying dependenciesto be copied to the `build` folder
You don't need to specify your dependencies anywhere else than in your `package.json` file.
Just install your dependencies via npm and all your dependencies get automatically loaded and copied into the `build` folder.

### How can I load dependencies inside my application?
ES6 modules are supported and can be used like this:

```js
import jQuery from 'jQuery';
```

## License
This project is licensed under the [MIT License](https://github.com/SkyRousse/Gulp-FrontEnd-Test/blob/master/LICENSE).
