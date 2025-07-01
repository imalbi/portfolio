<script>
	let { techs } = $props();
</script>

<div class="mt-2 flex gap-2">
	{#each techs as tech (tech)}
		<p class=" rounded-xl bg-slate-700 p-1 text-sm">{tech}</p>
	{/each}
</div>
