<figure>
	<div class="frame">
		<svg
			viewBox="0 0 900 230"
			role="img"
			aria-label="Request path: the browser calls a SvelteKit frontend, which calls a Fastify REST API. Zod validates every request and response at the API boundary. Drizzle ORM reads and writes PostgreSQL. A separate WebSocket channel connects the browser directly to Fastify for real-time updates."
		>
			<g font-family="IBM Plex Mono, monospace" font-size="10.5" letter-spacing="0.8">
				<rect x="8" y="88" width="122" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="24" y="110" fill="#0A0A0A">BROWSER</text>
				<text x="24" y="126" fill="#6B6B66">CLIENT</text>

				<rect x="186" y="88" width="140" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="202" y="110" fill="#0A0A0A">SVELTEKIT</text>
				<text x="202" y="126" fill="#6B6B66">ROUTES / VIEWS</text>

				<rect x="382" y="76" width="152" height="76" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="398" y="98" fill="#0A0A0A">FASTIFY</text>
				<text x="398" y="114" fill="#6B6B66">REST API</text>
				<text x="398" y="130" fill="#6B6B66">ZOD BOUNDARY</text>

				<rect x="590" y="88" width="128" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="606" y="110" fill="#0A0A0A">DRIZZLE</text>
				<text x="606" y="126" fill="#6B6B66">ORM</text>

				<rect x="774" y="88" width="118" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="790" y="110" fill="#0A0A0A">POSTGRES</text>
				<text x="790" y="126" fill="#6B6B66">DATA</text>

				<path d="M130 114 H178" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M178 109 L186 114 L178 119 Z" fill="#0A0A0A" stroke="none" />

				<path d="M326 114 H374" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M374 109 L382 114 L374 119 Z" fill="#0A0A0A" stroke="none" />

				<path d="M534 114 H582" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M582 109 L590 114 L582 119 Z" fill="#0A0A0A" stroke="none" />

				<path d="M718 114 H766" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M766 109 L774 114 L766 119 Z" fill="#0A0A0A" stroke="none" />

				<path d="M69 88 V40 H458 V68" fill="none" stroke="#E61919" stroke-width="2" />
				<path class="flow" d="M69 88 V40 H458 V68" fill="none" stroke="#F4F4F0" stroke-width="2" />
				<path d="M453 68 L458 76 L463 68 Z" fill="#E61919" stroke="none" />
				<text x="212" y="32" fill="#E61919">WEBSOCKET / REAL-TIME</text>

				<text x="330" y="196" fill="#6B6B66">EVERY BOUNDARY VALIDATED BEFORE IT IS TRUSTED</text>
			</g>
		</svg>
	</div>
	<figcaption class="m muted">Fig. 1 / Real-time channel in red</figcaption>
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

	/*
	 * A short paper-coloured gap travelling the WebSocket channel, so the diagram
	 * shows that this path is live rather than request-and-response like the rest.
	 */
	.flow {
		stroke-dasharray: 14 210;
		animation: flow 3.2s linear infinite;
	}
	@keyframes flow {
		from {
			stroke-dashoffset: 224;
		}
		to {
			stroke-dashoffset: 0;
		}
	}

	/*
	 * The global reduced-motion rule only halts the animation, which would strand
	 * the gap mid-path and read as a rendering fault. Remove the element instead.
	 */
	@media (prefers-reduced-motion: reduce) {
		.flow {
			display: none;
		}
	}
</style>
