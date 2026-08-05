<figure>
	<div class="frame">
		<svg
			viewBox="0 0 900 250"
			role="img"
			aria-label="Before and after. Inherited: three different ways of calling the API coexisting, no linter or formatter, native build output committed to git, and a development placeholder still serving invented data to a live screen. Stabilised: one typed client that new code is steered onto, linting and formatting enforced, build output excluded from the repository, and the remaining debt audited and prioritised rather than declared fixed."
		>
			<g font-family="IBM Plex Mono, monospace" font-size="10.5" letter-spacing="0.8">
				<text x="8" y="20" font-size="12" letter-spacing="1" fill="#6B6B66">INHERITED</text>
				<text x="482" y="20" font-size="12" letter-spacing="1" fill="#E61919">STABILISED</text>

				<line
					x1="450"
					y1="8"
					x2="450"
					y2="242"
					stroke="#0A0A0A"
					stroke-width="1"
					stroke-dasharray="3 4"
				/>

				<rect x="8" y="38" width="410" height="38" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="24" y="62" fill="#0A0A0A">THREE WAYS TO CALL THE API</text>

				<rect x="8" y="90" width="410" height="38" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="24" y="114" fill="#0A0A0A">NO LINTER, NO FORMATTER</text>

				<rect x="8" y="142" width="410" height="38" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="24" y="166" fill="#0A0A0A">NATIVE BUILD OUTPUT IN GIT</text>

				<rect x="8" y="194" width="410" height="38" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="24" y="218" fill="#0A0A0A">PLACEHOLDER ON A LIVE SCREEN</text>

				<rect x="482" y="38" width="410" height="38" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="498" y="62" fill="#0A0A0A">ONE TYPED CLIENT, MIGRATING</text>

				<rect x="482" y="90" width="410" height="38" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="498" y="114" fill="#0A0A0A">LINT AND FORMAT ENFORCED</text>

				<rect x="482" y="142" width="410" height="38" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="498" y="166" fill="#0A0A0A">BUILD OUTPUT OUT OF THE REPO</text>

				<rect x="482" y="194" width="410" height="38" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="498" y="218" fill="#0A0A0A">DEBT AUDITED AND PRIORITISED</text>

				<path d="M418 57 H468" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M468 52 L476 57 L468 62 Z" fill="#0A0A0A" stroke="none" />
				<path d="M418 109 H468" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M468 104 L476 109 L468 114 Z" fill="#0A0A0A" stroke="none" />
				<path d="M418 161 H468" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M468 156 L476 161 L468 166 Z" fill="#0A0A0A" stroke="none" />
				<path d="M418 213 H468" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M468 208 L476 213 L468 218 Z" fill="#0A0A0A" stroke="none" />
			</g>
		</svg>
	</div>
	<figcaption class="m muted">Fig. 1 / What changed, in red</figcaption>
</figure>

<style>
	figure {
		margin: 0;
	}
	.frame {
		border: 1px solid var(--ink);
		padding: clamp(1rem, 2.5vw, 1.75rem);
		overflow-x: auto;
	}
	svg {
		display: block;
		min-width: 660px;
		width: 100%;
		height: auto;
	}
	figcaption {
		margin-top: 0.8rem;
	}
</style>
