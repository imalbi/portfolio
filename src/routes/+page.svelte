<script>
	import NavButton from '../components/navButton.svelte';
	import { items } from '../data/nav';
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 w-full border-b border-transparent bg-slate-950 transition-all duration-300 ease-in-out"
>
	<div class="container mx-auto sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between sm:h-20">
			<div class="flex items-center">
				<a
					class="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-800 bg-clip-text text-2xl font-extrabold text-transparent"
					href="/#home">Alberto Cerqua</a
				>
			</div>
			<div class="hidden items-center space-x-2 md:flex">
				{#each items as item (item.id)}
					<NavButton text={item.text} href={item.href}></NavButton>
				{/each}
			</div>
		</div>
	</div>
</nav>
<main class="flex-grow">
	<div class="h-20"></div>

	<section
		id="home"
		class="text-foreground relative grid min-h-screen place-content-center overflow-hidden px-4 py-24"
		style="background: #1e293b; background-image: radial-gradient(circle at 50% 50%, #a78bfa 0%, #7c3aed 30%, #312e81 60%, #1e293b 100%);"
	>
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

			<div class="mt-4 flex gap-4">
				<a
					href="https://github.com/yourusername"
					target="_blank"
					rel="noopener"
					aria-label="GitHub"
					class=" rounded-md bg-purple-700/20 p-3 text-white transition hover:bg-white/20 hover:text-purple-700"
				>
					<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
						/></svg
					>
				</a>
				<a
					href="https://linkedin.com/in/yourusername"
					target="_blank"
					rel="noopener"
					aria-label="LinkedIn"
					class="rounded-md bg-purple-700/20 p-3 text-white transition hover:bg-white/20 hover:text-purple-700"
				>
					<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v5.62z"
						/></svg
					>
				</a>
				<a
					href="mailto:your@email.com"
					aria-label="Email"
					class="rounded-md bg-purple-700/20 p-3 text-white transition hover:bg-white/20 hover:text-purple-700"
				>
					<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"
						/></svg
					>
				</a>
			</div>
		</div>
	</section>

	<section
		id="about"
		class="text-foreground relative grid min-h-screen place-content-center overflow-hidden px-4 py-24"
		style="background: #1e293b; background-image: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 5%, rgba(124, 58, 237, 0.2) 20%, rgba(30, 41, 59, 1) 70%);"
	>
		<h1>Ciao</h1>
	</section>
</main>
