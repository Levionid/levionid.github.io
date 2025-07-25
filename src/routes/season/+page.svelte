<script lang="ts">
	import reveal from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>Lestix - О чем сезон?</title>
	<meta property="og:title" content="Lestix - О чем сезон?" />
	<meta property="og:description" content="Цели и планы текущего сезона на сервере." />
	<meta property="og:url" content="https://levionid.github.io/season" />
	<meta property="og:image" content="https://levionid.github.io/meta-image-season.png" />
</svelte:head>

<header class="hero hero-small">
	<div class="hero-content">
		<h1>Цели на сезон</h1>
	</div>
</header>

<div class="main-content main-content-small-hero">
	<main>
		<div class="intro-block">
			<span class="tag">Сезон #6</span>
			<h1>Главная цель: Построить живое сообщество</h1>
			<p>
				Каждый сезон мы сталкиваемся с <a href="/important">"проблемой двухнедельной фазы"</a>: быстрый
				старт, развитие и последующая потеря интереса. В этот раз мы решим её не модами, а совместной
				игрой и новой генерацией. Наша главная цель - превратить сервер из набора одиночных баз в процветающий город,
				полный жизни и событий.
			</p>
		</div>

		<div class="text-block">
			<h2>Город - наше общее дело</h2>
			<p>
				Чтобы победить <a href="/important#isolation">изоляцию</a> и
				<a href="/important#project">отсутствие общего проекта</a>, мы призываем всех строить свои
				дома и проекты в пределах 1000 блоков от спавна. Это не значит, что вы обязаны жить в тесноте.
				Это значит, что мы создаем единое пространство для торговли, общения и совместных ивентов.
			</p>
			<p>
				Ваш вклад, будь то красивый дом, автоматическая ферма или просто магазинчик на рыночной
				площади, - это вклад в общую цель. Это создаст мир, в котором интересно находиться даже после
				убийства всех боссов.
			</p>
		</div>

		<div class="text-block">
			<span class="tag">Ключевая роль</span>
			<h2>Институт Мэрства</h2>
			<p>
				Для организации городской жизни и решения проблемы
				<a href="/important#novelty">отсутствия новизны</a>, мы вводим должность
				<strong>Мэра Города</strong>. Это не администратор, а избранный игроками лидер-организатор,
				чья задача - делать игру интересной для всех.
			</p>
		</div>

		<div class="text-block">
			<h2>Роль и обязанности Мэра</h2>
			<p>Мэр - это "сердце" нашего сообщества. Его основные задачи:</p>
			<ul>
				<li>
					<strong>Организация ивентов:</strong> Придумывать и проводить мероприятия - от строительных
					конкурсов и рыночных дней до совместных походов на боссов.
				</li>
				<li>
					<strong>Координация городских проектов:</strong> Инициировать постройку общественных зданий
					(арена, общие фермы, ратуша) и дорог, собирая для этого ресурсы и добровольцев.
				</li>
				<li>
					<strong>Коммуникация:</strong> Быть голосом сообщества, проводить опросы и объявлять о
					событиях в специальном Discord-канале.
				</li>
			</ul>
		</div>

		<div class="text-block">
			<h2>Как стать Мэром?</h2>
			<p>Выборы Мэра - это наш первый общий ивент! Процесс будет простым и демократичным:</p>
			<ol>
				<li>
					<strong>Выдвижение:</strong> В первые дни сезона любой желающий может выдвинуть свою
					кандидатуру.
				</li>
				<li>
					<strong>Предвыборная кампания:</strong> Кандидат представляет свою программу: "Я предлагаю
					построить PvP-арену!" или "Давайте проведем еженедельный торговый день!".
				</li>
				<li>
					<strong>Голосование:</strong> Мы проведем открытое голосование в Discord. Срок полномочий
					мэра - <strong>две недели</strong>, чтобы каждый мог себя проявить.
				</li>
			</ol>
		</div>

		<div class="text-block" id="motivation">
			<span class="tag">Мотивация</span>
			<h2>Почему стоит быть активным?</h2>
			<p>
				Мы понимаем, что организация требует усилий. Поэтому мы создали систему мотивации как для
				Мэра, так и для всех активных игроков. Это наш способ сказать "спасибо" тем, кто помогает
				бороться с <a href="/important#ignoring">игнорированием</a> и делает сервер лучше.
			</p>
		</div>

		<div class="text-block">
			<h2>Мотивация для Мэра</h2>
			<p>
				Роль Мэра должна быть престижной и удобной, но не давать нечестных преимуществ.
			</p>
			<ul>
				<li>
					<strong>Символы власти:</strong> Уникальный префикс <strong>[Мэр]</strong> в чате, доступ
					к каналу <code>#анонсы-мэрии</code> в Discord и личный кабинет в здании Ратуши на спавне.
				</li>
				<li>
					<strong>Инструменты для работы:</strong> Доступ к "Городскому бюджету" - специальному складу
					с ресурсами, пополняемому за счет пожертвований и ивентов. Администрация предоставляет
					стартовый капитал, чтобы Мэр мог сразу начать действовать.
				</li>
				<li>
					<strong>Награда от администрации:</strong> В конце успешного срока Мэр получает ценный, но
					честный приз (например, элитры, маяк или уникальный декоративный предмет) в знак
					благодарности за проделанную работу.
				</li>
			</ul>
		</div>

		<div class="text-block">
			<h2>Мотивация для игроков</h2>
			<p>
				Ваша активность - ключ к успеху! Администрация и Мэр будут поощрять тех, кто вносит вклад в
				общую цель.
			</p>
			<ul>
				<li>
					<strong>Призы на ивентах:</strong> Победители конкурсов и самые активные участники событий,
					организованных Мэром, будут получать ресурсы, алмазы или редкие предметы из "Городского
					бюджета" или от администрации.
				</li>
				<li>
					<strong>Общественное признание и Номинации:</strong> В конце каждой недели Мэр и
					администрация будут подводить итоги и награждать выдающихся игроков в различных номинациях.
					Их имена будут увековечены на "Доске почета" на спавне. Номинации включают:
					<ul>
						<li>
							<strong>"Боб строитель"</strong> - за самую красивую и креативную постройку.
						</li>
						<li>
							<strong>"Сын фермера"</strong> - за создание самой полезной общественной фермы или
							механизма.
						</li>
						<li>
							<strong>"Продажная шлюха"</strong> - самому активному и честному торговцу, который
							способствует развитию экономики.
						</li>
						<li>
							<strong>"Блядская Даша Путишествиница"</strong> - самому отважному искателю
							приключений, который чаще всех организовывал или участвовал в походах на боссов и в
							данжи.
						</li>
						<li>Ну или чет такое, мы еще напридумываем пока будем играть</li>
					</ul>
				</li>
				<li>
					<strong>Общая выгода:</strong> Участвуя в строительстве общественных ферм или в походах за
					ресурсами, вы получаете прямой доступ к их плодам. Вместе мы можем построить то, что не
					под силу одному.
				</li>
			</ul>
			<p>
				<strong>
					Вместе мы сможем преодолеть все те проблемы, что описаны на странице
					<a href="/important">"Важная информация"</a>, и построить сервер, на котором хочется
					играть до самого последнего дня.
				</strong>
			</p>
		</div>
	</main>
</div>

<style>
	a {
		text-decoration: none;
		color: unset;
		font-weight: bold;
		border-bottom: 2px solid rgba(13, 115, 255, 0.5);
		transition: all 0.2s ease-in-out;
	}
	a:hover {
		background-color: rgba(13, 115, 255, 0.1);
		border-bottom-color: rgba(13, 115, 255, 1);
	}
	ul,
	ol {
		padding-left: 20px;
	}
	li {
		margin-bottom: 10px;
	}
	ul ul li {
		margin-top: 10px;
	}
</style>