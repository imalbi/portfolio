<script>
	import { onMount } from 'svelte';
	let scroll = $state(0);
	onMount(() => {
		const update = () => {
			const scrolled = window.scrollY;
			const height = document.documentElement.scrollHeight - window.innerHeight;
			scroll = height > 0 ? scrolled / height : 0;
		};
		window.addEventListener('scroll', update);
		update();
		return () => window.removeEventListener('scroll', update);
	});
</script>

<div
	class="fixed top-0 left-0 z-[9999] h-1 bg-gradient-to-r from-purple-400 via-purple-600 to-violet-700 shadow-lg shadow-purple-500/30 transition-all duration-200"
	style="width: {scroll * 100}%"
></div>
