<script lang="ts">
	/**
	 * The repeated body of a case study. Every case uses the same section order,
	 * which is what makes them read as documents from one series rather than
	 * three unrelated pages.
	 *
	 * `howItWorks` describes the mechanism. `myPart` scopes the claim: on teams
	 * of two or three, saying which part was yours is more credible than letting
	 * the reader assume all of it was.
	 */
	interface Props {
		brief: string;
		constraints: string[];
		diagram: import('svelte').Snippet;
		howItWorks: string[];
		myPart: string[];
		outcome: string;
		stack: { tech: string; role: string }[];
		preview?: import('svelte').Snippet;
	}

	let { brief, constraints, diagram, howItWorks, myPart, outcome, stack, preview }: Props = $props();

	import StackTable from './StackTable.svelte';
</script>

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
	{@render diagram()}
</section>

{#if preview}
	<section class="blk">
		<h2 class="lbl">Interface</h2>
		{@render preview()}
	</section>
{/if}

<section class="blk">
	<h2 class="lbl">How it works</h2>
	<ul>
		{#each howItWorks as point (point)}
			<li>{point}</li>
		{/each}
	</ul>
</section>

<section class="blk part">
	<h2 class="lbl">My part</h2>
	<ul>
		{#each myPart as point (point)}
			<li>{point}</li>
		{/each}
	</ul>
</section>

<section class="blk">
	<h2 class="lbl">Outcome</h2>
	<p class="prose">{outcome}</p>
</section>

<section class="blk">
	<h2 class="lbl">Stack</h2>
	<StackTable rows={stack} />
</section>

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
	/* The scoping section is the honest core of the page, so it is set apart
	   rather than left to look like one more list. */
	.part {
		border-top: 2px solid var(--ink);
		border-bottom: 2px solid var(--ink);
		padding-block: 1.75rem;
	}
</style>
