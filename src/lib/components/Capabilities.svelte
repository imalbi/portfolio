<script lang="ts">
	interface Group {
		title: string;
		summary: string;
		items: string;
	}

	const groups: Group[] = [
		{
			title: 'Interface & Design',
			summary:
				'Responsive web and mobile applications, design token systems, and WCAG AA accessibility.',
			items: 'SvelteKit / React / Next.js / React Native / TypeScript / Tailwind CSS'
		},
		{
			title: 'Backend & Real-time',
			summary:
				'Typed API surfaces, WebSocket transports, server-sent events, and runtime schema validation.',
			items: 'Node.js / Fastify / WebSockets / SSE / Zod / REST'
		},
		{
			title: 'Data & Edge Platform',
			summary:
				'Relational data modeling, schema migrations, serverless edge compute, and containerization.',
			items: 'PostgreSQL / Drizzle ORM / Cloudflare Workers / Open-Next / Docker'
		}
	];
</script>

<section class="sec">
	<h2 class="lbl">Capabilities</h2>
	<div class="caps">
		{#each groups as group (group.title)}
			<div class="cap">
				<h3>{group.title}</h3>
				<p class="summary">{group.summary}</p>
				<div class="cap-foot">
					<p class="items">{group.items}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.sec {
		padding-block: clamp(2.75rem, 5vw, 4.5rem);
		border-top: 1px solid var(--ink);
	}
	.caps {
		background: var(--ink);
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto 1fr auto;
		gap: 1px;
		border: 1px solid var(--ink);
	}
	.cap {
		background: var(--paper);
		padding: clamp(1.25rem, 2.5vw, 1.85rem);
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 3;
		gap: 0;
	}
	h3 {
		margin: 0 0 1rem;
		font-family: var(--display);
		text-transform: uppercase;
		letter-spacing: -0.02em;
		font-size: clamp(1.05rem, 1.35vw, 1.25rem);
		line-height: 1.15;
		color: var(--ink);
	}
	.summary {
		margin: 0 0 1.5rem;
		font-family: var(--body);
		font-size: 0.95rem;
		line-height: 1.55;
		color: var(--ink);
	}
	.cap-foot {
		border-top: 1px solid var(--ink);
		padding-top: 0.9rem;
	}
	.items {
		margin: 0;
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 11px;
		line-height: 1.8;
		color: var(--muted);
	}

	@media (max-width: 900px) {
		.caps {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
		.cap {
			display: flex;
			flex-direction: column;
		}
		.summary {
			margin-bottom: 1.25rem;
		}
	}
</style>
