<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { navigationLinks } from '$lib/constants/navigation';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="top-nav">
	<a href="/" class="logo">
		<img src="/favicon.ico" alt="Lestix Logo" />
		<span>Lestix</span>
	</a>
	<ul class="nav-links">
		{#each navigationLinks as link}
			<li>
				<a href={link.href} class:active={$page.url.pathname === link.activePath}>{link.text}</a>
			</li>
		{/each}
	</ul>
	<ThemeToggle />
</nav>

<style>
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
  padding: 16px 30px;
  z-index: 100;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--nav-bg-color);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease, backdrop-filter 0.3s ease;
}
.logo, .nav-links a {
  transition: color var(--transition-speed) ease;
}
.logo { display: flex; align-items: center; gap: 12px; font-size: 22px; font-weight: 700; color: rgb(var(--nav-text-color)); text-decoration: none; }
.logo img { width: 32px; height: 32px; border-radius: 8px; }
.nav-links { list-style: none; display: flex; gap: 16px; margin: 0; padding: 0; position: absolute; left: 50%; transform: translateX(-50%); }
.nav-links a {
  color: rgb(var(--nav-text-color));
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.2s, opacity 0.2s;
  opacity: 0.8;
  white-space: nowrap;
  position: relative;
}
.nav-links a:hover { opacity: 1; background-color: rgba(255, 255, 255, 0.1); }
.nav-links a.active { opacity: 1; font-weight: 600; }
.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: 4px; left: 16px; right: 16px;
  height: 2px;
  background-color: rgb(var(--nav-text-color));
  border-radius: 1px;
  transition: background-color var(--transition-speed) ease;
}

@media (max-width: 768px) {
	.top-nav {
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
  .nav-links { gap: 8px; }
  .nav-links a { padding: 6px 10px; font-size: 15px; }
  .nav-links a.active::after { left: 10px; right: 10px; }
}

@media (max-width: 600px) {
	.nav-links { 
    position: static; 
    transform: none; 
    order: 3; 
    width: 100%; 
    justify-content: center; 
    padding-top: 15px; 
    border-top: 1px solid rgba(255,255,255,0.1); 
    margin-top: 15px; 
  }
  .top-nav { 
    flex-wrap: wrap; 
    justify-content: space-between; 
    padding: 15px 20px; 
  }
  .nav-links { 
    border-color: var(--card-border-color); 
  }
  .logo { 
    flex-grow: 1; 
  }
}

@media (max-width: 360px) {
  .top-nav { padding: 15px; }
}
</style>