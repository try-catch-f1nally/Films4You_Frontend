import fs from "fs";
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => app.gulp.src(`${app.path.src.fonts}*.otf`, {})
    .pipe(fonter({
        formats: ['ttf']
    }))
    .pipe(app.gulp.dest(app.path.src.fonts));

export const ttfToWoff = () => app.gulp.src(`${app.path.src.fonts}*.ttf`, {})
    .pipe(fonter({
        formats: ['woff']
    }))
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(`${app.path.src.fonts}*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts));

export const fontsStyle = () => {
    let fontsScss = `${app.path.srcFolder}/scss/fonts.scss`;
    fs.readdir(app.path.src.fonts, (err, fontsFiles) => {
        if (fontsFiles) {
            fs.writeFile(fontsScss, '', cb);
            fontsFiles.forEach(fontFile => {
                if (fontFile.includes('.ttf')) {
                    let fontFileName = fontFile.split('.')[0];
                    let fontName = fontFileName.split('-')[0] || fontFileName;
                    let fontFileNameLower = fontFileName.toLowerCase();
                    let fontWeight = fontFileNameLower.split('-')[1] || fontFileNameLower;
                    let fontStyle = fontFileNameLower.split('-')[1].includes('italic') ? 'italic' : 'normal';

                    if (fontWeight.includes('thin')) {
                        fontWeight = 100;
                    } else if (fontWeight.includes('extralight')) {
                        fontWeight = 200;
                    } else if (fontWeight.includes('light')) {
                        fontWeight = 300;
                    } else if (fontWeight.includes('medium')) {
                        fontWeight = 500;
                    } else if (fontWeight.includes('semibold')) {
                        fontWeight = 600;
                    } else if (fontWeight.includes('bold')) {
                        fontWeight = 700;
                    } else if (fontWeight.includes('extrabold') || fontWeight.includes('heavy')) {
                        fontWeight = 800;
                    } else if (fontWeight.includes('black')) {
                        fontWeight = 900;
                    } else {
                        fontWeight = 400;
                    }
                    fs.appendFile(fontsScss, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontStyle};\n}\r\n`, cb);
                }
            });
        }
    });
    return app.gulp.src(app.path.srcFolder);

    function cb() {
    }
}