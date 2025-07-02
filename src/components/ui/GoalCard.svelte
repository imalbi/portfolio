<script>
	import GlassmorphicCard from './GlassmorphicCard.svelte';
	let { heading, p, children } = $props();
</script>

<GlassmorphicCard>
	<div class="mb-2 flex flex-row items-end gap-2 p-2 pb-4">
		{#if children}
			{@render children()}
		{/if}
		<h3 class=" text-xl font-extrabold text-nowrap">{heading}</h3>
	</div>
	<p class="text-justify">{@html p}</p>
</GlassmorphicCard>
