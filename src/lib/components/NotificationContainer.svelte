<script lang="ts">
	import { notifications } from '$lib/stores/notifications';
	import { fly } from 'svelte/transition';
	import Notification from '$lib/components/Notification.svelte';
</script>

<div id="notification-container">
	{#each $notifications as notification (notification.id)}
		<div in:fly={{ x: 300, duration: 400 }} out:fly={{ x: 300, duration: 300 }}>
			<Notification {notification} />
		</div>
	{/each}
</div>

<style>
#notification-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 16px;
  pointer-events: none;
}

@media (max-width: 600px) {
	#notification-container {
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    right: auto;
    bottom: 16px;
  }
}
</style>