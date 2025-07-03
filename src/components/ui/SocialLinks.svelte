<script>
	import NavButton from './navButton.svelte';
	import { items } from '../../data/nav';

	let isVisibleMobile = $state(false);
</script>

<div class=" mb-4 ml-4 flex flex-col gap-2">
	<a
		href="https://github.com/imalbi"
		target="_blank"
		rel="noopener"
		aria-label="GitHub"
		class=" rounded-full bg-purple-700/20 p-3 text-white transition hover:scale-105 hover:bg-white/20 hover:text-purple-700 active:scale-95"
	>
		<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"
			><path
				d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
			/></svg
		>
	</a>
	<a
		href="https://linkedin.com/in/alberto-cerqua-433059361"
		target="_blank"
		rel="noopener"
		aria-label="LinkedIn"
		class="rounded-full bg-purple-700/20 p-3 text-white transition hover:scale-105 hover:bg-white/20 hover:text-purple-700 active:scale-95"
	>
		<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"
			><path
				d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v5.62z"
			/></svg
		>
	</a>
	<a
		href="mailto:alberto.cerqua@icloud.com"
		aria-label="Email"
		class="rounded-full bg-purple-700/20 p-3 text-white transition hover:scale-105 hover:bg-white/20 hover:text-purple-700 active:scale-95"
	>
		<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"
			><path
				d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"
			/></svg
		>
	</a>
</div>
