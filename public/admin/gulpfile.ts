"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile globals scss to css
 */
gulp.task('sass-global', () => {
    return gulp.src("./src/assets/scss/**/*.scss")
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./src/assets/css/'));
});

/**
 * Compile components scss to css
 */
gulp.task('sass-component', () => {
    return gulp.src("./src/app/components/**/*.scss")
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./src/app/components/'));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write(".", {sourceRoot: '/src'}))
        .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts","!**/*.scss","!src/assets/scss","!src/assets/scss/**"])
        .pipe(gulp.dest("build"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**/*.js',
            'zone.js/dist/**',
            '@angular/**/bundles/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(['src/assets/scss/**/*.scss'],['sass-global']).on('change', function (e) {
        console.log('Scss file ' + e.path + ' has been changed. compiling');
    });
    gulp.watch(['src/app/components/**/*.scss'],['sass-component']).on('change', function (e) {
        console.log('Scss file ' + e.path + ' has been changed. compiling');
    });
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'sass-global', 'sass-component','resources', 'libs'], () => {
    console.log("Building the project ...");
});