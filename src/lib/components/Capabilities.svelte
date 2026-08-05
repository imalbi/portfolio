<script lang="ts">
	interface Group {
		title: string;
		items: string;
	}

	const groups: Group[] = [
		{
			title: 'Interface',
			items: 'Svelte / SvelteKit / React / React Native / TypeScript / Tailwind CSS'
		},
		{
			title: 'Services and data',
			items:
				'Node.js / Fastify / REST / WebSockets / SSE / Zod / PostgreSQL / Drizzle ORM / MongoDB / Docker'
		},
		{
			title: 'Retrieval and models',
			items: 'Google Gemini / LangChain / RAG / pgvector / Embeddings / Function calling'
		}
	];
</script>

<section class="sec">
	<h2 class="lbl">Capabilities</h2>
	<div class="caps">
		{#each groups as group (group.title)}
			<div class="cap">
				<h3>{group.title}</h3>
				<p>{group.items}</p>
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
		gap: 1px;
		border: 1px solid var(--ink);
	}
	.cap {
		background: var(--paper);
		padding: clamp(1.1rem, 2.4vw, 1.75rem);
	}
	h3 {
		margin: 0 0 0.9rem;
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 11px;
		font-weight: 600;
		color: var(--hazard);
	}
	p {
		margin: 0;
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 12px;
		line-height: 1.85;
	}

	@media (max-width: 900px) {
		.caps {
			grid-template-columns: 1fr;
		}
	}
</style>
