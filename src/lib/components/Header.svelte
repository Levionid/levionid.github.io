<script lang="ts">
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { navigationLinks } from '$lib/constants/navigation';
	import ThemeToggle from './ThemeToggle.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	const unsubscribe = page.subscribe(() => {
		closeMenu();
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
		if (typeof window !== 'undefined') {
			document.body.classList.remove('no-scroll');
		}
	});

	$: if (typeof window !== 'undefined') {
		document.body.classList.toggle('no-scroll', isMenuOpen);
	}
</script>

<nav class="top-nav" class:is-hidden={isMenuOpen}>
	<a href="/" class="logo" on:click={closeMenu}>
		<img src="/favicon.ico" alt="Lestix Logo" />
		<span>Lestix</span>
	</a>

	<div class="desktop-menu">
		<ul class="nav-links">
			{#each navigationLinks as link}
				<li>
					<a href={link.href} class:active={$page.url.pathname === link.activePath}>{link.text}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="desktop-controls">
		<ThemeToggle />
	</div>

	<div class="mobile-controls">
		<ThemeToggle />
		<button
			class="mobile-toggle"
			on:click={toggleMenu}
			aria-label="Открыть меню"
			aria-expanded={isMenuOpen}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="28px"
				viewBox="0 -960 960 960"
				width="28px"
				fill="var(--primary-text-color)"
			>
				<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
			</svg>
		</button>
	</div>
</nav>

<aside class="mobile-nav-menu" class:is-open={isMenuOpen}>
	<div class="menu-header">
		<a href="/" class="logo">
			<img src="/favicon.ico" alt="Lestix Logo" />
			<span>Lestix</span>
		</a>
		<button class="close-menu-btn" on:click={closeMenu} aria-label="Закрыть меню">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="28px"
				viewBox="0 -960 960 960"
				width="28px"
				fill="var(--primary-text-color)"
			>
				<path
					d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
				/>
			</svg>
		</button>
	</div>
	<ul class="nav-links">
		{#each navigationLinks as link, i}
			<li style="--delay: {i * 0.05}s">
				<a href={link.href} class:active={$page.url.pathname === link.activePath}>
					<span class="link-icon">{@html link.icon}</span>
					<span>{link.text}</span>
				</a>
			</li>
		{/each}
	</ul>
</aside>

<div class="overlay" class:is-open={isMenuOpen} on:click={closeMenu} aria-hidden="true" />

<style>
	:global(body.no-scroll) {
		overflow: hidden;
	}

	.top-nav {
		position: fixed;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		width: calc(100% - 40px);
		max-width: 1200px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 24px;
		z-index: 101;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		background-color: var(--nav-bg-color);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--border-radius-lg);
		transition:
			background-color var(--transition-speed) ease,
			border-color var(--transition-speed) ease,
			transform 0.35s ease-in-out,
			opacity 0.35s ease-in-out;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 22px;
		font-weight: 700;
		color: var(--primary-text-color);
		text-decoration: none;
	}

	.logo img {
		width: 32px;
		height: 32px;
		border-radius: 8px;
	}

	.desktop-menu {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.desktop-menu .nav-links {
		list-style: none;
		display: flex;
		gap: 16px;
		margin: 0;
		padding: 0;
	}

	.desktop-menu .nav-links a {
		color: var(--secondary-text-color);
		text-decoration: none;
		font-weight: 500;
		padding: 8px 16px;
		border-radius: var(--border-radius-md);
		transition: all 0.2s ease, color var(--transition-speed) ease;
		white-space: nowrap;
		position: relative;
	}

	.desktop-menu .nav-links a:hover {
		color: var(--primary-text-color);
		background-color: rgba(255, 255, 255, 0.15);
	}

	.desktop-menu .nav-links a.active {
		color: var(--primary-text-color);
		font-weight: 600;
	}

	.mobile-controls,
	.desktop-controls {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.mobile-controls {
		display: none;
	}

	.mobile-nav-menu {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		width: 320px;
		max-width: 90vw;
		z-index: 102;
		background-color: var(--bg-color);
		box-shadow: -5px 0px 25px rgba(0, 0, 0, 0.2);
		transform: translateX(100%);
		transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
		visibility: hidden;
		display: flex;
		flex-direction: column;
	}

	.mobile-nav-menu.is-open {
		transform: translateX(0);
		visibility: visible;
	}

	.menu-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 20px;
		border-bottom: 1px solid var(--card-border-color);
		flex-shrink: 0;
	}

	.close-menu-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: background-color 0.2s ease;
	}
	.close-menu-btn:hover {
		background-color: var(--hover-bg-color);
	}

	.mobile-nav-menu .nav-links {
		list-style: none;
		padding: 24px;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
		overflow-y: auto;
	}

	.mobile-nav-menu .nav-links li {
		opacity: 0;
		transform: translateX(-20px);
		transition:
			opacity 0.3s ease-out,
			transform 0.3s ease-out;
		transition-delay: var(--delay);
	}

	.mobile-nav-menu.is-open .nav-links li {
		opacity: 1;
		transform: translateX(0);
	}

	.mobile-nav-menu .nav-links a {
		display: flex;
		align-items: center;
		gap: 16px;
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--secondary-text-color);
		text-decoration: none;
		padding: 14px 16px;
		border-radius: var(--border-radius-md);
		transition: all 0.2s ease, color var(--transition-speed) ease;
	}

	.mobile-nav-menu .nav-links a .link-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
	}
	.mobile-nav-menu .nav-links a .link-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.mobile-nav-menu .nav-links a:hover {
		color: var(--primary-text-color);
		background-color: var(--hover-bg-color);
	}
	.mobile-nav-menu .nav-links a.active {
		color: var(--primary-text-color);
		background-color: var(--accent-color-translucent, rgba(13, 115, 255, 0.1));
	}
	.mobile-nav-menu .nav-links a.active .link-icon {
		color: var(--accent-color, #0d73ff);
	}

	.overlay {
		position: fixed;
		inset: 0;
		z-index: 100;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(2px);
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.35s ease, visibility 0.35s ease;
	}

	.overlay.is-open {
		visibility: visible;
		opacity: 1;
	}

	@media (max-width: 1000px) {
		.top-nav {
			top: 0;
			left: 0;
			width: 100%;
			transform: translateX(0);
			border-radius: 0;
			border-left: none;
			border-right: none;
			border-top: none;
		}

		/* Новый стиль для скрытия панели */
		.top-nav.is-hidden {
			transform: translateY(-100%);
			opacity: 0;
		}

		.desktop-menu,
		.desktop-controls {
			display: none;
		}

		.mobile-controls {
			display: flex;
		}

		.mobile-toggle {
			background: transparent;
			border: none;
			cursor: pointer;
			padding: 0;
			width: 44px;
			height: 44px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			transition: background-color 0.2s ease;
		}
		.mobile-toggle:hover {
			background-color: var(--hover-bg-color);
		}
	}
</style>