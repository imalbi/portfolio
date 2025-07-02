<script>
	import GoalCard from '../ui/GoalCard.svelte';

	import ScrollProgressBar from '../layout/ScrollProgressBar.svelte';

	import Section from '../ui/Section.svelte';

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
	<div
		class="mx-auto my-8 flex flex-col flex-nowrap items-stretch justify-center gap-8 lg:w-[80%] lg:flex-row"
	>
		<GoalCard
			heading="Short-Term Goal"
			p="To secure a meaningful internship at a stimulating company, where I can apply my theoretical knowledge and develop practical, real-world web development skills. My goal is to learn from industry professionals, understand team dynamics, and make active contributions to projects."
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
			p="To transition from an intern to a fully-fledged Web Developer. By leveraging the experience and skills gained, I aim to manage projects with increasing autonomy, solve complex problems, and establish myself as a reliable and productive member of the development team."
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
			p="To achieve a Senior Web Developer position. This entails not only mastering web technologies but also taking on a mentorship role for junior colleagues, leading architectural and strategic project decisions, and driving continuous innovation within the company."
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
