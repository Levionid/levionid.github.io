<!-- src/lib/components/Footer.svelte -->

<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="footer-content">
		<div class="copyright">
			<p>© {currentYear} Lestix. Все права защищены.</p>
			<p>Создано с ❤️ для нашего сообщества.</p>
		</div>
		<div class="footer-links">
			<a href="https://discord.com/invite/NGpPENZu" target="_blank" rel="noopener noreferrer">Discord</a>
			<a href="https://github.com/levionid/levionid.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 40px;
		background-color: var(--bg-color);
		border-top: 1px solid var(--card-border-color);
		transition: background-color var(--transition-speed) ease;
	}

	.footer-content {
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}

	.copyright {
		font-size: 14px;
		color: var(--secondary-text-color);
		line-height: 1.5;
	}

	.copyright p {
		margin: 0;
		font-size: 14px;
	}

	.footer-links {
		display: flex;
		gap: 24px;
	}

	.footer-links a {
		font-size: 15px;
		font-weight: 500;
		color: var(--secondary-text-color);
		text-decoration: none;
		transition: color var(--transition-speed) ease;
	}

	.footer-links a:hover {
		color: var(--accent-color);
	}

	@media (max-width: 600px) {
		.footer-content {
			flex-direction: column;
			gap: 24px;
			text-align: center;
		}
	}
</style>