import * as esbuild from 'esbuild';
const watch = process.argv.includes('--watch');
const entries = (process.env.ENTRIES || 'src/main.js').split(',');
const opts = {
  entryPoints: entries, bundle: true, outdir: 'www/dist', format: 'esm', target: ['es2020'],
  minify: !watch && !process.env.NOMIN, sourcemap: false, loader: { '.json': 'json' }, logLevel: 'info', legalComments: 'none',
};
if (watch) { const ctx = await esbuild.context(opts); await ctx.watch(); console.log('watching…'); } else await esbuild.build(opts);
