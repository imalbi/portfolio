<script>
	import { onMount } from 'svelte';
	import TopNavBar from '../components/layout/TopNavBar.svelte';
	import MobileNav from '../components/layout/MobileNav.svelte';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import AboutSection from '../components/sections/AboutSection.svelte';
	import GoalSection from '../components/sections/GoalSection.svelte';
	import ProjectsSection from '../components/sections/ProjectsSection.svelte';
	import ContactsSection from '../components/sections/ContactsSection.svelte';
	import { activeSection } from '../stores/navigationStore';
	import Header from '../components/layout/Header.svelte';

	let isVisibleMobile = $state(false);
</script>

<Header></Header>

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
