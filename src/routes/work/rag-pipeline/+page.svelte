<script lang="ts">
	import CaseLayout from '$lib/components/CaseLayout.svelte';
	import DecisionTable from '$lib/components/DecisionTable.svelte';
	import StackTable from '$lib/components/StackTable.svelte';
	import RagPipelineDiagram from '$lib/diagrams/RagPipelineDiagram.svelte';
	import { entry } from '$lib/content/work';

	const item = entry('001');

	// TODO(content): invented. Replace with Alberto's real answer.
	const brief =
		'The platform held a growing corpus of client documents that its users had to read manually to answer routine questions. The brief was to let them ask in natural language and get an answer grounded in those documents, with the source visible.';

	// TODO(content): invented. Replace with Alberto's real answer.
	const constraints = [
		'The corpus was small at launch and expected to grow unevenly, so retrieval quality could not depend on volume.',
		'PostgreSQL was already in the stack. Introducing a dedicated vector database was not justified.',
		'Answers had to start appearing immediately. A blocking request that returned after several seconds was rejected in review.',
		'A two-developer team, alongside other deliverables running in parallel.'
	];

	// TODO(content): invented. Replace with Alberto's real answer.
	const decisions = [
		{
			decision: 'pgvector in the existing database',
			rejected: 'A dedicated vector store',
			reasoning:
				'One database to operate, back up and join against. At this corpus size a separate service would have added infrastructure without adding recall.'
		},
		{
			decision: 'HNSW index',
			rejected: 'IVFFlat',
			reasoning:
				'IVFFlat needs a representative sample to build its lists and degrades when the corpus grows unevenly. HNSW holds recall without a rebuild step.'
		},
		{
			decision: 'Server-sent events',
			rejected: 'WebSockets',
			reasoning:
				'The stream is one directional. SSE reconnects on its own, survives proxies, and costs no connection state on the server.'
		},
		{
			decision: 'Function calling with schema-validated arguments',
			rejected: "Parsing intent out of the model's prose",
			reasoning:
				'Arguments arrive typed and are validated before anything executes. Prose parsing fails silently and fails often.'
		}
	];

	// TODO(content): invented. Replace with Alberto's real answer.
	const outcome =
		'Users ask questions against the corpus instead of reading through it, and the answer cites the documents it came from. The retrieval layer runs inside the database the platform already had, so it added no new service to operate.';

	const stack = [
		{ tech: 'PostgreSQL / pgvector', role: 'Document embeddings, HNSW index, cosine similarity search' },
		{ tech: 'Google Gemini', role: 'Embeddings and generation' },
		{ tech: 'LangChain', role: 'Pipeline composition and tool definitions' },
		{ tech: 'Fastify', role: 'API surface and SSE transport' },
		{ tech: 'Zod', role: 'Validation at every boundary, including tool arguments' }
	];
</script>

<svelte:head>
	<title>{item.title}, case {item.id}</title>
	<meta name="description" content="Retrieval-augmented generation over Gemini with pgvector, streamed over server-sent events." />
</svelte:head>

<CaseLayout {item}>
	<section class="blk">
		<h2 class="lbl">Brief</h2>
		<p class="prose">{brief}</p>
	</section>

	<section class="blk">
		<h2 class="lbl">Constraints</h2>
		<ul>
			{#each constraints as constraint (constraint)}
				<li>{constraint}</li>
			{/each}
		</ul>
	</section>

	<section class="blk">
		<h2 class="lbl">Architecture</h2>
		<RagPipelineDiagram />
	</section>

	<section class="blk">
		<h2 class="lbl">Decisions</h2>
		<DecisionTable rows={decisions} />
	</section>

	<section class="blk">
		<h2 class="lbl">Outcome</h2>
		<p class="prose">{outcome}</p>
	</section>

	<section class="blk">
		<h2 class="lbl">Stack</h2>
		<StackTable rows={stack} />
	</section>
</CaseLayout>

<style>
	.blk {
		margin-bottom: 2.75rem;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		max-width: 70ch;
	}
	li {
		padding-left: 1.6rem;
		position: relative;
		margin-bottom: 0.45rem;
		font-size: 1.0625rem;
	}
	li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.72em;
		width: 0.8rem;
		height: 2px;
		background: var(--hazard);
	}
</style>
