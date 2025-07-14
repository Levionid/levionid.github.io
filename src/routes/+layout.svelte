<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { theme } from '$lib/stores/theme';
    import NotificationContainer from '$lib/components/NotificationContainer.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import './style.css';

    let isHomePage = false;
    $: isHomePage = $page.url.pathname === '/';

    onMount(() => {
        const redirectPath = sessionStorage.getItem('redirect');
        if (redirectPath) {
            sessionStorage.removeItem('redirect');
            if (window.location.pathname !== '/404') {
                goto('/404', { replaceState: true });
            }
        }

        const unsubscribe = theme.subscribe((value) => {
            if (typeof document !== 'undefined') {
                document.body.classList.toggle('dark-theme', value === 'dark');
            }
        });
        return unsubscribe;
    });
</script>

<svelte:body class:home-page={isHomePage} />

<NotificationContainer />

<Header />

<div class="page-container">
    <main>
        <slot />
    </main>
    <Footer />
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    main {
        flex-grow: 1;
    }
</style>