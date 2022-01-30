export const copy = () => app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
    .pipe(app.plugins.server.stream());
