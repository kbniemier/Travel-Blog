import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.footnotesandfootsteps.com',
  integrations: [sitemap()],
  redirects: {
    '/blog/italy': '/blog/italy-7-day-itinerary-rome-florence-sorrento',
  },
});
