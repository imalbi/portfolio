<script lang="ts">
	import CaseLayout from '$lib/components/CaseLayout.svelte';
	import DecisionTable from '$lib/components/DecisionTable.svelte';
	import StackTable from '$lib/components/StackTable.svelte';
	import RecoveryDiagram from '$lib/diagrams/RecoveryDiagram.svelte';
	import { entry } from '$lib/content/work';

	const item = entry('003');

	// TODO(content): invented. Replace with Alberto's real answer.
	const brief =
		'A live product was handed over mid-crisis: the previous team was gone, the codebase had no tests and no documentation, and users were hitting failures the existing logs could not explain. The brief was to stabilise it without a rewrite the business could not afford to wait for.';

	// TODO(content): invented. Replace with Alberto's real answer.
	const constraints = [
		'The product had active users throughout. Downtime to fix something was not an acceptable trade for fixing it faster.',
		'No test suite and no reliable way to know what already worked, so any change carried the risk of breaking something silently.',
		'The original authors were not reachable, so decisions were made from reading the code and the failures it produced, not from institutional knowledge.',
		'A full rewrite was not on the table. The system had to keep running while it was repaired underneath its users.'
	];

	// TODO(content): invented. Replace with Alberto's real answer.
	const decisions = [
		{
			decision: 'Stabilise before refactoring',
			rejected: 'Rewriting the worst subsystems immediately',
			reasoning:
				'A rewrite under pressure with no tests trades a known set of bugs for an unknown one. Stopping the active failures first bought the time to refactor safely afterward.'
		},
		{
			decision: 'Validation added at the boundaries first',
			rejected: 'Fixing failures where they were thrown',
			reasoning:
				'Most of the failures traced back to input that should never have been accepted. Stopping bad data at the edge closed a whole class of downstream errors at once, instead of patching each symptom.'
		},
		{
			decision: 'Contain some subsystems instead of rewriting them',
			rejected: 'Rewriting everything that was ugly',
			reasoning:
				'Not every rough piece of code was causing failures. The ones that were stable but unpleasant were wrapped and left alone, so effort went to what was actually breaking.'
		},
		{
			decision: 'Types introduced incrementally at the edges',
			rejected: 'A full migration to TypeScript upfront',
			reasoning:
				'Converting the whole codebase before touching the failures would have delayed every fix behind it. Typing the boundaries first caught the same class of errors validation did, without stopping the recovery to do a migration.'
		},
		{
			decision: 'Triage by user impact',
			rejected: 'Triage by code quality',
			reasoning:
				'The ugliest code was not always the code hurting users. Ranking fixes by what was actually breaking for someone, rather than by what was hardest to look at, kept the effort pointed at the right problems.'
		}
	];

	// TODO(content): invented. Replace with Alberto's real answer.
	const outcome =
		'The product stayed live throughout and the failures that triggered the handover stopped recurring. The riskiest subsystems were rewritten under test; the rest were contained and left running. The codebase came out of the recovery with validation at its boundaries and enough structure that the next person working in it does not have to read the whole thing to make a safe change.';

	const stack = [
		{ tech: 'JavaScript / Node.js', role: 'Inherited runtime and service layer, kept in place while stabilising' },
		{ tech: 'TypeScript', role: 'Introduced incrementally at the boundaries and in rewritten subsystems' },
		{ tech: 'Zod', role: 'Validation added at the edges before anything else changed' },
		{ tech: 'PostgreSQL', role: 'Existing data store; writes made transactional where they were not' },
		{ tech: 'Docker', role: 'Reproducible environment used to isolate and verify fixes before shipping' },
		{ tech: 'Git', role: 'Small, reviewable commits to keep every change bisectable under pressure' }
	];
</script>

<svelte:head>
	<title>{item.title}, case {item.id}</title>
	<meta
		name="description"
		content="Stabilising a live product inherited in a critical state: triage, boundary validation and incremental typing under pressure."
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
