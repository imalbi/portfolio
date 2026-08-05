<figure>
	<div class="frame">
		<svg
			viewBox="0 0 900 260"
			role="img"
			aria-label="Before and after taking over the codebase. Inherited: route handlers with no input validation, untyped modules with implicit any throughout, errors that were swallowed so failures stayed invisible, and database writes with no transaction boundary. Stabilised: Zod validation at every boundary rejecting bad input early, types introduced incrementally at the edges, structured logging so failures surface fast, and writes made transactional for a consistent state on failure."
		>
			<g font-family="IBM Plex Mono, monospace" font-size="10.5" letter-spacing="0.8">
				<text x="8" y="20" font-size="12" letter-spacing="1" fill="#6B6B66">INHERITED</text>
				<text x="478" y="20" font-size="12" letter-spacing="1" fill="#E61919">STABILISED</text>

				<path d="M450 20 V248" fill="none" stroke="#0A0A0A" stroke-width="1" stroke-dasharray="3 4" />

				<rect x="8" y="40" width="420" height="42" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="22" y="57" fill="#0A0A0A">ROUTE HANDLERS</text>
				<text x="22" y="73" fill="#6B6B66">NO INPUT VALIDATION</text>

				<rect x="8" y="94" width="420" height="42" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="22" y="111" fill="#0A0A0A">UNTYPED MODULES</text>
				<text x="22" y="127" fill="#6B6B66">IMPLICIT ANY THROUGHOUT</text>

				<rect x="8" y="148" width="420" height="42" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="22" y="165" fill="#0A0A0A">ERRORS SWALLOWED</text>
				<text x="22" y="181" fill="#6B6B66">FAILURES STAYED INVISIBLE</text>

				<rect x="8" y="202" width="420" height="42" fill="none" stroke="#0A0A0A" stroke-width="1" />
				<text x="22" y="219" fill="#0A0A0A">WRITES UNGUARDED</text>
				<text x="22" y="235" fill="#6B6B66">NO TRANSACTION BOUNDARY</text>

				<rect x="478" y="40" width="414" height="42" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="492" y="57" fill="#E61919">ZOD AT THE BOUNDARY</text>
				<text x="492" y="73" fill="#E61919">BAD INPUT REJECTED EARLY</text>

				<rect x="478" y="94" width="414" height="42" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="492" y="111" fill="#E61919">TYPES AT THE EDGES</text>
				<text x="492" y="127" fill="#E61919">MIGRATED INCREMENTALLY</text>

				<rect x="478" y="148" width="414" height="42" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="492" y="165" fill="#E61919">STRUCTURED LOGGING</text>
				<text x="492" y="181" fill="#E61919">FAILURES SURFACE FAST</text>

				<rect x="478" y="202" width="414" height="42" fill="none" stroke="#E61919" stroke-width="2" />
				<text x="492" y="219" fill="#E61919">TRANSACTIONAL WRITES</text>
				<text x="492" y="235" fill="#E61919">CONSISTENT ON FAILURE</text>
			</g>
		</svg>
	</div>
	<figcaption class="m muted">Fig. 1 / Changed components in red</figcaption>
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
