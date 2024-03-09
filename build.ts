import dts from 'bun-plugin-dts';

await Bun.build({
	entrypoints: ['./src/util/index.ts', './src/types/index.ts'],
	outdir: './dist',
	minify: true,
	target: 'bun',
	format: 'esm',

	plugins: [dts()]
});
