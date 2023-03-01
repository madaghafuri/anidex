import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
            },
            manifest: {
                name: 'AniDex - AniList Client',
                short_name: 'AniDex',
                description:
                    'Discover and browse anime. Add anime to you collections',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'vite.svg',
                        sizes: '192x192',
                        type: 'svg',
                    },
                    {
                        src: 'vite.svg',
                        sizes: '512x512',
                        type: 'svg',
                    },
                ],
                background_color: '#ffffff',
            },
        }),
    ],
});
