<script lang="ts">
	import type { Notification } from '$lib/stores/notifications';
	import { dismissNotification } from '$lib/stores/notifications';
	import { onMount } from 'svelte';

	export let notification: Notification;

	let element: HTMLElement;
	let isPaused = false;

	function swipeable(node: HTMLElement) {
		let x: number;
		let isSwiping = false;
		const swipeThreshold = node.clientWidth / 3;

		function handlePointerDown(event: PointerEvent) {
			if ((event.target as HTMLElement).closest('.close-btn')) return;

			x = event.clientX;
			isSwiping = true;
			isPaused = true;
			node.classList.add('swiping');

			node.addEventListener('pointermove', handlePointerMove);
			node.addEventListener('pointerup', handlePointerUp);
			node.addEventListener('pointercancel', handlePointerUp);
		}

		function handlePointerMove(event: PointerEvent) {
			if (!isSwiping) return;
			const dx = event.clientX - x;
			node.style.transform = `translateX(${dx}px)`;
		}

		function handlePointerUp(event: PointerEvent) {
			if (!isSwiping) return;

			const dx = event.clientX - x;
			node.classList.remove('swiping');
			node.style.transform = '';

			if (Math.abs(dx) > swipeThreshold) {
				dismissNotification(notification.id);
			} else {
				isPaused = false;
			}

			isSwiping = false;
			node.removeEventListener('pointermove', handlePointerMove);
			node.removeEventListener('pointerup', handlePointerUp);
			node.removeEventListener('pointercancel', handlePointerUp);
		}

		node.addEventListener('pointerdown', handlePointerDown);

		return {
			destroy() {
				node.removeEventListener('pointerdown', handlePointerDown);
			}
		};
	}

	onMount(() => {
		const timeoutId = setTimeout(() => {
			dismissNotification(notification.id);
		}, notification.timeout);

		return () => clearTimeout(timeoutId);
	});
</script>

<div
	bind:this={element}
	class="notification"
	use:swipeable
	role="alert"
	aria-live="assertive"
	on:mouseenter={() => (isPaused = true)}
	on:mouseleave={() => (isPaused = false)}
>
	{notification.message}
	<button
		class="close-btn"
		on:click={() => dismissNotification(notification.id)}
		aria-label="Закрыть уведомление"
	>
		×
	</button>
	<div
		class="progress-bar"
		style:animation-duration="{notification.timeout}ms"
		style:animation-play-state={isPaused ? 'paused' : 'running'}
	></div>
</div>

<style>
.notification {
  position: relative;
  background-color: var(--card-bg-color);
  color: var(--primary-text-color);
  padding: 18px 48px 18px 22px;
  border-radius: var(--border-radius-md);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--card-border-color);
  font-weight: 500;
  pointer-events: all;
  cursor: grab;
  overflow: hidden;
  user-select: none;
  touch-action: pan-y;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
body.dark-theme .notification {
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.25);
}
.notification:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.1);
}
body.dark-theme .notification:hover {
  box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.3);
}
.notification.swiping {
  cursor: grabbing;
  transition: none;
}

.notification .close-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  background: transparent;
  border: none;
  color: var(--secondary-text-color);
  font-size: 20px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.2s, background-color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.notification:hover .close-btn {
  opacity: 1;
  transform: scale(1);
}
.notification .close-btn:hover {
  background-color: var(--bg-color);
}

.notification .progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background-color: var(--accent-color);
  animation-name: shrink;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@media (max-width: 600px) {
	/* На мобильных крестик не нужен, только свайп */
  .notification .close-btn {
    display: none;
  }
  .notification {
    padding-right: 22px; /* Возвращаем padding, т.к. кнопки нет */
  }
}

@keyframes shrink {
  from { width: 100%; }
  to { width: 0%; }
}
</style>