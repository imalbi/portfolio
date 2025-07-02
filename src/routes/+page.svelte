<script>
	import { onMount } from 'svelte';
	import ScrollProgressBar from '../components/layout/ScrollProgressBar.svelte';
	import TopNavBar from '../components/layout/TopNavBar.svelte';
	import MobileNav from '../components/layout/MobileNav.svelte';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import AboutSection from '../components/sections/AboutSection.svelte';
	import GoalSection from '../components/sections/GoalSection.svelte';
	import ProjectsSection from '../components/sections/ProjectsSection.svelte';
	import ContactsSection from '../components/sections/ContactsSection.svelte';

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

<ScrollProgressBar></ScrollProgressBar>

<header
	class="fixed top-0 right-0 left-0 z-50 w-full border-b border-transparent bg-slate-950/80 transition-all duration-300 ease-in-out"
>
	<div class="container mx-auto sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between px-2 sm:h-20">
			<div class="flex items-center" id="HomeLogo">
				<a href="/#hero" aria-label="Home" class="flex items-center">
					<span
						class="bg-gradient-to-br from-purple-400 via-purple-600 to-violet-500 bg-clip-text text-2xl font-extrabold tracking-widest text-transparent select-none"
					>
						AC
					</span>
				</a>
			</div>

			<TopNavBar></TopNavBar>

			<!-- Mobile menu button -->
			<button
				class="inline-flex items-center justify-center rounded-md bg-slate-900/70 p-2 text-slate-200 shadow-lg shadow-purple-500/20 transition duration-200 hover:scale-110 hover:bg-slate-800 hover:text-purple-400 focus:ring-2 focus:ring-purple-500 focus:outline-none active:scale-95 md:hidden"
				aria-label="Open main menu"
				onclick={() => (isVisibleMobile = !isVisibleMobile)}
			>
				{#if !isVisibleMobile}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-7 w-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-7 w-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>
	{#if isVisibleMobile}
		<MobileNav></MobileNav>
	{/if}
</header>

<!-- TopBar spacing-->
<div class="h-16 bg-slate-950 sm:h-20"></div>

<main class="flex-grow">
	<!--Hero Section -->
	<HeroSection></HeroSection>

	<ProjectsSection></ProjectsSection>
	<!-- About Section -->
	<!-- Needs:-->
	<!--Animation onMount-->
	<AboutSection></AboutSection>
	<!-- Goals section -->
	<!-- Needs:-->
	<!--Animation onMount-->
	<GoalSection></GoalSection>

	<ContactsSection></ContactsSection>
</main>

<style>
</style>
