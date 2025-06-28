<script>
	import SocialLinks from './SocialLinks.svelte';
</script>

<div
	class="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-xl bg-slate-950/90 px-8 py-10 shadow-lg"
>
	<h2
		class="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-800 bg-clip-text text-center text-3xl font-extrabold text-transparent"
	>
		Hi, I'm Alberto Cerqua!
	</h2>
	<h1
		class="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-800 bg-clip-text text-center text-5xl font-extrabold text-transparent"
	>
		Wannabe Frontend Developer
	</h1>
	<p class="max-w-xl text-center text-slate-200">
		Passionate about building beautiful and functional web experiences. Always learning, always
		coding.
	</p>

	<div class="flex flex-wrap justify-center gap-4">
		<a
			href="/#projects"
			class="flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-800 px-5 py-2 font-bold text-white shadow transition hover:scale-105"
		>
			View Projects
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				fill="currentColor"
				class="bi bi-arrow-right-short"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
				/>
			</svg>
		</a>
		<a
			href="/#contacts"
			class="rounded-md border-2 border-slate-400 px-5 py-2 text-center font-bold text-white transition hover:bg-slate-800"
		>
			Contact me
		</a>
	</div>

	<SocialLinks></SocialLinks>
</div>
