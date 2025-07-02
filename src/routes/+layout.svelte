<script>
	import { onMount } from 'svelte';
	import { activeSection } from '../stores/navigationStore';
	import '../app.css';
	import AnimatedCursor from '../components/layout/AnimatedCursor.svelte';
	let { children } = $props();

	onMount(() => {
		// Get all section elements
		const sections = document.querySelectorAll('section[id]');

		// Create intersection observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// When section is more than 50% visible
					if (entry.isIntersecting) {
						// Update active section in store
						$activeSection = entry.target.id;
					}
				});
			},
			{
				rootMargin: '-20% 0px -70% 0px', // Consider section visible when in middle 50% of screen
				threshold: 0.1
			}
		);

		// Start observing all sections
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
