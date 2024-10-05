import { defineConfig } from "vite";
import { resolve } from "path";


export default defineConfig({
    base: '/SCONIN/',
    root: resolve(__dirname, "scr"),
    build: {
        outDir: "../dist",
    },
    server: {
        port: 6060,
    }
});