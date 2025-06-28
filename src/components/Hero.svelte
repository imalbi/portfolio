<script>
	import SocialLinks from './SocialLinks.svelte';
</script>

<div class="mx-auto flex max-w-2xl flex-col items-center gap-6 px-8 md:py-10">
	<h2 class="text-center text-2xl font-semibold text-purple-400">Hi, I'm</h2>
	<h1
		class="text-center text-6xl font-extrabold text-white underline decoration-purple-600 decoration-8 underline-offset-8"
	>
		Alberto Cerqua
	</h1>
	<h3 class="mt-2 text-center text-4xl font-bold text-slate-300">Wannabe Frontend Developer</h3>
	<p class="max-w-xl text-center text-slate-400">
		Passionate about building beautiful and functional web experiences. Always learning, always
		coding.
	</p>
	<div class="mt-4 flex flex-wrap justify-center gap-4">
		<a
			href="/#projects"
			class="rounded-full bg-purple-700 px-6 py-2 font-bold text-white shadow transition hover:scale-105 hover:bg-purple-600 active:scale-95"
			>View Projects</a
		>
		<a
			href="/#contacts"
			class="rounded-full border-2 border-purple-400 px-6 py-2 text-center font-bold text-purple-200 transition hover:scale-105 hover:bg-purple-900/30 active:scale-95"
			>Contact me</a
		>
	</div>
	<SocialLinks />
</div>
