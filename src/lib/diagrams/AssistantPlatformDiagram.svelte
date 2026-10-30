<figure>
	<div class="frame">
		<svg
			viewBox="0 0 900 250"
			role="img"
			aria-label="Data flow: a user query is embedded with Gemini, matched against document embeddings stored in PostgreSQL with pgvector using cosine similarity, assembled into context, sent to Gemini with function-calling tools, and streamed back to the client over server-sent events."
		>
			<g font-family="IBM Plex Mono, monospace" font-size="10.5" letter-spacing="0.8">
				<rect x="8" y="100" width="118" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="24" y="122" fill="#0A0A0A">CLIENT</text>
				<text x="24" y="138" fill="#6B6B66">QUERY</text>

				<rect x="176" y="100" width="128" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="192" y="122" fill="#0A0A0A">EMBED</text>
				<text x="192" y="138" fill="#6B6B66">GEMINI</text>

				<rect x="354" y="30" width="152" height="68" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="370" y="52" fill="#E61919">PGVECTOR</text>
				<text x="370" y="68" fill="#E61919">COSINE</text>
				<text x="370" y="84" fill="#E61919">TOP-K</text>

				<rect x="354" y="134" width="152" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="370" y="156" fill="#0A0A0A">POSTGRES</text>
				<text x="370" y="172" fill="#6B6B66">DOCUMENTS</text>

				<rect x="556" y="100" width="152" height="68" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="572" y="122" fill="#0A0A0A">GEMINI</text>
				<text x="572" y="138" fill="#6B6B66">CONTEXT +</text>
				<text x="572" y="154" fill="#6B6B66">FUNCTION TOOLS</text>

				<rect x="758" y="100" width="134" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="774" y="122" fill="#0A0A0A">SSE STREAM</text>
				<text x="774" y="138" fill="#6B6B66">TO CLIENT</text>

				<path d="M126 126 H168" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M168 121 L176 126 L168 131 Z" fill="#0A0A0A" stroke="none" />

				<path d="M304 126 H330 V64 H346" fill="none" stroke="#E61919" stroke-width="2" />
				<path
					class="flow"
					d="M304 126 H330 V64 H346"
					fill="none"
					stroke="#F4F4F0"
					stroke-width="2"
				/>
				<path d="M346 59 L354 64 L346 69 Z" fill="#E61919" stroke="none" />

				<path d="M430 134 V106" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M425 106 L430 98 L435 106 Z" fill="#0A0A0A" stroke="none" />

				<path d="M506 64 L532 64 L532 126 L548 126" fill="none" stroke="#E61919" stroke-width="2" />
				<path
					class="flow flow-late"
					d="M506 64 L532 64 L532 126 L548 126"
					fill="none"
					stroke="#F4F4F0"
					stroke-width="2"
				/>
				<path d="M548 121 L556 126 L548 131 Z" fill="#E61919" stroke="none" />

				<path d="M708 126 H750" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M750 121 L758 126 L750 131 Z" fill="#0A0A0A" stroke="none" />

				<path
					d="M825 152 V210 H67 V160"
					fill="none"
					stroke="#0A0A0A"
					stroke-width="1"
					stroke-dasharray="3 4"
				/>
				<path d="M62 160 L67 152 L72 160 Z" fill="#0A0A0A" stroke="none" />
				<text x="338" y="232" fill="#6B6B66">TOKENS RENDERED AS THEY ARRIVE</text>
			</g>
		</svg>
	</div>
	<figcaption class="m muted scroll-hint">Fig. 1 / Retrieval path in red</figcaption>
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
	 * A short paper-coloured gap travelling along the retrieval path. It carries
	 * information the static diagram cannot: which way the data moves, and that
	 * the response arrives as a stream rather than in one piece.
	 */
	.flow {
		stroke-dasharray: 14 210;
		animation: flow 3.2s linear infinite;
	}
	.flow-late {
		animation-delay: 1.1s;
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
