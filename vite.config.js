import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve("src", "react-lazy-dark-theme/index.jsx"),
            name: "react-lazy-dark-theme",
            fileName: (format) => `react-lazy-dark-theme.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
        outDir: "./release",
    },
    plugins: [react()],
});
