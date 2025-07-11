<script>
	let { id, children } = $props();
</script>

<section
	{id}
	class="relative grid min-h-screen w-full place-content-center overflow-hidden bg-gradient-to-b from-slate-950 via-fuchsia-950 to-slate-950
			  px-4 py-24 before:absolute before:top-[10%] before:left-[10%] before:z-0 before:h-[400px] before:w-[400px] before:rounded-full before:bg-[#3a0a47] before:opacity-50 before:blur-[120px]
			  before:content-[''] after:absolute after:right-[10%] after:bottom-[10%] after:z-0 after:h-[400px] after:w-[400px] after:rounded-full after:bg-[#320040] after:opacity-45 after:blur-[120px] after:content-['']"
>
	{@render children()}
</section>
