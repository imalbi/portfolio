<section class="mast">
	<h1 class="d">Alberto<br />Cerqua</h1>

	<!-- TODO(content): placeholder. Replace with Alberto's real portrait, 1-bit dithered. -->
	<div class="portrait">
		<span class="m muted">Portrait / 1-bit dither</span>
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
		display: flex;
		align-items: flex-end;
		padding: 0.75rem;
		background-color: var(--paper);
		background-image: radial-gradient(var(--ink) 32%, transparent 33%);
		background-size: 7px 7px;
	}
	.portrait span {
		background: var(--paper);
		padding: 0.25rem 0.4rem;
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
