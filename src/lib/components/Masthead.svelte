<section class="mast">
	<h1 class="d">Alberto<br />Cerqua</h1>

	<div class="portrait">
		<img src="/portrait.png" alt="Alberto Cerqua" width="520" height="650" />
	</div>

	<div class="meta">
		<span class="role">Full-stack developer</span>
		<span class="status muted">Open to opportunities</span>
	</div>
</section>

<style>
	.mast {
		padding-block: clamp(2.5rem, 6vw, 5rem) clamp(2rem, 4vw, 3rem);
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--gut);
		align-items: end;
	}
	h1 {
		grid-column: 1 / 9;
		font-size: clamp(2.75rem, 10.5vw, 8.75rem);
		margin: 0;
	}
	.portrait {
		grid-column: 9 / 13;
		aspect-ratio: 4 / 5;
		border: 1px solid var(--ink);
		overflow: hidden;
	}
	.portrait img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.meta {
		grid-column: 1 / 13;
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		justify-content: space-between;
		border-top: 2px solid var(--ink);
		padding-top: 0.6rem;
		margin-top: 0.5rem;
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 13px;
	}
	.role {
		font-weight: 600;
	}

	@media (max-width: 900px) {
		h1 {
			grid-column: 1 / 13;
		}
		.portrait {
			grid-column: 1 / 7;
			aspect-ratio: 1 / 1;
		}
	}
</style>
