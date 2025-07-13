<script>
	import { onMount } from 'svelte';
	import TopNavBar from '../components/layout/TopNavBar.svelte';
	import MobileNav from '../components/layout/MobileNav.svelte';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import AboutSection from '../components/sections/AboutSection.svelte';
	import ProjectsSection from '../components/sections/ProjectsSection.svelte';
	import ContactsSection from '../components/sections/ContactsSection.svelte';
	import { activeSection } from '../stores/navigationStore';
	import Header from '../components/layout/Header.svelte';

	let isVisibleMobile = $state(false);
</script>

<Header></Header>

<main class="flex-grow">
	<!--Hero Section -->
	<HeroSection></HeroSection>

	<ProjectsSection></ProjectsSection>
	<!-- About Section -->
	<!-- Needs:-->
	<!--Animation onMount-->
	<AboutSection></AboutSection>

	<ContactsSection></ContactsSection>
</main>

<style>
</style>
