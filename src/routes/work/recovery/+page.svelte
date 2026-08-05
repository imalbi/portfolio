<script lang="ts">
	import CaseLayout from '$lib/components/CaseLayout.svelte';
	import DecisionTable from '$lib/components/DecisionTable.svelte';
	import StackTable from '$lib/components/StackTable.svelte';
	import RecoveryDiagram from '$lib/diagrams/RecoveryDiagram.svelte';
	import { entry } from '$lib/content/work';

	const item = entry('001');

	// TODO(review): drawn from the real codebase and its own audit documents.
	// Check nothing here is more specific about the product than you want public.
	const brief =
		'A consumer mobile app that had passed through three teams in eighteen months, changed source control provider mid-life, and arrived with no linter, no formatter, native build output committed to git, and three different ways of talking to the API living side by side. It was in the stores and in use. The job was to make it safe to change again.';

	// TODO(review): drawn from the real codebase and its own audit documents.
	const constraints = [
		'The app was live throughout. Nothing could be taken offline to be fixed.',
		'Each of the three previous teams had left its own data-access idiom in place, and all three still had callers.',
		'A rewrite of the backend was running in parallel, so the API underneath was moving while the app was being stabilised.',
		'There was no test suite meaningful enough to catch a regression.'
	];

	// TODO(review): drawn from the real codebase and its own audit documents.
	const decisions = [
		{
			decision: 'Measure the damage before touching it',
			rejected: 'Starting the cleanup on day one',
			reasoning:
				'We wrote read-only audits first and counted the actual state: how many screens built their own service objects instead of going through the query layer, how many call sites still fetched credentials that middleware had handled for months. A number you can re-measure tells you whether the cleanup is working. A feeling does not.'
		},
		{
			decision: 'Two API layers running side by side, on purpose',
			rejected: 'One cutover to the typed client',
			reasoning:
				'The old client and the generated typed one both stay alive, and new code is steered onto the typed one. On a live app with no test coverage, a single cutover is how you find out which screens nobody was checking, in the store, on a Friday.'
		},
		{
			decision: 'Generate the types, write the data hooks by hand',
			rejected: 'Generating the hooks too, as a sibling project does',
			reasoning:
				'Codegen would have produced a hook per endpoint for free. Writing them by hand means one deliberate shape for loading and error state across the app, and one place to say what a mutation should invalidate. On a codebase whose main disease was three idioms for the same job, uniformity was worth more than the typing it saved.'
		},
		{
			decision: 'Verify the component unification by comparing screenshots',
			rejected: 'Trusting the type checker and the tests',
			reasoning:
				'Years of accreted one-off components were consolidated behind a few shared primitives. The compiler can prove the new code builds. It cannot tell you the screen still looks like it did yesterday, and with no visual coverage nothing else would have.'
		},
		{
			decision: 'Leave the remaining debt written down and counted',
			rejected: 'Declaring the cleanup finished',
			reasoning:
				'The audits end in a prioritised migration list rather than a clean bill of health. Debt that is measured and queued gets paid down. Debt that has been announced as fixed gets rediscovered by whoever arrives next, which is how this codebase reached three idioms in the first place.'
		}
	];

	// TODO(review): drawn from the real codebase and its own audit documents.
	const outcome =
		'The app has one linter, one formatter and one documented way to reach the API, which new code follows. What debt remains is listed and prioritised rather than waiting to be discovered. The audits also surfaced code that had been quietly wrong for a long time, including a placeholder left over from early development that was still feeding invented profile data to a live screen.';

	const stack = [
		{ tech: 'React Native / Expo', role: 'The application, with file-based routing' },
		{ tech: 'TypeScript', role: 'API types generated from the specification, not hand-written' },
		{ tech: 'TanStack Query', role: 'Server state, caching and cross-domain invalidation' },
		{ tech: 'Redux Toolkit', role: 'Client state that outlives a single screen' },
		{ tech: 'Auth0', role: 'Authentication, shared with the backend' },
		{ tech: 'Stripe', role: 'Payments' }
	];
</script>

<svelte:head>
	<title>{item.title}, case {item.id}</title>
	<meta
		name="description"
		content="Taking over a live mobile app after three teams and making it safe to change again."
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
		<RecoveryDiagram />
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
