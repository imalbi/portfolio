<section class="sec">
	<h2 class="lbl">Open source</h2>
	<div class="grid">
		<div class="who">
			<h3>fast-json-stringify</h3>
			<p class="eco m muted">Fastify ecosystem</p>
			<a class="pr" href="https://github.com/fastify/fast-json-stringify/pull/841">
				PR #841 / Merged
			</a>
		</div>
		<div class="what">
			<!-- TODO(content): the defect description is deliberately general. Replace with the
			     exact edge case the PR fixed, in Alberto's own words. -->
			<p class="prose">
				A serialization edge case in the JSON stringifier that Fastify uses on every response. The
				fix was reviewed and merged by the project maintainer.
			</p>
		</div>
	</div>
</section>

<style>
	.sec {
		padding-block: clamp(2.75rem, 5vw, 4.5rem);
		border-top: 1px solid var(--ink);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--gut);
		align-items: start;
	}
	.who {
		grid-column: 1 / 6;
	}
	.what {
		grid-column: 6 / 13;
	}
	h3 {
		font-family: var(--display);
		text-transform: uppercase;
		letter-spacing: -0.03em;
		font-size: clamp(1.5rem, 3.4vw, 2.25rem);
		line-height: 0.95;
		margin: 0 0 0.5rem;
		word-break: break-word;
	}
	.eco {
		margin: 0 0 1.1rem;
	}
	.pr {
		display: inline-block;
		border: 2px solid var(--ink);
		padding: 0.3rem 0.55rem;
		text-decoration: none;
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 13px;
		font-weight: 600;
	}
	.pr:hover {
		background: var(--hazard);
		border-color: var(--hazard);
		color: var(--paper);
	}
	.prose {
		margin: 0;
	}

	@media (max-width: 900px) {
		.who,
		.what {
			grid-column: 1 / 13;
		}
	}
</style>
