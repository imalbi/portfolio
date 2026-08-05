<script lang="ts">
	import CaseLayout from '$lib/components/CaseLayout.svelte';
	import CaseSections from '$lib/components/CaseSections.svelte';
	import RealtimeClientDiagram from '$lib/diagrams/RealtimeClientDiagram.svelte';
	import { entry } from '$lib/content/work';

	const item = entry('001');

	// TODO(review): drawn from the real codebase. Check nothing here is more
	// specific about the product than you want public.
	const brief =
		'A platform that watches a live conversation and produces a continuous read on it, for people rehearsing or reviewing high-stakes calls. A separate analysis engine emits a dense block of signal on every tick. Everything else, the product around it, had to turn that stream into something a person can glance at while their attention is mostly elsewhere.';

	const constraints = [
		'The analysis engine is a separate service on its own release cycle, and its output shape moves as its models change.',
		'The signal arrives continuously, per tick, for the whole length of a session.',
		'The interface is looked at sideways, during a call, by someone whose attention is on the call.',
		'Live audio and video transport, session state, and the analysis stream all have to stay in step.'
	];

	const howItWorks = [
		'Audio and video run over a real-time media service rather than a hand-rolled transport, so the product does not own connection negotiation, reconnection or media codecs.',
		'The engine writes one document per tick to a document store. Application state, users, sessions, contacts and settings, lives in a relational database. The split follows the shape of the data instead of forcing both into one store.',
		'An enrichment layer sits between the engine and everything downstream. It translates the raw engine output into a stable wire shape, and every consumer, the sockets, the list endpoints, the model prompts, reads only the enriched form.',
		'That layer has exactly one documented exception, a lineage job that still reads raw documents because it needs a field the enriched shape drops. The exception is written down rather than left to be discovered.',
		'Enriched blocks are pushed to the client over a websocket, separate from the media path, so the analysis stream and the call do not share a failure mode.',
		'Replay scripts re-run a recorded session through the analyzers offline, so a prompt or scoring change can be evaluated against real past sessions instead of by starting a new call.'
	];

	// TODO(review): scoped from the git record, measured by lines changed.
	const myPart = [
		'The frontend, which is the largest single area of the codebase I wrote: the component library, the application routes, the composables, and the typed API client.',
		'The analysis-session service on the backend, which is the domain core: session lifecycle, the event record, and the contact and observation model around it.',
		'The replay tooling for the supervisor and companion analyzers.',
		'Not mine: the analysis engine itself, which is a separate Python service I did not work on, and the majority of the backend, which was written by the lead.'
	];

	const outcome =
		'The product around the engine holds a stable contract with it, so the engine can change without breaking every consumer at once. A recorded session can be replayed through the analyzers offline, which turns prompt changes from a live experiment into something testable.';

	const stack = [
		{ tech: 'SvelteKit', role: 'Frontend application, static build' },
		{ tech: 'LiveKit', role: 'Real-time audio and video transport' },
		{ tech: 'Fastify', role: 'API surface and websocket server' },
		{ tech: 'PostgreSQL / Drizzle ORM', role: 'Relational application state' },
		{ tech: 'MongoDB', role: 'High-volume per-tick engine output' },
		{ tech: 'Google Gemini', role: 'The analyzers reading the enriched stream' }
	];
</script>

<svelte:head>
	<title>{item.title}, case {item.id}</title>
	<meta
		name="description"
		content="Building the product around a real-time analysis engine: a stable contract with a moving component, and tooling to replay sessions offline."
	/>
</svelte:head>

<CaseLayout {item}>
	<CaseSections {brief} {constraints} {howItWorks} {myPart} {outcome} {stack}>
		{#snippet diagram()}
			<RealtimeClientDiagram />
		{/snippet}
	</CaseSections>
</CaseLayout>
