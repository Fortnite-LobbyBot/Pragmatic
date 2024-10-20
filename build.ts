import { $ } from 'bun';
import dts from 'bun-plugin-dts';

await $`mkdir -p dist`;

const dtsConfig = {
	output: {
		respectPreserveConstEnum: true
	}
};

await Bun.build({
	entrypoints: ['./src/types/index.ts'],
	outdir: './dist/types/',
	minify: true,
	target: 'node',
	format: 'esm',
	plugins: [dts(dtsConfig)]
});

await Bun.build({
	entrypoints: ['./src/util/index.ts'],
	outdir: './dist/util/',
	minify: true,
	target: 'node',
	format: 'esm',
	plugins: [dts(dtsConfig)]
});

await Bun.build({
	entrypoints: ['./src/errors/index.ts'],
	outdir: './dist/errors/',
	minify: true,
	target: 'node',
	format: 'esm',
	plugins: [dts(dtsConfig)]
});

await Bun.build({
	entrypoints: ['./src/http/index.ts'],
	outdir: './dist/http/',
	minify: true,
	target: 'node',
	format: 'esm',
	plugins: [dts(dtsConfig)]
});
