import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";

export const html = () => app.gulp.src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.server.stream());
