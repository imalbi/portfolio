<figure>
	<div class="frame">
		<div class="preview-grid">
			<div class="pane mobile-pane">
				<div class="pane-header">
					<span class="indicator"></span>
					<span class="pane-label">MOBILE / INSTAGRAM TRAFFIC · 390PX</span>
				</div>
				<div class="image-box">
					<img
						src="/work/personal-trainer/mobile-hero.webp"
						alt="Personal trainer landing page mobile viewport"
						width="390"
						height="844"
						loading="lazy"
					/>
				</div>
			</div>

			<div class="pane desktop-pane">
				<div class="pane-header">
					<span class="indicator"></span>
					<span class="pane-label">DESKTOP / EDITORIAL HERO · 1440PX</span>
				</div>
				<div class="image-box">
					<img
						src="/work/personal-trainer/desktop-hero.webp"
						alt="Personal trainer landing page desktop editorial hero"
						width="1440"
						height="900"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
	<figcaption class="m muted">
		Fig. 2 / Interface: mobile-first Instagram landing flow (left) and editorial desktop hero (right)
	</figcaption>
</figure>

<style>
	figure {
		margin: 0;
	}

	.frame {
		border: 1px solid var(--ink);
		padding: clamp(1rem, 2vw, 1.5rem);
		background: #0d0d0f;
	}

	.preview-grid {
		display: grid;
		grid-template-columns: minmax(240px, 300px) 1fr;
		gap: clamp(1rem, 2vw, 1.5rem);
		align-items: start;
	}

	.pane {
		display: flex;
		flex-direction: column;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: #161519;
		overflow: hidden;
	}

	.pane-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: #111014;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.indicator {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--hazard);
		display: inline-block;
	}

	.pane-label {
		font-family: var(--data);
		font-size: 10px;
		letter-spacing: 0.08em;
		color: #a0a09a;
		text-transform: uppercase;
	}

	.image-box {
		width: 100%;
		line-height: 0;
	}

	.image-box img {
		width: 100%;
		height: auto;
		display: block;
	}

	figcaption {
		margin-top: 0.8rem;
	}

	@media (max-width: 820px) {
		.preview-grid {
			grid-template-columns: 1fr;
		}

		.mobile-pane {
			max-width: 360px;
			margin: 0 auto;
		}
	}
</style>
