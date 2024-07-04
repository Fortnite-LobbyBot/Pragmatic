import { $ } from 'bun';
import dts from 'bun-plugin-dts';

await $`mkdir -p dist`

await Bun.build({
    entrypoints: ['./src/types/index.ts'],
    outdir: './dist/types/',
    minify: true,
    target: 'bun',
    format: 'esm',
    plugins: [dts()]
});

await Bun.build({
    entrypoints: ['./src/util/index.ts'],
    outdir: './dist/util/',
    minify: true,
    target: 'bun',
    format: 'esm',
    plugins: [dts()]
});
