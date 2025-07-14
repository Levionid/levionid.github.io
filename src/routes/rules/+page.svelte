<svelte:head>
	<title>Lestix - Правила</title>
	<meta property="og:title" content="Lestix - Правила" />
	<meta property="og:description" content="Полный свод правил сервера Lestix." />
	<meta property="og:url" content="https://levionid.github.io/rules" />
	<meta property="og:image" content="https://levionid.github.io/meta-image.png" />
</svelte:head>

<header class="hero hero-small">
	<div class="hero-content">
		<h1>Правила сервера</h1>
	</div>
</header>

<div class="main-content main-content-small-hero">
	<main>
		<div class="text-block" id="building-rules">
			<h2>Строительство и Ресурсы</h2>
			<ul>
				<li><b>Запрещено:</b> гриферство, воровство, порча ландшафта.</li>
				<li>Не трогайте чужие постройки и вещи без разрешения владельца.</li>
				<li>Убирайте за собой мусор (столбы 1x1, висящие деревья).</li>
			</ul>
		</div>

		<div class="text-block" id="community-rules">
			<h2>Взаимодействие и Сообщество</h2>
			<ul>
				<li>
					Ключевые ивенты (убийство Дракона, Визера) проводятся сообща. <b>Не спидранить.</b>
				</li>
				<li>PvP разрешено <b>только</b> по обоюдному согласию всех участников.</li>
				<li><b>Запрещены:</b> оскорбления, токсичное поведение и спам в чате.</li>
			</ul>
		</div>

		<div class="text-block" id="technical-rules">
			<h2>Технические Правила</h2>
			<ul>
				<li><b>Запрещены:</b> любые читы (X-Ray, killaura, fly-hack и т.д.) и чит-клиенты.</li>
				<li>
					<b>Запрещены:</b> лаг-машины и механизмы, вызывающие лаги. Крупные фермы строятся
					только после согласования с администрацией.
				</li>
				<li><b>Запрещены:</b> дюп и использование багов игры в корыстных целях.</li>
			</ul>
		</div>

		<div class="text-block" id="punishments">
			<h2>Наказания</h2>
			<p>
				Нарушение правил карается от временного до перманентного бана. Для жалобы создайте тикет в
				<a href="https://discord.com/channels/704944416191807568/1153023834430119947"
					>#жалобы</a
				>, приложив <b>доказательства</b>: ник нарушителя, координаты и скриншоты/видео.
			</p>
		</div>

		<div class="text-block" id="punishment-grid">
			<h2>Сетка наказаний и сроки блокировок</h2>
			<p>
				Эта система создана для прозрачности. Администрация оставляет за собой право изменять срок
				наказания в зависимости от контекста и тяжести нарушения. Повторные нарушения ведут к
				более строгим мерам.
			</p>

			<div class="punishment-category">
				<h3>Категория 1: Незначительные нарушения</h3>
				<p>
					<b>Нарушения:</b> Случайный гриферизм (1-5 блоков) с быстрой компенсацией, нецензурная
					лексика без прямого оскорбления, постройка "мусорных" объектов (столбы 1x1).
				</p>
				<ul>
					<li><b>Первое нарушение:</b> Устное предупреждение.</li>
					<li><b>Повторное нарушение:</b> Временный бан на <b>1 день</b>.</li>
				</ul>
			</div>

			<div class="punishment-category">
				<h3>Категория 2: Нарушения средней тяжести</h3>
				<p>
					<b>Нарушения:</b> Умышленный гриферизм в небольших масштабах, воровство незначительных
					ресурсов, токсичное поведение и прямые оскорбления игроков, постройка лаг-машин по
					неосторожности.
				</p>
				<ul>
					<li><b>Первое нарушение:</b> Временный бан на <b>3 дня</b>.</li>
					<li><b>Повторное нарушение:</b> Временный бан на <b>7 дней</b>.</li>
				</ul>
			</div>

			<div class="punishment-category">
				<h3>Категория 3: Тяжкие нарушения</h3>
				<p>
					<b>Нарушения:</b> Использование читов (X-Ray, Killaura, Fly-hack и т.д.), намеренная
					постройка лаг-машин, дюп предметов, крупномасштабный гриферизм и воровство, разжигание
					ненависти, распространение личной информации.
				</p>
				<ul>
					<li><b>Любое нарушение из этой категории:</b> <b>Перманентный бан без предупреждения.</b></li>
				</ul>
			</div>
		</div>
	</main>
</div>

<style>
	.text-block h2 {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 24px;
	}

	.text-block ul {
		list-style-type: none;
		padding-left: 10px;
	}

	.text-block li {
		position: relative;
		padding-left: 25px;
		margin-bottom: 12px;
		line-height: 1.6;
	}

	.text-block li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--accent-color);
		font-weight: bold;
		font-size: 1.2em;
		line-height: 1;
	}

	.punishment-category {
		margin-top: 24px;
		padding: 24px;
		border: 1px solid var(--card-border-color);
		border-radius: var(--border-radius-md);
		background-color: var(--card-bg-color);
	}

	.punishment-category h3 {
		color: var(--primary-text-color);
		font-size: 20px;
		margin-bottom: 8px;
	}

	a {
		font-weight: bold;
		color: var(--primary-text-color);
		text-decoration: none;
		border-bottom: 2px solid var(--accent-color-translucent, rgba(13, 115, 255, 0.5));
		transition: all 0.2s ease-in-out;
		padding-bottom: 1px;
		border-radius: 2px 2px 0 0;
	}

	a:hover {
		color: var(--primary-text-color);
		background-color: var(--accent-color-translucent, rgba(13, 115, 255, 0.1));
		border-bottom-color: var(--accent-color, #0d73ff);
	}
</style>