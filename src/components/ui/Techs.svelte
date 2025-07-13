<script>
	let { techs } = $props();
</script>

<div class="mt-2 flex gap-2">
	<!-- Display each technology in a rounded box -->

	{#each techs as tech (tech)}
		<p class=" rounded-xl bg-slate-700 p-2 text-center text-sm">{tech}</p>
	{/each}
</div>
