const gulp = require('gulp');
const rollup = require('rollup');
const rollupTypescript = require('rollup-plugin-typescript');

gulp.task('build', async function () {
    const bundle = await rollup.rollup({
        input: './src/main.ts',
        plugins: [rollupTypescript()]
    });

    await bundle.write({
        file: './dist/library.js',
        format: 'umd',
        name: 'library',
        sourcemap: true
    });
});
