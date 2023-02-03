import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import terser from '@rollup/plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'ESNext',
    cssCodeSplit: true,
    rollupOptions: {
      treeshake: false,
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      input: ['./src/components/index.ts'],
      output: [
        {
          format: 'esm',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'es',
          preserveModulesRoot: './src/components',
          // assetFileNames: assetInfo => {
          //   var info = assetInfo.name.split('.')
          //   var extType = info[info.length - 1]
          //   if (
          //     /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
          //   ) {
          //     extType = 'media'
          //   } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
          //     extType = 'img'
          //   } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
          //     extType = 'fonts'
          //   }
          //   return `${extType}/[name][extname]`
          // },
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'lib',
          preserveModulesRoot: './src/components',
        },
        {
          name: 'reactDialogMxy',
          format: 'iife',
          entryFileNames: '[name].js',
          dir: 'dist',
          plugins: [terser()],
        },
        {
          name: 'reactDialogMxy',
          format: 'umd',
          entryFileNames: '[name].umd.js',
          dir: 'dist',
          plugins: [terser()],
        },
      ],
    },
    lib: {
      entry: './src/components/index.ts',
      name: 'react-dialog-mxy',
    },
  },
});
