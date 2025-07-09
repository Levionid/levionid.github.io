import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Используем адаптер для статических сайтов
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),

		// КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: Убираем базовый путь, так как это User Page
		paths: {
			base: '',
		},
		
		// Обрабатываем ошибки 404 во время сборки как предупреждения
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;