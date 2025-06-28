<script>
	import Hero from '../components/Hero.svelte';

	import MobileNav from '../components/MobileNav.svelte';

	import TopNavBar from '../components/TopNavBar.svelte';

	import SocialLinks from '../components/SocialLinks.svelte';

	import NavButton from '../components/navButton.svelte';
	import { items } from '../data/nav';

	let isVisibleMobile = $state(false);
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 w-full border-b border-transparent bg-slate-950 transition-all duration-300 ease-in-out"
>
	<div class="container mx-auto sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between sm:h-20">
			<div class="flex items-center">
				<a
					class="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-800 bg-clip-text text-2xl font-extrabold text-transparent"
					href="/#hero">Alberto Cerqua</a
				>
			</div>

			<TopNavBar></TopNavBar>

			<!-- Mobile menu button -->
			<button
				class="inline-flex items-center justify-center rounded-md p-2 text-slate-200 transition duration-200 hover:scale-110 hover:bg-slate-800 hover:text-purple-400 focus:ring-2 focus:ring-purple-500 focus:outline-none active:scale-95 md:hidden"
				aria-label="Open main menu"
				onclick={() => (isVisibleMobile = !isVisibleMobile)}
			>
				<svg
					class="h-7 w-7 transition-transform duration-300 group-hover:rotate-90"
					xmlns="http://www.w3.org/2000/svg"
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
			</button>
		</div>
	</div>
	{#if isVisibleMobile}
		<MobileNav></MobileNav>
	{/if}
</header>
<div class="h-18"></div>

<main class="flex-grow">
	<section
		id="hero"
		class="text-foreground relative grid min-h-screen place-content-center overflow-hidden px-4 py-24"
		style="background: #1e293b; background-image: radial-gradient(circle at 50% 50%, #a78bfa 0%, #7c3aed 30%, #312e81 60%, #1e293b 100%);"
	>
		<Hero></Hero>
	</section>

	<section
		id="about"
		class="text-foreground relative grid min-h-screen place-content-center overflow-hidden px-4 py-24"
		style="background: #1e293b; background-image: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 5%, rgba(124, 58, 237, 0.2) 20%, rgba(30, 41, 59, 1) 70%);"
	>
		<h1>Ciao</h1>
	</section>
</main>
