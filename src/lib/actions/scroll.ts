export function scrollToTarget(selector: string) {
	if (!selector) return;
	
	const element = document.querySelector(selector);
	if (!element) return;

	let offset;
	const screenWidth = window.innerWidth;
	if (screenWidth < 600) {
		offset = 100; // Отступ для мобильных устройств
	} else {
		offset = 110; // Отступ для десктопов
	}

	const elementPosition = element.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.pageYOffset - offset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth'
	});
}