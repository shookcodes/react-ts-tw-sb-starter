import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"
import postcss from 'rollup-plugin-postcss';
import dts from "vite-plugin-dts"


// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      formats: ['es', 'umd'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-ts-tw-starter',
      fileName: 'react-ts-tw-starter',
    },
  },
  copy: [
    {
      from: resolve(__dirname, 'tailwind.config.cjs'),
      to: resolve(__dirname, 'dist'),
    },
  ],
  include: ['tailwind.config.cjs', 'assets/**/*', 'src/**/*'],
  exclude: ['**/*.stories.tsx'],
  plugins: [
    dts(),
    react(),
  ],
  rollupOptions: {
    external: ['react', /\.css$/],
    output: {
      globals: {
        react: 'react',
      },
    },
  },
});
