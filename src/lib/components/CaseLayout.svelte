<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { WorkEntry } from '$lib/content/work';

	let { item, children }: { item: WorkEntry; children: Snippet } = $props();
</script>

<article class="case">
	<div class="mast">
		<span class="num">{item.id}</span>
		<h1>{item.title}</h1>
	</div>

	<div class="meta">
		<span><span class="muted">Role</span> {item.role}</span>
		<span><span class="muted">Period</span> {item.period}</span>
		<span><span class="muted">Sector</span> {item.sector}</span>
	</div>

	{@render children()}
</article>

<style>
	.case {
		padding-block: clamp(2.75rem, 5vw, 4.5rem);
	}
	.mast {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 1rem 1.5rem;
		margin-bottom: 0.6rem;
	}
	.num {
		font-family: var(--data);
		font-weight: 600;
		font-size: 1.5rem;
		color: var(--hazard);
	}
	h1 {
		font-family: var(--display);
		text-transform: uppercase;
		letter-spacing: -0.035em;
		font-size: clamp(2rem, 6vw, 4.25rem);
		line-height: 0.9;
		margin: 0;
	}
	.meta {
		border-top: 2px solid var(--ink);
		padding-top: 0.6rem;
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
		margin-bottom: 2.75rem;
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 13px;
	}
	.muted {
		color: var(--muted);
		margin-right: 0.4rem;
	}
</style>
