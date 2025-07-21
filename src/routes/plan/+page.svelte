<script lang="ts">
	import { onMount } from 'svelte';

	const SERVER_START_DATE = new Date('2025-07-22T00:00:00+05:00');

	const timelineStages = [
		{
			duration: 7,
			title: 'Неделя 1: Основание и Сплочение',
			goals: [
				'<b>Ограничение мира 1000x1000 блоков</b> для сплочения игроков и основания общего города.',
				'Проведение <b>первых выборов Мэра</b> в середине недели.',
				'Постройка первых домов, общих складов и центрального портала в Незер.',
				'Заложить фундамент Ратуши и центральной площади как первый общий проект.'
			]
		},
		{
			duration: 7,
			title: 'Неделя 2: Развитие и Первые Ивенты',
			goals: [
				'<b>Отключение ограничения границы мира.</b>',
				'Строительство общественных ферм (железо, опыт, еда) и начало прокладки основных туннелей в Незере.',
				'Подготовка ресурсов и снаряжения для совместного похода в Энд.'
			]
		},
		{
			duration: 7,
			title: 'Неделя 3: Открытие Новых Горизонтов',
			goals: [
				'Проведение <b>вторых выборов Мэра</b> и первая церемония <b>вручения номинаций</b> за успехи первых двух недель.',
				'Организация первого общего похода на Эндер Дракона.',
				'<b>Открытие Энда.</b>',
				'<b>Полное снятие ограничения мира:</b> свобода исследований!',
				'Основание торгового района и открытие первых магазинов. Проведение первого крупного ивента от Мэра.'
			]
		},
		{
			duration: 9,
			title: 'Неделя 4 и далее: Глобальные Проекты',
			goals: [
				'Совместная работа над масштабным проектом (например, осушение океанического монумента, постройка города в Энде).',
				'Проведение PvP-турниров, строительных конкурсов и других ивентов.',
				'В конце 4-й недели — <b>финальная церемония награждения</b> по номинациям за весь сезон.',
				'Организация "Прощального Пира" или "Парада Построек" для подведения итогов сезона.'
			]
		}
	];

	let currentStageIndex = -1;
	let daysSinceStart = 0;

	onMount(() => {
		const now = new Date();
		const diffTime = now.getTime() - SERVER_START_DATE.getTime();
		daysSinceStart = Math.max(0, diffTime / (1000 * 60 * 60 * 24));

		let cumulativeDays = 0;
		for (let i = 0; i < timelineStages.length; i++) {
			cumulativeDays += timelineStages[i].duration;
			if (daysSinceStart < cumulativeDays) {
				currentStageIndex = i;
				break;
			}
		}
	});

	function getStageStatus(index: number) {
		if (index < currentStageIndex) return 'completed';
		if (index === currentStageIndex) return 'active';
		return 'upcoming';
	}
</script>

<svelte:head>
	<title>Lestix - План Сезона</title>
	<meta property="og:title" content="Lestix - План Сезона" />
	<meta property="og:description" content="Планы и текущий этап развития сервера Lestix." />
	<meta property="og:url" content="https://levionid.github.io/plan" />
	<meta property="og:image" content="https://levionid.github.io/meta-image-plan.png" />
</svelte:head>

<header class="hero hero-small">
	<div class="hero-content">
		<h1>План Сезона</h1>
	</div>
</header>

<div class="main-content main-content-small-hero">
	<main>
		<div class="intro-block">
			<span class="tag">Дорожная карта</span>
			{#if currentStageIndex !== -1}
				<h1>
					Сейчас идёт: <span class="accent-text"
						>{@html timelineStages[currentStageIndex].title}</span
					>
				</h1>
				<p>
					Сезон начался <b>{Math.floor(daysSinceStart)}</b> {Math.floor(daysSinceStart) === 1
						? 'день'
						: 'дней'} назад. Этот план поможет нам вместе достичь главной цели — построить живое
					сообщество и получить максимум удовольствия от игры!
				</p>
			{:else if daysSinceStart <= 0}
				<h1>Сезон еще не начался!</h1>
				<p>
					Старт запланирован на {SERVER_START_DATE.toLocaleDateString('ru-RU', {
						day: 'numeric',
						month: 'long',
						year: 'numeric'
					})}. Готовьтесь!
				</p>
			{:else}
				<h1>Сезон завершен!</h1>
				<p>Спасибо всем за участие. Этот план остался в истории.</p>
			{/if}
		</div>

		<div class="timeline-container">
			{#each timelineStages as stage, i}
				<div class="timeline-item {getStageStatus(i)}">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<span class="stage-status">{getStageStatus(i)}</span>
						<h3>{@html stage.title}</h3>
						<p>Ключевые цели на этот период:</p>
						<ul>
							{#each stage.goals as goal}
								<li>{@html goal}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</main>
</div>

<style>
	.accent-text {
		color: var(--accent-color);
	}

	.timeline-container {
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: relative;
		margin-top: 30px;
	}

	.timeline-container::before {
		content: '';
		position: absolute;
		left: 19px;
		top: 10px;
		bottom: 10px;
		width: 2px;
		background-color: var(--card-border-color);
		z-index: 0;
	}

	.timeline-item {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		position: relative;
	}

	.timeline-marker {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 2px solid var(--card-border-color);
		background-color: var(--bg-color);
		flex-shrink: 0;
		z-index: 1;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.timeline-content {
		padding: 20px;
		border-radius: var(--border-radius-md);
		border: 1px solid var(--card-border-color);
		background-color: var(--card-bg-color);
		flex-grow: 1;
		transition: all 0.3s ease;
	}
	.timeline-content h3 {
		font-size: 20px;
		margin-bottom: 12px;
	}
	.timeline-content p {
		margin-bottom: 10px;
		font-weight: 500;
	}
	.timeline-content ul {
		padding-left: 20px;
		margin: 0;
		list-style-type: '✔ ';
	}
	.timeline-content li {
		padding-left: 8px;
		margin-bottom: 8px;
		color: var(--secondary-text-color);
	}
	.timeline-content li :global(b) {
		color: var(--primary-text-color);
	}

	/* Statuses */
	.stage-status {
		display: inline-block;
		padding: 4px 10px;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
		margin-bottom: 16px;
		letter-spacing: 0.5px;
	}

	/* Active Stage */
	.timeline-item.active .timeline-marker {
		border-color: var(--accent-color);
		background-color: var(--accent-color);
		transform: scale(1.1);
	}
	.timeline-item.active .timeline-marker::before {
		content: '▶';
		color: white;
		font-size: 16px;
	}
	.timeline-item.active .timeline-content {
		border-color: var(--accent-color);
		box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
	}
	.timeline-item.active .stage-status {
		background-color: var(--accent-color);
		color: white;
	}

	.timeline-item.completed .timeline-marker {
		background-color: var(--accent-color);
		border-color: var(--accent-color);
	}
	.timeline-item.completed .timeline-marker::before {
		content: '✓';
		color: white;
		font-size: 20px;
	}
	.timeline-item.completed {
		opacity: 0.7;
	}
	.timeline-item.completed .stage-status {
		background-color: var(--card-border-color);
		color: var(--secondary-text-color);
	}

	/* Upcoming Stage */
	.timeline-item.upcoming {
		opacity: 0.9;
	}
	.timeline-item.upcoming .stage-status {
		background-color: var(--card-bg-color);
		border: 1px solid var(--card-border-color);
		color: var(--secondary-text-color);
	}

	@media (max-width: 600px) {
		.timeline-container::before {
			left: 14px;
		}
		.timeline-marker {
			width: 30px;
			height: 30px;
		}
		.timeline-item.active .timeline-marker::before {
			font-size: 12px;
		}
		.timeline-item.completed .timeline-marker::before {
			font-size: 16px;
		}
	}
</style>