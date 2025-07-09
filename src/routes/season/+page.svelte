<script lang="ts">
	import reveal from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>Lestix - О чем сезон?</title>
	<meta property="og:title" content="Lestix - О чем сезон?" />
	<meta property="og:description" content="Цели и планы текущего сезона на сервере." />
	<meta property="og:url" content="https://levionid.github.io/season.html" />
	<meta property="og:image" content="https://levionid.github.io/assets/meta-image.jpeg" />
</svelte:head>

<header class="hero hero-small">
	<div class="hero-content">
		<h1>Цели на сезон</h1>
	</div>
</header>

<div class="main-content main-content-small-hero reveal-on-scroll" use:reveal>
	<main>
		<div class="intro-block">
		<span class="tag">Сезон #6</span>
		<h1>Цель</h1>
		<p>
			Бла бла бла бла
		</p>
	</div>
		<div class="text-block">
			<span>Общая цель</span>
			<p>
				Наша задача — не просто выживать, а вместе строить и развиваться. Чтобы побороть
				<b>потерю интереса</b>, мы вводим общую цель — постройку <b>единого города</b>.
			</p>
			<p>
				Это не значит, что вы обязаны жить там и посвящать всё своё время застройке. Достаточно
				построить хотя бы один магазин или дом и провести к нему дорожку от спавна. Так мы создадим
				активное сообщество, центр для торговли и совместных событий, что сделает мир живее и
				интереснее для всех.
			</p>
		</div>
		<div class="text-block">
			<span>Развитие города</span>
			<p>
				Город должен начать развиваться уже со второй недели после старта сервера. Демократичным
				голосованием мы выберем мэра, у которого появятся определенные обязанности и привилегии.
			</p>
			<p>
				Во время выборов каждый кандидат должен будет выдвинуть свои предложения по развитию сервера
				и ивентам, чтобы сделать игру еще увлекательнее.
			</p>
		</div>
	</main>
</div>