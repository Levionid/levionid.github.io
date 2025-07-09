<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import NotificationContainer from '$lib/components/NotificationContainer.svelte';
	import Header from '$lib/components/Header.svelte';
	import './style.css';

	let isHomePage = false;
	$: isHomePage = $page.url.pathname === '/';

	onMount(() => {
		document.body.classList.toggle('dark-theme', $theme === 'dark');
		theme.subscribe((value) => {
			document.body.classList.toggle('dark-theme', value === 'dark');
		});
	});
</script>

<svelte:body class:home-page={isHomePage} />

<NotificationContainer />

<Header />

<slot />