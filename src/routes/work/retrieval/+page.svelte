<script lang="ts">
	import CaseLayout from '$lib/components/CaseLayout.svelte';
	import DecisionTable from '$lib/components/DecisionTable.svelte';
	import StackTable from '$lib/components/StackTable.svelte';
	import RetrievalDiagram from '$lib/diagrams/RetrievalDiagram.svelte';
	import { entry } from '$lib/content/work';

	const item = entry('002');

	// TODO(review): drawn from the real system. Check nothing here is more
	// specific about the product than you want public.
	const brief =
		'An enterprise conversational assistant, integrated with a CRM, had to answer from each client company\'s own documents and follow that company\'s own rules. The obvious route was a fork or a branch per client. The brief was to make one deployment do it instead, configured by administrators rather than developers.';

	// TODO(review): drawn from the real system. Check nothing here is more
	// specific about the product than you want public.
	const constraints = [
		'A two-developer team, alongside other deliverables running in parallel.',
		'PostgreSQL was already in the stack, and adding a second datastore would have doubled what there was to operate and back up.',
		'Much of the corpus was compliance and workplace safety material, where splitting a clause in the wrong place changes what it means.',
		'Answers had to start appearing immediately rather than after the model finished.',
		'Behaviour had to be changeable by administrators at runtime, without a deploy.'
	];

	// TODO(review): drawn from the real system. Check nothing here is more
	// specific about the product than you want public.
	const decisions = [
		{
			decision: 'One configuration tree driving both the system prompt and the retrieval scope',
			rejected: 'A branch, fork or separate deployment per client company',
			reasoning:
				'Per-client forks diverge the moment the first one is patched. Making behaviour data rather than code meant one codebase to fix and one place to look when a company behaved unexpectedly.'
		},
		{
			decision: 'The tree that applies to a company is computed when it is needed',
			rejected: 'Storing the resolved tree and keeping it in sync',
			reasoning:
				'A stored copy needs invalidating on every assignment change, and when it drifts nothing fails loudly, it just answers with the wrong rules. Recomputing is cheap and cannot be stale.'
		},
		{
			decision: 'Company context is read from the conversation being used',
			rejected: 'A company claim carried on the auth token',
			reasoning:
				'This one is easy to build backwards. Deriving context from the resource means the permission check and the context can never disagree, and administrator impersonation stops being a separate code path.'
		},
		{
			decision: 'Vectors live in the existing PostgreSQL through pgvector',
			rejected: 'A dedicated vector database',
			reasoning:
				'Retrieval has to be filtered by which documents this user is allowed to see. In the same database that is a join. Across two systems it becomes a synchronisation problem with an access-control failure mode.'
		},
		{
			decision: 'Chunking follows the document structure',
			rejected: 'Fixed-size windows',
			reasoning:
				'A safety procedure cut in half retrieves as two fragments that each read as complete and neither of which is. Respecting article and section boundaries costs more code and removes a whole class of confidently wrong answers.'
		},
		{
			decision: 'Reprocessing a file replaces its vectors in a single transaction',
			rejected: 'Patching the changed chunks in place',
			reasoning:
				'A partial update leaves two generations of the same document retrievable at once, and the older one is indistinguishable from the newer. Replacing wholesale is slower and always consistent.'
		}
	];

	// TODO(review): drawn from the real system. Check nothing here is more
	// specific about the product than you want public.
	const outcome =
		'One deployment serves every client company with its own rules and its own documents, changed by administrators without a release. Answers stream as they are generated, and every retrieved passage is labelled with the file it came from, so an answer that looks wrong can be traced back to what produced it rather than argued about.';

	const stack = [
		{ tech: 'PostgreSQL / pgvector', role: 'Document embeddings and cosine similarity search' },
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
		<RetrievalDiagram />
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
