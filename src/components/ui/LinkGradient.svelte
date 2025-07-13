<script>
	let { href, children } = $props();
</script>

<a
	{href}
	class="rounded-full bg-purple-700 px-6 py-2 font-bold text-nowrap text-white shadow transition hover:scale-105 hover:bg-purple-600 active:scale-95"
>
	{#if children}
		{@render children()}
	{/if}
</a>
