import { defineConfig } from "vite";
import { resolve } from "path";


export default defineConfig({
    //base: '/SCONIN/',
    root: resolve(__dirname, "scr"),
    build: {
        outDir: "../dist",
    },
    server: {
        host: '0.0.0.0',
        port: 6060,
    }
});