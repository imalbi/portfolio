<script lang="ts">
	import type { Snippet } from 'svelte';
	import { work, type WorkEntry } from '$lib/content/work';

	let { item, children }: { item: WorkEntry; children: Snippet } = $props();

	const currentIndex = work.findIndex((w) => w.id === item.id);
	const prev = currentIndex > 0 ? work[currentIndex - 1] : null;
	const next = currentIndex >= 0 && currentIndex < work.length - 1 ? work[currentIndex + 1] : null;
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
		{#if item.url}
			<span>
				<span class="muted">Live</span>
				<a href={item.url} target="_blank" rel="noreferrer" class="site-link">
					{item.url.replace(/^https?:\/\//, '')} &nearr;
				</a>
			</span>
		{/if}
	</div>

	{@render children()}

	<nav class="pager" aria-label="Case navigation">
		<div class="pager-col prev-col">
			{#if prev}
				<a href={prev.href} class="pager-link">
					<span class="dir muted">&larr; Previous</span>
					<span class="case-name">{prev.id} {prev.title}</span>
				</a>
			{/if}
		</div>

		<div class="pager-col index-col">
			<a href="/#index" class="pager-link all-link">All cases</a>
		</div>

		<div class="pager-col next-col">
			{#if next}
				<a href={next.href} class="pager-link right-link">
					<span class="dir muted">Next &rarr;</span>
					<span class="case-name">{next.id} {next.title}</span>
				</a>
			{/if}
		</div>
	</nav>
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
	.site-link {
		color: var(--ink);
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 3px;
	}
	.site-link:hover {
		color: var(--hazard);
	}
	.pager {
		border-top: 2px solid var(--ink);
		margin-top: 3.5rem;
		padding-top: 1.75rem;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 1.5rem;
		align-items: center;
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 12px;
	}
	.pager-col {
		display: flex;
	}
	.prev-col {
		justify-content: flex-start;
	}
	.index-col {
		justify-content: center;
	}
	.next-col {
		justify-content: flex-end;
	}
	.pager-link {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		text-decoration: none;
		color: var(--ink);
	}
	.right-link {
		text-align: right;
	}
	.all-link {
		text-decoration: underline;
		text-decoration-color: var(--muted);
		text-decoration-thickness: 1px;
		text-underline-offset: 4px;
		padding-block: 0.45rem;
	}
	.pager-link:hover {
		color: var(--hazard);
	}
	.all-link:hover {
		text-decoration-color: var(--hazard);
	}
	.dir {
		font-size: 10px;
		letter-spacing: 0.1em;
	}
	.case-name {
		font-weight: 600;
	}
	@media (max-width: 760px) {
		.pager {
			grid-template-columns: 1fr;
			gap: 1.25rem;
		}
		.next-col,
		.right-link {
			justify-content: flex-start;
			text-align: left;
		}
		.index-col {
			justify-content: flex-start;
			order: -1;
		}
	}
</style>
