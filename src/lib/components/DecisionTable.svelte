<script lang="ts">
	export interface Decision {
		decision: string;
		rejected: string;
		reasoning: string;
	}

	let { rows }: { rows: Decision[] } = $props();
</script>

<div class="scroll">
	<table>
		<thead>
			<tr>
				<th class="c1">Decision</th>
				<th class="c2">Rejected</th>
				<th>Reasoning</th>
			</tr>
		</thead>
		<tbody>
			{#each rows as row (row.decision)}
				<tr>
					<td class="decision">{row.decision}</td>
					<td class="rejected">{row.rejected}</td>
					<td>{row.reasoning}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.scroll {
		overflow-x: auto;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9375rem;
	}
	.c1 {
		width: 26%;
	}
	.c2 {
		width: 24%;
	}
	th {
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 11px;
		font-weight: 600;
		color: var(--muted);
		text-align: left;
		padding: 0 1.25rem 0.6rem 0;
		border-bottom: 2px solid var(--ink);
		vertical-align: bottom;
	}
	td {
		padding: 0.85rem 1.25rem 0.85rem 0;
		border-bottom: 1px solid var(--ink);
		vertical-align: top;
		line-height: 1.45;
	}
	tr:last-child td {
		border-bottom: none;
	}
	.decision {
		font-weight: 600;
	}
	.rejected {
		color: var(--muted);
	}
</style>
