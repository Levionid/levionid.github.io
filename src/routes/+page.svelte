<script lang="ts">
	import { createNotification } from '$lib/stores/notifications';
	import reveal from '$lib/actions/reveal';

	const SERVER_IP = 'lestix.me';
	const SERVER_VERSION = '1.21.7';

	function handleScrollToDetails() {
		const detailsSection = document.getElementById('details');
		if (detailsSection) {
			detailsSection.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function handleCopyIP() {
		navigator.clipboard.writeText(SERVER_IP);
		createNotification('IP-адрес скопирован!', 3000);
	}
</script>

<svelte:head>
	<title>Lestix - Главная</title>
	<meta property="og:title" content="Lestix - Главная" />
	<meta property="og:description" content="Сервер с крутейшим сообществом и кучей эмоций!" />
	<meta property="og:url" content="https://levionid.github.io/" />
	<meta property="og:image" content="https://levionid.github.io/assets/meta-image.png" />
</svelte:head>

<div class="page-wrapper">
	<section class="home-hero">
		<div class="hero-content-container">
			<div class="text-content-hero">
				<h1>Lestix</h1>
				<p>Сервер с крутейшим сообществом и кучей эмоций!</p>
			</div>
			<button class="hero-action-button" on:click={handleScrollToDetails}>
				Начать играть
			</button>
		</div>
	</section>

	<section id="details" class="details-section ip-section">
		<div class="details-card-wrapper reveal-on-scroll" use:reveal>
			<div class="details-card">
				<div class="info-block">
					<span class="label">Версия</span>
					<span class="value version">{SERVER_VERSION}</span>
				</div>
				<div class="divider"></div>
				<div class="info-block">
					<span class="label">IP Адрес</span>
					<button class="value ip-address" on:click={handleCopyIP} title="Нажми, чтобы скопировать">
						{SERVER_IP}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path
								d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
							/></svg
						>
					</button>
				</div>
			</div>
		</div>
	</section>

	<section class="details-section about-section">
		<div class="details-container">
			<div class="text-content reveal-on-scroll" use:reveal>
				<div class="text-block">
					<span>Добро пожаловать!</span>
					<p>
						Lestix — это приватный сервер для друзей, созданный для комфортной совместной игры и
						реализации творческих идей.
					</p>
				</div>
				<div class="text-block">
					<span>Наше сообщество</span>
					<p>
						Мы ценим каждого игрока и стремимся создать дружелюбную атмосферу. Присоединяйся к
						нашему Discord, чтобы быть в курсе всех новостей, участвовать в обсуждениях и найти
						компанию для игры.
					</p>
				</div>
			</div>
			<div class="discord-widget-container reveal-on-scroll" use:reveal>
				<iframe
					src="https://discord.com/widget?id=704944416191807568&theme=dark"
					title="Discord Widget"
					frameborder="0"
					sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
				></iframe>
			</div>
		</div>
	</section>
</div>

<style>
.home-hero {
		height: 100vh;
		min-height: 700px;
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--hero-text-color);
		overflow: hidden;
	}

	.home-hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--bg-image-color);
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
			url('/background.png');
		background-size: contain;
		background-position: right 10% center;
		background-repeat: no-repeat;
		transition: all 0.3s ease-in-out;
	}

	.hero-content-container {
		position: relative;
		z-index: 3;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 40px;
		width: 90%;
		max-width: 1100px;
	}

.hero-content-container .text-content-hero {
	max-width: 500px;
}

.text-content-hero h1 {
	font-size: clamp(4rem, 10vw, 8rem);
	font-weight: 800;
	margin: 0;
	line-height: 1;
	color: #ffffff;
	letter-spacing: -0.05em;
	text-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
}

.text-content-hero p {
	font-size: clamp(1.1rem, 2.5vw, 1.3rem);
	max-width: 450px;
	margin-top: 16px;
	opacity: 0.8;
	line-height: 1.6;
	color: #e0e0e0;
}

.hero-action-button {
	display: flex;
	align-items: center;
	gap: 12px;
	background-color: #ffffff;
	color: #111111;
	border: none;
	border-radius: 12px;
	padding: 18px 32px;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.hero-action-button:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
}

.details-section {
	padding: 100px 40px 0 40px;
	background-color: var(--bg-color);
}

.ip-section {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 5;
	background: transparent;
}

.details-card-wrapper {
	width: 100%;
	max-width: 600px;
}

.details-card {
	background: var(--content-bg-color);
	border: 1px solid var(--card-border-color);
	border-radius: var(--border-radius-lg);
	padding: 32px 40px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 24px;
	box-shadow: var(--card-shadow);
	backdrop-filter: blur(10px);
}

.info-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	text-align: center;
}

.label {
	font-size: 0.9rem;
	font-weight: 500;
	color: var(--secondary-text-color);
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.value {
	font-weight: 700;
	color: var(--primary-text-color);
	font-size: 1.75rem;
}

.ip-address {
	display: flex;
	align-items: center;
	gap: 12px;
	background: var(--bg-color);
	padding: 8px 16px;
	border-radius: var(--border-radius-md);
	cursor: pointer;
	border: 1px solid transparent;
	transition:
		border-color 0.2s,
		background-color 0.2s;
}
.ip-address:hover {
	border-color: var(--accent-color);
	background-color: var(--card-bg-color);
}

.ip-address svg {
	opacity: 0.6;
	transition: opacity 0.2s;
}
.ip-address:hover svg {
	opacity: 1;
}

.divider {
	width: 1px;
	height: 60px;
	background-color: var(--card-border-color);
}

@media (max-width: 1000px) {
	.home-hero::before {
		background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url('/background.png');
			filter: blur(5px);
			transform: scale(1.1);
	}
}

@media (max-width: 768px) {
  .discord-widget-container iframe { height: 450px; }
	.home-hero {
			text-align: center;
			justify-content: center;
			align-items: flex-end;
			padding-bottom: 25vh;
			min-height: 600px;
		}

		.home-hero::before {
			background-size: cover;
			background-position: center center;
		}

		.hero-content-container {
			align-items: center;
			text-align: center;
			gap: 32px;
			padding-left: 0;
			margin-bottom: 100px;
		}
	.details-section {
		padding: 80px 30px 0 30px;
	}
}

@media (max-width: 480px) {
	.details-card {
		flex-direction: column;
		gap: 12px;
		padding: 12px;
	}
	.divider {
		width: 80%;
		height: 1px;
	}
}

.details-container {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 60px;
  align-items: start;
}
.details-container .text-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.discord-widget-container iframe {
  width: 100%;
  height: 500px;
  border-radius: var(--border-radius-md);
  box-shadow: var(--card-shadow);
  border: 1px solid var(--card-border-color);
}
</style>