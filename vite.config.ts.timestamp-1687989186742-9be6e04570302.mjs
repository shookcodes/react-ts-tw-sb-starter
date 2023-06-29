// vite.config.ts
import { defineConfig } from "file:///C:/Users/srowl/code/react-ts-tw-starter/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///C:/Users/srowl/code/react-ts-tw-starter/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/Users/srowl/code/react-ts-tw-starter/node_modules/vite-plugin-dts/dist/index.mjs";
import postcss from "file:///C:/Users/srowl/code/react-ts-tw-starter/node_modules/rollup-plugin-postcss/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\srowl\\code\\react-ts-tw-starter";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "react-ts-tw-starter",
      fileName: "react-ts-tw-starter"
    }
  },
  exclude: ["**/*.stories.tsx"],
  plugins: [
    dts(),
    react(),
    postcss({
      plugins: [],
      minimize: true
    })
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
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzcm93bFxcXFxjb2RlXFxcXHJlYWN0LXRzLXR3LXN0YXJ0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHNyb3dsXFxcXGNvZGVcXFxccmVhY3QtdHMtdHctc3RhcnRlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvc3Jvd2wvY29kZS9yZWFjdC10cy10dy1zdGFydGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCJcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCJcclxuaW1wb3J0IHBvc3Rjc3MgZnJvbSBcInJvbGx1cC1wbHVnaW4tcG9zdGNzc1wiXHJcbi8vIGltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIlxyXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIlxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2J1aWxkLmh0bWwjbGlicmFyeS1tb2RlXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0YnVpbGQ6IHtcclxuXHRcdGxpYjoge1xyXG5cdFx0XHRlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxyXG5cdFx0XHRuYW1lOiBcInJlYWN0LXRzLXR3LXN0YXJ0ZXJcIixcclxuXHRcdFx0ZmlsZU5hbWU6IFwicmVhY3QtdHMtdHctc3RhcnRlclwiLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGV4Y2x1ZGU6IFtcIioqLyouc3Rvcmllcy50c3hcIl0sXHJcblx0cGx1Z2luczogW1xyXG5cdFx0ZHRzKCksXHJcblx0XHRyZWFjdCgpLFxyXG5cdFx0cG9zdGNzcyh7XHJcblx0XHRcdHBsdWdpbnM6IFtdLFxyXG5cdFx0XHRtaW5pbWl6ZTogdHJ1ZSxcclxuXHRcdH0pLFxyXG5cdFx0Ly8gcG9zdGNzcyh7XHJcblx0XHQvLyBcdGNvbmZpZzoge1xyXG5cdFx0Ly8gXHRcdHBhdGg6IFwiLi9wb3N0Y3NzLmNvbmZpZy5janNcIixcclxuXHRcdC8vIFx0fSxcclxuXHRcdC8vIFx0ZXh0ZW5zaW9uczogW1wiLmNzc1wiXSxcclxuXHRcdC8vIFx0bWluaW1pemU6IHRydWUsXHJcblx0XHQvLyBcdGluamVjdDoge1xyXG5cdFx0Ly8gXHRcdGluc2VydEF0OiBcInRvcFwiLFxyXG5cdFx0Ly8gXHR9LFxyXG5cdFx0Ly8gfSksXHJcblx0XSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVCxTQUFTLG9CQUFvQjtBQUM5VSxTQUFTLGVBQWU7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixPQUFPLGFBQWE7QUFKcEIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsT0FBTztBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0osT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVMsQ0FBQyxrQkFBa0I7QUFBQSxFQUM1QixTQUFTO0FBQUEsSUFDUixJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDUCxTQUFTLENBQUM7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNYLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
