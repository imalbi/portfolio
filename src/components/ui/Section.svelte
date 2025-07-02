<script>
	let { id, children } = $props();
</script>

<section
	{id}
	class="text-foreground before:animate-blink after:animate-blink relative grid min-h-screen w-full place-content-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950
			  px-4 py-24 before:absolute before:top-[10%] before:left-[10%] before:z-0 before:h-[400px] before:w-[400px] before:rounded-full before:bg-[#5d00ff] before:opacity-20 before:blur-[120px]
			  before:content-[''] after:absolute after:right-[10%] after:bottom-[10%] after:z-0 after:h-[400px] after:w-[400px] after:rounded-full after:bg-[#ff00f7] after:opacity-20 after:blur-[120px] after:content-['']"
>
	{@render children()}
</section>
