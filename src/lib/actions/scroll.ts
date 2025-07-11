/**
 * Плавно прокручивает страницу к элементу, соответствующему CSS-селектору.
 * @param selector CSS-селектор целевого элемента (например, '#my-id').
 */
export function scrollToTarget(selector: string) {
	// Проверяем, передан ли селектор
	if (!selector) return;
	
	// Находим целевой элемент в DOM
	const element = document.querySelector(selector);
	if (!element) return;

	// Определяем отступ в зависимости от ширины экрана,
	// чтобы заголовок не перекрывал контент
	let offset;
	const screenWidth = window.innerWidth;
	if (screenWidth < 600) {
		offset = 150; // Отступ для мобильных устройств
	} else {
		offset = 110; // Отступ для десктопов
	}

	// Рассчитываем итоговую позицию для прокрутки
	const elementPosition = element.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.pageYOffset - offset;

	// Выполняем плавную прокрутку
	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth'
	});
}