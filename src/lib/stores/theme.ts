import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const initialTheme = (() => {
	if (!browser) return 'light';
	const storedTheme = localStorage.getItem('theme');
	if (storedTheme === 'dark' || storedTheme === 'light') {
		return storedTheme;
	}
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
})();

export const theme: Writable<Theme> = writable(initialTheme);

export const toggleTheme = () => {
	theme.update((current) => {
		const newTheme = current === 'light' ? 'dark' : 'light';
		if (browser) {
			localStorage.setItem('theme', newTheme);
		}
		return newTheme;
	});
};

if (browser) {
	theme.subscribe((currentTheme) => {
		document.body.classList.remove('light-theme', 'dark-theme');
		document.body.classList.add(`${currentTheme}-theme`);
	});
}