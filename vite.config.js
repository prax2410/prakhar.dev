import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react()],
	server: {
		port: 3000,
		watch: {
			awaitWriteFinish: {
				stabilityThreshold: 100,
				pollInterval: 20,
			},
		},
		// open: true
	},
});
