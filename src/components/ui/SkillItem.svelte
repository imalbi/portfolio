<script>
	let { logo, alt, text } = $props();
</script>

<li class="flex flex-col items-center gap-3">
	<span
		class="flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/10"
	>
		<img src={logo} {alt} class="size-10" />
	</span>
	<span class="text-center text-white">{@html text}</span>
</li>
