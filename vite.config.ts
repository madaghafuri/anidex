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
                        src: 'icon/manifest-icon-192.maskable.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: 'icon/manifest-icon-192.maskable.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                    {
                        src: 'icon/manifest-icon-512.maskable.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: 'icon/manifest-icon-512.maskable.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
                background_color: '#ffffff',
            },
        }),
    ],
});
