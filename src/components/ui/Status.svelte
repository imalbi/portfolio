<script>
	let { status } = $props();
	let completed = $derived(status == 'Completed' ? true : false);
</script>

<div class="flex">
	{#if completed}
		<span class="mr-2 text-green-600">✔️</span>
	{:else}
		<span class="mr-2 text-yellow-500">🚧</span>
	{/if}
	<p class="text-sm text-slate-200">Status:</p>
	<p
		class=" rounded-md px-1 text-sm"
		class:bg-green-400={completed}
		class:bg-yellow-500={!completed}
	>
		{status}
	</p>
</div>
