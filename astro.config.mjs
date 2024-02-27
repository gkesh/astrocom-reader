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
