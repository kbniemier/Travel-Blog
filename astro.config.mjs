import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  redirects: {
    '/blog/italy': '/blog/italy-7-day-itinerary-rome-florence-sorrento',
  },
});
