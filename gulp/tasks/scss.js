import sassCompiler from "sass";
import gulpSass from "gulp-sass";
import cleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import rename from "gulp-rename";

const sass = gulpSass(sassCompiler);

export const scss = () => app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
    .pipe(sass({
        outputStyle: 'compressed'
    }, false))
    .pipe(app.plugins.if(app.isBuild, webpCss({
        webpClass: ".webp",
        noWebpClass: ".no-webp"
    })))
    .pipe(app.plugins.if(app.isBuild, autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        cascade: true
    })))
    .pipe(app.plugins.if(app.isBuild, cleanCss({
        level: {
            2: {
                all: false,
                mergeNonAdjacentRules: true,
                mergeMedia: true,
                removeEmpty: true
            }
        }
    })))
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.server.stream());
