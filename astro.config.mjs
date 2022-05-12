import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    port: 5001, 
    host: true
  },
  integrations: [
    vue(),
  ]
});

// export default {
//   // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
//   // pages: './src/pages', // Path to Astro components, pages, and data
//   // dist: './dist',       // When running `astro build`, path to final static output
//   // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
//   devOptions: {
//     // hostname: 'localhost',  // The hostname to run the dev server on. 
//     port: 5001,             // The port to run the dev server on.
//     // tailwindConfig: '',     // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
//   },
//   integrations: [
//     vue(),
//   ]
// };
