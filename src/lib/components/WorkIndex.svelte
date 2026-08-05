<script lang="ts">
	import { work } from '$lib/content/work';
</script>

<section class="sec" id="index">
	<h2 class="lbl">Selected work</h2>
	<div class="index">
		{#each work as item (item.id)}
			<a class="row" href={item.href}>
				<span class="num">{item.id}</span>
				<h3>{item.title}</h3>
				<span class="stack">{item.stack}</span>
			</a>
		{/each}
	</div>
</section>

<style>
	.sec {
		padding-block: clamp(2.75rem, 5vw, 4.5rem);
		border-top: 1px solid var(--ink);
	}
	/* 1px grid gap over an ink parent gives exact hairlines with no doubling. */
	.index {
		border-block: 2px solid var(--ink);
		background: var(--ink);
		display: flex;
		flex-direction: column;
		gap: 1px;
	}
	.row {
		background: var(--paper);
		text-decoration: none;
		display: grid;
		grid-template-columns: 4.5rem 1fr auto;
		gap: var(--gut);
		align-items: center;
		padding: clamp(1.1rem, 2.5vw, 1.6rem) 0.25rem;
		transition:
			background 0.12s linear,
			color 0.12s linear;
	}
	.row:hover {
		background: var(--ink);
		color: var(--paper);
	}
	.row:hover .num,
	.row:hover .stack {
		color: inherit;
	}
	.row:focus-visible {
		outline: 2px solid var(--ink);
		outline-offset: 3px;
	}
	.num {
		font-family: var(--data);
		/* 700 at 20px clears the WCAG large-text threshold (14pt bold), where the
		   contrast requirement drops to 3:1. Hazard red measures 4.4:1 on paper,
		   which passes there but fails the 4.5:1 small-text rule at weight 600. */
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--hazard);
	}
	h3 {
		font-family: var(--display);
		text-transform: uppercase;
		letter-spacing: -0.025em;
		font-size: clamp(1.4rem, 3.6vw, 2.5rem);
		line-height: 1;
		margin: 0;
	}
	.stack {
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 11px;
		color: var(--muted);
		text-align: right;
	}

	@media (max-width: 900px) {
		.row {
			grid-template-columns: 3.25rem 1fr;
			gap: 1rem;
		}
		.stack {
			grid-column: 2 / 3;
			text-align: left;
		}
	}
</style>
