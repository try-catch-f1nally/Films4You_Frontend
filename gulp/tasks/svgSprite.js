import svgSprite from "gulp-svg-sprite";

export const svgIcons = () => app.gulp.src(app.path.src.svgIcons, {})
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: `../icons/icons.svg`,
                example: true
            }
        }
    }))
    .pipe(app.gulp.dest(app.path.build.img));