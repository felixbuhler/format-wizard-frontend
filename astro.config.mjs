// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@components": "/src/components"
            }
        }
    },
    integrations: [sanity({
        projectId: 'w9dvy0j8',
        dataset: 'production',
        // Set useCdn to false if you're building statically.
        useCdn: false,
    }), react()],
});