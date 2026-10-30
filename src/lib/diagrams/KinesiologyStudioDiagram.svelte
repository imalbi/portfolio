<figure>
	<div class="frame">
		<svg
			viewBox="0 0 900 250"
			role="img"
			aria-label="A mobile visitor from Instagram reaches the Cloudflare edge worker, which serves static assets and renders server-side pages. On contact submission, the edge handler dispatches validated leads directly to a private Telegram bot for instant mobile notification without domain dependencies."
		>
			<g font-family="IBM Plex Mono, monospace" font-size="10.5" letter-spacing="0.8">
				<!-- Visitor block -->
				<rect x="8" y="96" width="130" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="22" y="118" fill="#0A0A0A">VISITOR</text>
				<text x="22" y="134" fill="#6B6B66">INSTAGRAM / WEB</text>

				<!-- Edge worker block -->
				<rect x="194" y="84" width="170" height="76" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="208" y="106" fill="#E61919">CLOUDFLARE EDGE</text>
				<text x="208" y="122" fill="#E61919">OPEN-NEXT WORKER</text>
				<text x="208" y="140" fill="#E61919">SSR + ASSETS</text>

				<!-- Content / architecture block -->
				<rect x="420" y="40" width="170" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="434" y="62" fill="#0A0A0A">CONTENT</text>
				<text x="434" y="78" fill="#6B6B66">NEXT-INTL SSR</text>

				<!-- Structured data block -->
				<rect x="420" y="156" width="170" height="52" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="434" y="178" fill="#0A0A0A">LOCAL SEO</text>
				<text x="434" y="194" fill="#6B6B66">JSON-LD SUSA / TO</text>

				<!-- Lead dispatch block -->
				<rect x="646" y="84" width="246" height="76" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="660" y="106" fill="#E61919">INSTANT LEAD DISPATCH</text>
				<text x="660" y="122" fill="#0A0A0A">TELEGRAM BOT API</text>
				<text x="660" y="140" fill="#6B6B66">DIRECT MOBILE PUSH</text>

				<!-- Connectors -->
				<!-- Visitor to Edge -->
				<path d="M138 122 H186" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M186 117 L194 122 L186 127 Z" fill="#0A0A0A" stroke="none" />

				<!-- Edge to Localization -->
				<path d="M364 122 H392 V66 H412" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M412 61 L420 66 L412 71 Z" fill="#0A0A0A" stroke="none" />

				<!-- Edge to SEO -->
				<path d="M364 122 H392 V182 H412" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<path d="M412 177 L420 182 L412 187 Z" fill="#0A0A0A" stroke="none" />

				<!-- Edge to Lead Dispatch -->
				<path d="M364 122 H638" fill="none" stroke="#E61919" stroke-width="2" />
				<path d="M638 117 L646 122 L638 127 Z" fill="#E61919" stroke="none" />
			</g>
		</svg>
	</div>
	<figcaption class="m muted scroll-hint">Fig. 1 / Edge delivery and instant Telegram lead dispatch, in red</figcaption>
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
