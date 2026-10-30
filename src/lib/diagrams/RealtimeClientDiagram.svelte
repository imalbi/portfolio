<figure>
	<div class="frame">
		<svg
			viewBox="0 0 900 250"
			role="img"
			aria-label="A live call is carried over a real-time media service to a separate analysis engine, which writes one dense document per tick into a document store. An enrichment layer reads those documents and translates them into a stable wire shape, which is the only form every consumer sees: the websocket pushing to the client, the list endpoints, and the model analyzers. Relational application state is held separately in PostgreSQL. Replay scripts feed stored sessions back through the analyzers offline."
		>
			<g font-family="IBM Plex Mono, monospace" font-size="10.5" letter-spacing="0.8">
				<rect x="8" y="96" width="112" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="22" y="118" fill="#0A0A0A">LIVE CALL</text>
				<text x="22" y="134" fill="#6B6B66">LIVEKIT</text>

				<rect x="168" y="96" width="128" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="182" y="118" fill="#0A0A0A">ENGINE</text>
				<text x="182" y="134" fill="#6B6B66">NOT MINE</text>

				<rect x="344" y="96" width="128" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="358" y="118" fill="#0A0A0A">MONGO</text>
				<text x="358" y="134" fill="#6B6B66">RAW, PER TICK</text>

				<rect x="520" y="84" width="140" height="76" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="534" y="106" fill="#E61919">ENRICHMENT</text>
				<text x="534" y="122" fill="#E61919">LAYER</text>
				<text x="534" y="140" fill="#E61919">STABLE SHAPE</text>

				<rect x="716" y="40" width="176" height="44" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="730" y="58" fill="#0A0A0A">WEBSOCKET</text>
				<text x="730" y="74" fill="#6B6B66">TO CLIENT</text>

				<rect x="716" y="98" width="176" height="44" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="730" y="116" fill="#0A0A0A">LIST ENDPOINTS</text>
				<text x="730" y="132" fill="#6B6B66">HTTP</text>

				<rect x="716" y="156" width="176" height="44" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="730" y="174" fill="#0A0A0A">ANALYZERS</text>
				<text x="730" y="190" fill="#6B6B66">GEMINI</text>

				<rect x="168" y="188" width="128" height="44" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="182" y="206" fill="#0A0A0A">POSTGRES</text>
				<text x="182" y="222" fill="#6B6B66">APP STATE</text>

				<path d="M120 122 H160" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M160 117 L168 122 L160 127 Z" fill="#0A0A0A" stroke="none" />

				<path d="M296 122 H336" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M336 117 L344 122 L336 127 Z" fill="#0A0A0A" stroke="none" />

				<path d="M472 122 H512" fill="none" stroke="#E61919" stroke-width="2" />
				<path d="M512 117 L520 122 L512 127 Z" fill="#E61919" stroke="none" />

				<path d="M660 122 H684 V62 H708" fill="none" stroke="#E61919" stroke-width="2" />
				<path d="M708 57 L716 62 L708 67 Z" fill="#E61919" stroke="none" />
				<path d="M660 122 H708" fill="none" stroke="#E61919" stroke-width="2" />
				<path d="M708 115 L716 120 L708 125 Z" fill="#E61919" stroke="none" />
				<path d="M660 122 H684 V178 H708" fill="none" stroke="#E61919" stroke-width="2" />
				<path d="M708 173 L716 178 L708 183 Z" fill="#E61919" stroke="none" />

				<path
					d="M408 148 V224 H700 V210"
					fill="none"
					stroke="#0A0A0A"
					stroke-width="1"
					stroke-dasharray="3 4"
				/>
				<path d="M695 208 L700 200 L705 208 Z" fill="#0A0A0A" stroke="none" />
				<text x="424" y="240" fill="#6B6B66">REPLAY: STORED SESSIONS RE-RUN OFFLINE</text>
			</g>
		</svg>
	</div>
	<figcaption class="m muted scroll-hint">Fig. 1 / The stable contract, in red</figcaption>
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
