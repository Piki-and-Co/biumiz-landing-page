import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://biumiz.piki-and-co.com',
	output: 'static',
	integrations: [sitemap()],

	markdown: {
		gfm: true,
	},
});
