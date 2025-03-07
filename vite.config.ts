import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'


const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default ({ mode }) => {
    return defineConfig({
        build: {
            assetsInlineLimit: 0,
        },
        plugins: [
            tailwindcss(),
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    });
};