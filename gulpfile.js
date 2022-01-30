import gulp from 'gulp';
import {path} from './gulp/config/path.js';

import server from "browser-sync";
import gulpIf from "gulp-if";
import {browserSync} from "./gulp/tasks/liveEdit.js";
import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {img} from "./gulp/tasks/img.js";
import {otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";
import {svgIcons} from "./gulp/tasks/svgSprite.js";
export {svgIcons};
export const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: {
        if: gulpIf,
        server: server
    }
}

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.img, img);
    gulp.watch(path.watch.svgIcons, svgIcons);
}

const mainTasks = gulp.parallel(copy, html, scss, js, img, svgIcons);

export const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, browserSync));
export const build = gulp.series(reset, mainTasks);