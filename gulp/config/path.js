const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        fonts: `${srcFolder}/fonts/`,
        svg: `${srcFolder}/img/**/.svg`,
        svgIcons: `${srcFolder}/svgIcons/*.svg`
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/**/*.scss`,
        js: `${srcFolder}/js/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,svg,webp}`,
        svgIcons: `${srcFolder}/svgIcons/*.svg`
    },
    clean: [`${buildFolder}/**`, `!${buildFolder}`, `!${buildFolder}/fonts`, `!${buildFolder}/fonts/*.*`],
    srcFolder: srcFolder
}