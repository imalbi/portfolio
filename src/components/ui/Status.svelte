<script>
	let { status } = $props();
	// Can be 'Completed' or 'In Progress'
	let completed = $derived(status == 'Completed' ? true : false);
</script>

<div class="mt-2 flex h-full items-center">
	{#if completed}
		<span class="text-green-500"
			><svg
				class="h-4 w-4"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="4"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 12l6 6L20 6" />
			</svg></span
		>
	{:else}
		<span class="text-yellow-500"
			><svg class="h-4 w-4 animate-spin" viewBox="3 3 18 18"
				><circle class="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"
				></circle><path class="opacity-75" fill="currentColor" d=""></path></svg
			></span
		>
	{/if}
	<span
		class="ml-2 rounded-2xl px-2 py-0.5"
		class:bg-green-600={completed}
		class:bg-yellow-600={!completed}>{status}</span
	>
</div>
