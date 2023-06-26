import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import postcss from "rollup-plugin-postcss"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "react-ts-tw-starter",
			fileName: "react-ts-tw-starter",
		},
	},
  exclude: ["**/*.stories.tsx", "node_modules"],
	plugins: [
		dts(),
		react(),
		// postcss({
		// 	config: {
		// 		path: "./postcss.config.cjs",
		// 	},
		// 	extensions: [".css"],
		// 	minimize: true,
		// 	inject: {
		// 		insertAt: "top",
		// 	},
		// }),
	],
})
