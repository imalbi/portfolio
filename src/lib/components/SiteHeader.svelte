<header class="hdr">
	<a class="mark" href="/">A. Cerqua</a>
	<nav>
		<a href="/#index">Work</a>
		<a href="/cv/alberto-cerqua-cv.pdf">CV</a>
		<a href="mailto:alberto.cerqua@icloud.com">Email</a>
	</nav>
</header>

<style>
	.hdr {
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--ink);
	}
	a {
		text-decoration: none;
		font-family: var(--data);
		text-transform: uppercase;
		/* Hit area. The links are 11px type, below the 24px WCAG 2.2 target size. */
		padding-block: 0.5rem;
	}
	.mark {
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.1em;
	}
	nav {
		display: flex;
		gap: 1.75rem;
	}
	nav a {
		font-size: 11px;
		letter-spacing: 0.08em;
		/* "CV" alone is narrower than the 24px WCAG 2.2 target size. */
		min-width: 24px;
		text-align: center;
	}
	nav a:hover {
		color: var(--hazard);
	}
</style>
