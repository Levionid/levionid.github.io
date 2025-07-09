<script lang="ts">
	import reveal from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>Lestix - Важное</title>
	<meta property="og:title" content="Lestix - Важное" />
	<meta
		property="og:description"
		content="Решение проблемы двухнедельной фазы и сохранение интереса к игре."
	/>
	<meta property="og:url" content="https://levionid.github.io/important.html" />
	<meta property="og:image" content="https://levionid.github.io/assets/meta-image.jpeg" />
</svelte:head>

<header class="hero hero-small">
	<div class="hero-content">
		<h1>Важная информация</h1>
	</div>
</header>

<div class="main-content main-content-small-hero reveal-on-scroll" use:reveal>
	<div class="intro-block">
		<span class="tag">Проблема</span>
		<h1>Двухнедельная фаза</h1>
		<p>
			Все мы знаем об эффекте <b>двухнедельной фазы</b>, когда мы спидраним майн, строим дом и
			больше <b>не видим смысла</b> в игре. Этот документ направлен на <b>решение</b> этой
			проблемы и определение <b>цели</b> самого сервера.
		</p>
	</div>
	<main>
		<p>Причины этой проблемы:</p>
		<div class="blocks">
			<div class="block">
				<h2>Спидран</h2>
				<p>
					Наш сервер - это не гонка за тем, у кого больше ресов. Давайте играть вместе, чтобы весело
					проводить время, а не гриндить.
				</p>
			</div>
			<div class="block">
				<h2>Изоляция</h2>
				<p>
					Уходя за тысячи блоков, ты создаёшь себе одиночный мир на многопользовательском сервере.
					Играть вместе - интереснее.
				</p>
			</div>
			<div class="block">
				<h2>Игнорирование других</h2>
				<p>
					Не обращая внимания на людей, ты упускаешь самое главное. Общаясь, торгуя и создавая
					проекты, играть веселее.
				</p>
			</div>
			<div class="block">
				<h2>Гриферство</h2>
				<p>
					Хочешь взорвать дом, украсть вещи и покинуть сервер на первой неделе? Оригинально)
				</p>
			</div>
			<div class="block">
				<h2>Отсутствие новизны</h2>
				<p>
					Игра быстро превращается в рутину, когда нет новых испытаний. Без ивентов и общих целей
					становится скучно.
				</p>
			</div>
			<div class="block">
				<h2>Отсутствие общего проекта</h2>
				<p>
					Ты выживаешь не один. Вместе мы можем сделать что-то грандиозное. Воспоминания и общение
					- вот что нам нужно.
				</p>
			</div>
		</div>
	</main>
</div>