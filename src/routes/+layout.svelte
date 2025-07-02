<script>
	import { onMount } from 'svelte';
	import { activeSection } from '../stores/navigationStore';
	import '../app.css';
	import AnimatedCursor from '../components/layout/AnimatedCursor.svelte';
	import Footer from '../components/layout/Footer.svelte';
	let { children } = $props();

	onMount(() => {
		const sections = document.querySelectorAll('section[id]');

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection.set(entry.target.id);
					}
				});
			},
			{
				rootMargin: '-40% 0px -60% 0px'
			}
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	});
</script>

<AnimatedCursor></AnimatedCursor>
{@render children()}
<Footer />
