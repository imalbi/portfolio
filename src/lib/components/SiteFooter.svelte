<footer class="ftr">
	<div class="links">
		<a href="mailto:alberto.cerqua@icloud.com">Email</a>
		<a href="https://www.linkedin.com/in/alberto-cerqua-433059361/">LinkedIn</a>
		<a href="https://github.com/imalbi">GitHub</a>
		<a href="/cv/alberto-cerqua-cv.pdf">CV / PDF</a>
		<a href="/colophon">Colophon</a>
	</div>
	<span class="place">Turin, Italy</span>
</footer>

<style>
	.ftr {
		border-top: 2px solid var(--ink);
		padding-block: 2rem 3rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 2rem;
		justify-content: space-between;
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 13px;
	}
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 1.5rem;
	}
	a {
		text-decoration: underline;
		text-decoration-color: var(--muted);
		text-decoration-thickness: 1px;
		text-underline-offset: 4px;
		/* Hit area, so a thumb can land on it (WCAG 2.2 target size). */
		padding-block: 0.45rem;
	}
	a:hover {
		color: var(--hazard);
		text-decoration-color: var(--hazard);
	}
	.place {
		color: var(--muted);
		font-size: 11px;
		letter-spacing: 0.08em;
	}
</style>
