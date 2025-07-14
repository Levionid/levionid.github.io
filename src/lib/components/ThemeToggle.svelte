<script lang="ts">
	// Импортируем наше хранилище и функцию для его изменения
	import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<!-- 
  При клике вызываем функцию toggleTheme из хранилища.
  Класс 'dark' или 'light' добавляется к кнопке в зависимости от
  текущего значения хранилища (используем синтаксис $theme).
-->
<button
	on:click={toggleTheme}
	class="theme-toggle {$theme}"
	aria-label="Переключить тему оформления"
>
	<span class="sun-icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line
				x1="12"
				y1="21"
				x2="12"
				y2="23"
			/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line
				x1="18.36"
				y1="18.36"
				x2="19.78"
				y2="19.78"
			/><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line
				x1="4.22"
				y1="19.78"
				x2="5.64"
				y2="18.36"
			/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
		>
	</span>
	<span class="moon-icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
		>
	</span>
</button>

<style>
	.theme-toggle {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		transition: background-color 0.2s ease;
		color: var(--primary-text-color);
		position: relative;
		overflow: hidden; /* Важно для красивой анимации */
	}
	.theme-toggle:hover {
		background-color: var(--hover-bg-color);
	}
	.sun-icon,
	.moon-icon {
		position: absolute;
		transition: transform 0.3s ease-in-out;
	}

	/* Логика показа иконок */
	.theme-toggle.dark .sun-icon {
		transform: translateY(0);
	}
	.theme-toggle.dark .moon-icon {
		transform: translateY(150%);
	}
	.theme-toggle.light .sun-icon {
		transform: translateY(-150%);
	}
	.theme-toggle.light .moon-icon {
		transform: translateY(0);
	}
</style>