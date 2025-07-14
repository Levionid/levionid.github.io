<script lang="ts">
</script>

<svelte:head>
	<title>404 - Вы упали в Пустоту | Lestix</title>
	<meta name="description" content="Этой страницы не существует." />
</svelte:head>

<div class="error-page-wrapper">
	<div class="void-particles">
		{#each Array(30) as _}
			<div
				class="particle"
				style="
                    width: {Math.random() * 2 + 1}px;
                    height: {Math.random() * 2 + 1}px;
                    left: {Math.random() * 100}%;
                    top: {Math.random() * 100}%;
                    animation-delay: {Math.random() * 10}s;
                    animation-duration: {Math.random() * 5 + 5}s;
                "
			></div>
		{/each}
	</div>

	<div class="error-container">
		<h1 class="glitch" data-text="404">404</h1>
		<h2 class="subtitle">Лееее братишка ты куда попал</h2>
		<p class="details">
			Этой страницы не существует, сами подумайте, изначально-то страниц быть не может. Получается так, что их кто-то создает. Я подозреваю, что в каджом пк сидит какое-то существо, которое их создает.
		</p>
		<a href="/" class="return-button">Вернуться на родину</a>
	</div>
</div>

<style>
	.error-page-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		width: 100%;
		padding: 40px 24px;
		background: radial-gradient(ellipse at bottom, #f0f2f5 0%, #dbe2e8 100%);
		color: #222;
		text-align: center;
		overflow: hidden;
		position: relative;
		transition: background-color 0.3s, color 0.3s;
	}

	.error-container {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.glitch {
		font-size: clamp(6rem, 20vw, 12rem);
		font-weight: 800;
		line-height: 1;
		position: relative;
		color: #222;
		text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		animation: glitch-main 5s infinite linear;
	}

	.glitch::before,
	.glitch::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
	}

	.glitch::before {
		left: 2px;
		text-shadow: -2px 0 #ff00c1;
		animation: glitch-1 5s infinite linear reverse;
	}

	.glitch::after {
		left: -2px;
		text-shadow:
			-2px 0 #00fff9,
			2px 2px #ff00c1;
		animation: glitch-2 5s infinite linear reverse;
	}

	.subtitle {
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 600;
		margin: 20px 0 10px;
		opacity: 0.9;
	}

	.details {
		font-size: 1rem;
		color: #555;
		line-height: 1.6;
		max-width: 400px;
	}

	.return-button {
		display: inline-block;
		margin-top: 32px;
		padding: 14px 28px;
		border: 2px solid rgba(0, 0, 0, 0.5);
		color: #222;
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: 50px;
		transition:
			background-color 0.2s ease,
			transform 0.2s ease;
	}

	.return-button:hover {
		background-color: rgba(0, 0, 0, 0.05);
		transform: scale(1.05);
	}

	.void-particles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	.particle {
		position: absolute;
		background: #333;
		border-radius: 50%;
		opacity: 0;
		animation-name: particle-animation;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	:global(body.dark-theme) .error-page-wrapper {
		background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
		color: #ffffff;
	}

	:global(body.dark-theme) .glitch {
		color: white;
		text-shadow:
			0 0 10px rgba(255, 255, 255, 0.3),
			0 0 20px rgba(255, 255, 255, 0.2);
	}

	:global(body.dark-theme) .details {
		color: #a9a9b3;
	}

	:global(body.dark-theme) .return-button {
		border-color: rgba(255, 255, 255, 0.8);
		color: #ffffff;
	}

	:global(body.dark-theme) .return-button:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	:global(body.dark-theme) .particle {
		background: white;
	}

	@keyframes particle-animation { from { transform: translateY(20px); opacity: 0; } 20% { opacity: 0.8; } to { transform: translateY(-100vh); opacity: 0; } }
	@keyframes glitch-1 { 0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); } 2% { clip-path: polygon(0 78%, 100% 78%, 100% 82%, 0 82%); } 4% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); } 6% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); } 8% { clip-path: polygon(0 40%, 100% 40%, 100% 42%, 0 42%); } 10%, 100% { clip-path: none; } }
	@keyframes glitch-2 { 0% { clip-path: polygon(0 78%, 100% 78%, 100% 99%, 0 99%); } 5% { clip-path: polygon(0 25%, 100% 25%, 100% 33%, 0 33%); } 8% { clip-path: polygon(0 13%, 100% 13%, 100% 34%, 0 34%); } 11% { clip-path: polygon(0 42%, 100% 42%, 100% 43%, 0 43%); } 15%, 100% { clip-path: none; } }
	@keyframes glitch-main { 2% { transform: translate(2px, -3px); } 4% { transform: translate(-3px, 2px); } 6% { transform: translate(0, 0); } 98% { transform: translate(0, 0); } 100% { transform: translate(-1px, 3px); } }
</style>