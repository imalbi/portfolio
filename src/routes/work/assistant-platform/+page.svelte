<script lang="ts">
	import CaseLayout from '$lib/components/CaseLayout.svelte';
	import CaseSections from '$lib/components/CaseSections.svelte';
	import AssistantPlatformDiagram from '$lib/diagrams/AssistantPlatformDiagram.svelte';
	import { entry } from '$lib/content/work';

	const item = entry('003');

	// TODO(review): drawn from the real codebase. Check nothing here is more
	// specific about the product than you want public.
	const brief =
		"An enterprise conversational assistant, integrated with a CRM, that answers from each client company's own documents and follows that company's own rules. One deployment serves every company, configured by administrators rather than developers, which is the constraint the whole design hangs off.";

	const constraints = [
		'A two-developer team, alongside other deliverables running in parallel.',
		'Behaviour had to be changeable by administrators at runtime, without a release.',
		'PostgreSQL was already in the stack, and a second datastore would have doubled what there was to operate and back up.',
		'Much of the corpus was compliance and workplace safety material, where splitting a clause in the wrong place changes what it means.',
		'Answers had to start appearing immediately rather than after the model finished.'
	];

	const howItWorks = [
		'A configuration tree, held as data rather than code, composes both the system prompt and the retrieval scope for a given company. The tree that applies is computed when it is needed rather than stored and kept in sync, so it cannot go stale.',
		'Which company a conversation belongs to is read from the conversation itself, not from a claim on the auth token, so the permission check and the context cannot disagree.',
		'Documents are extracted, normalised to Markdown in memory, chunked along the document structure rather than at fixed sizes, embedded, and written into PostgreSQL through pgvector. Reprocessing a file replaces its vectors in one transaction instead of patching them in place.',
		'Retrieval draws from separate pools, files attached to this conversation and files attached to the company, and the merge favours the ones the user just uploaded over the shared corpus.',
		'Retrieved passages are labelled with the file they came from, so an answer that looks wrong can be traced to what produced it.',
		'The answer streams over server-sent events. The frontend is built as a static bundle and served by the same backend process, so there is one deployable rather than two.'
	];

	// TODO(review): scoped from the git record, measured by lines changed.
	const myPart = [
		'The frontend, which is my largest area in this codebase: the SvelteKit application, its component and API layers, and the admin surfaces for configuring companies and their documents.',
		'Backend service and route work across the platform, and a share of the second backend service.',
		'Evaluation work on the document extraction path, comparing the existing Office conversion against a structure-preserving one on real client documents.',
		'Not mine: most of the retrieval and model-serving code, which the other developer on the team wrote.'
	];

	const outcome =
		'One deployment serves every client company with its own rules and its own documents, changed by administrators without a release. Answers stream as they are generated, and every retrieved passage carries the file it came from.';

	const stack = [
		{ tech: 'SvelteKit', role: 'Frontend, built static and served by the API process' },
		{ tech: 'Fastify', role: 'API surface, SSE transport, scheduled jobs' },
		{
			tech: 'Zod',
			role: 'Validation at the boundary, and the OpenAPI spec the client types come from'
		},
		{ tech: 'PostgreSQL / Drizzle ORM', role: 'Relational data and migrations' },
		{ tech: 'pgvector', role: 'Document embeddings and cosine similarity search' },
		{ tech: 'Google Gemini / LangChain', role: 'Embeddings, generation and tool definitions' }
	];
</script>

<svelte:head>
	<title>{item.title}, case {item.id}</title>
	<meta
		name="description"
		content="One deployment serving every client company with its own rules and its own documents, configured by administrators rather than developers."
	/>
</svelte:head>

<CaseLayout {item}>
	<CaseSections {brief} {constraints} {howItWorks} {myPart} {outcome} {stack}>
		{#snippet diagram()}
			<AssistantPlatformDiagram />
		{/snippet}
	</CaseSections>
</CaseLayout>
