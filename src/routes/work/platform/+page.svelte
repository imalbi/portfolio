<script lang="ts">
	import CaseLayout from '$lib/components/CaseLayout.svelte';
	import DecisionTable from '$lib/components/DecisionTable.svelte';
	import StackTable from '$lib/components/StackTable.svelte';
	import PlatformDiagram from '$lib/diagrams/PlatformDiagram.svelte';
	import { entry } from '$lib/content/work';

	const item = entry('002');

	// TODO(content): invented. Replace with Alberto's real answer.
	const brief =
		'The client needed a platform built from the ground up: an application their team would use daily to manage day-to-day operations, backed by an API that had to be designed, documented and kept stable while the frontend and business rules were still being defined.';

	// TODO(content): invented. Replace with Alberto's real answer.
	const constraints = [
		'No existing backend to build on. The API, its schema and its conventions had to be designed alongside the frontend that consumed them, in parallel.',
		"The client's team needed to see changes daily, so the frontend had to render fast on first load rather than wait on a client-side bundle to boot.",
		'Some views needed to update as data changed elsewhere in the system, without the user refreshing the page.',
		'A two-developer team, so the choices had to stay boring and few enough for two people to hold the whole system between them.'
	];

	// TODO(content): invented. Replace with Alberto's real answer.
	const decisions = [
		{
			decision: 'Fastify over Express',
			rejected: 'Express',
			reasoning:
				"Fastify's schema-based validation and serialization sit on the request lifecycle instead of being bolted on with middleware, and its plugin encapsulation keeps route-specific concerns from leaking across the app."
		},
		{
			decision: 'Drizzle ORM over a heavier ORM',
			rejected: 'Prisma',
			reasoning:
				"Drizzle's queries stay close to SQL and its migrations are plain, reviewable files. A single author moving fast benefited more from that transparency than from a generated client's abstractions."
		},
		{
			decision: 'Zod schemas shared between API and client',
			rejected: 'Separate types hand-maintained on each side',
			reasoning:
				'One schema defines the shape once and is imported on both sides, so the request contract cannot drift between frontend and backend without a compiler error.'
		},
		{
			decision: 'WebSockets for the real-time views',
			rejected: 'Polling on an interval',
			reasoning:
				'Polling either wastes requests when nothing changed or lags behind when something did. A persistent connection pushes updates the moment they happen and costs less bandwidth over the life of a session.'
		},
		{
			decision: 'SvelteKit with server-rendered routes',
			rejected: 'A client-side single-page app',
			reasoning:
				'The team opened the tool from a cold link throughout the day. Server rendering gets usable content on screen on the first response instead of waiting on a JavaScript bundle to boot.'
		}
	];

	// TODO(content): invented. Replace with Alberto's real answer.
	const outcome =
		"The client's team now runs day-to-day operations through the platform, with a single API contract shared by frontend and backend that stayed consistent as both moved. The real-time views reflect changes made elsewhere in the system without a manual refresh.";

	const stack = [
		{ tech: 'SvelteKit', role: 'Frontend application and routing' },
		{ tech: 'Fastify', role: 'REST API surface' },
		{ tech: 'Zod', role: 'Request and response validation, schemas shared with the client' },
		{ tech: 'PostgreSQL / Drizzle ORM', role: 'Data layer and migrations' },
		{ tech: 'WebSockets', role: 'Real-time features' }
	];
</script>

<svelte:head>
	<title>{item.title}, case {item.id}</title>
	<meta
		name="description"
		content="An end-to-end client platform built with SvelteKit, Fastify and Drizzle, with WebSockets for real-time views."
	/>
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
		<PlatformDiagram />
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
