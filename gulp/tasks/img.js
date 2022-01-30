import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";

export const img = () => app.gulp.src(app.path.src.img)
    .pipe(newer(app.path.build.img))
    .pipe(app.plugins.if(app.isBuild, webp()))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.img)))
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.img)))
    .pipe(app.plugins.if(app.isBuild, newer(app.path.build.img)))
    .pipe(app.plugins.if(app.isBuild, imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3
    })))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(`${app.path.srcFolder}/img/*.ico`))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.server.stream());