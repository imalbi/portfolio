<script>
	import { onMount } from 'svelte';
	import { activeSection } from '../stores/navigationStore';
	import '../app.css';
	import AnimatedCursor from '../components/layout/AnimatedCursor.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import SocialLinks from '../components/ui/SocialLinks.svelte';
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

<div class="fixed bottom-0 left-0 z-50 hidden md:block">
	<SocialLinks />
</div>
<div class="fixed right-4 bottom-4 z-50 hidden md:block">
	{#if $activeSection == 'hero'}
		<a href="#projects" class="font-bold text-white [writing-mode:vertical-lr]">See more &rarr;</a>
	{:else}
		<a href="#hero" class="font-bold text-white [writing-mode:vertical-lr]">&larr; Back to home</a>
	{/if}
</div>
<AnimatedCursor></AnimatedCursor>
{@render children()}
<Footer />
