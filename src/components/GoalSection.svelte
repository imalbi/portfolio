<script>
	import AboutSection from './AboutSection.svelte';

	import GoalCard from './GoalCard.svelte';

	import ScrollProgressBar from './ScrollProgressBar.svelte';

	import NebulaSection from './NebulaSection.svelte';

	import Hero from './Hero.svelte';

	import MobileNav from './MobileNav.svelte';

	import TopNavBar from './TopNavBar.svelte';

	import SocialLinks from './SocialLinks.svelte';
	import GlassmorphicCard from './GlassmorphicCard.svelte';
	import Section from './Section.svelte';
	import AboutField from './AboutField.svelte';

	import NavButton from './navButton.svelte';
	import { items } from '../data/nav';
	import { onMount } from 'svelte';

	let isVisibleMobile = $state(false);

	let scroll = $state(0);

	// Update scroll progress on scroll
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

<Section id="goals"
	><h1 class=" mb-2 text-center text-5xl font-extrabold text-white">Career Goals</h1>
	<div
		class="mx-auto mt-3 mb-5 h-[5px] w-24 rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-violet-700"
	></div>
	<div class="flex w-full flex-col md:flex-row md:justify-between md:gap-x-6">
		<GoalCard
			heading="Short-Term Goal"
			p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi."
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-8 text-purple-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
				/>
			</svg>
		</GoalCard>
		<GoalCard
			heading="Mid-Term Goal"
			p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi."
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-8 text-blue-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7c0-2.21 3.582-4 8-4s8 1.79 8 4v7c0 2.21-3.582 4-8 4z"
				/>
			</svg>
		</GoalCard>
		<GoalCard
			heading="Long-Term Goal"
			p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aut."
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-8 text-green-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2zm-5 6a2 2 0 100-4 2 2 0 000 4z"
				/>
			</svg>
		</GoalCard>
	</div>
</Section>

<style>
</style>
