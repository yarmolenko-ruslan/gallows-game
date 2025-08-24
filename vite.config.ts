import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': new URL('./src', import.meta.url).pathname,
			'@app': new URL('./src/app', import.meta.url).pathname,
			'@pages': new URL('./src/pages', import.meta.url).pathname,
			'@features': new URL('./src/features', import.meta.url).pathname,
			'@widgets': new URL('./src/widgets', import.meta.url).pathname,
			'@shared': new URL('./src/shared', import.meta.url).pathname,
		},
	},
});
