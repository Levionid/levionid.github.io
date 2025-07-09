export default function reveal(node: HTMLElement) {
	if (!node) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('active');
					observer.unobserve(node);
				}
			});
		},
		{
			threshold: 0.15
		}
	);

	observer.observe(node);

	return {
		destroy() {
			if (node) {
				observer.unobserve(node);
			}
		}
	};
}