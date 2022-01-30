export const browserSync = () => app.plugins.server.init({
    server: {
        baseDir: './dist'
    }
});
