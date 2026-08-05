<script lang="ts">
	interface StackRow {
		tech: string;
		role: string;
	}

	let { rows }: { rows: StackRow[] } = $props();
</script>

<div class="scroll">
	<table>
		<tbody>
			{#each rows as row (row.tech)}
				<tr>
					<td class="tech">{row.tech}</td>
					<td>{row.role}</td>
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
	td {
		padding: 0.85rem 1.25rem 0.85rem 0;
		border-bottom: 1px solid var(--ink);
		vertical-align: top;
		line-height: 1.45;
	}
	tr:last-child td {
		border-bottom: none;
	}
	.tech {
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 12px;
		font-weight: 600;
		white-space: nowrap;
		width: 1%;
		padding-right: 2.5rem;
	}
</style>
