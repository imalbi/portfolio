<script>
	import GlassmorphicCard from '../ui/GlassmorphicCard.svelte';
	import Section from '../ui/Section.svelte';
	import AboutField from '../ui/AboutField.svelte';
	import MySkills from '../ui/MySkills.svelte';

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

	function getAge() {
		const birthDate = new Date('2000-08-31');
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}
</script>

<Section id="about">
	<h1 class="mb-2 text-center text-5xl font-extrabold text-white">About Me</h1>
	<div
		class="mx-auto mt-3 mb-5 h-[5px] w-24 rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-violet-700"
	></div>
	<div class=" flex flex-col items-center gap-10 md:flex-row">
		<div class=" md:mx-auto xl:w-[30%]">
			<GlassmorphicCard>
				<p class="mx-auto w-[95%] border-b-2 border-slate-600 pt-2 pb-5">
					I graduated with top marks as an Electrotechnical Expert and then began my studies in
					Computer Engineering at the Polytechnic University of Turin, where I am currently a
					student. I've always been passionate about technology and fascinated by the world of web
					development. Building websites allows me to combine creativity with problem-solving, and I
					enjoy turning ideas into interactive digital experiences. I'm constantly learning and
					eager to take on new challenges in the field of software engineering.
				</p>
				<div class="mx-auto grid w-[90%] grid-cols-2 px-3 pt-3">
					<AboutField heading="Name" text="Alberto Cerqua"></AboutField>
					<AboutField heading="Location" text="Mompantero, Torino, Italia"></AboutField>
					<AboutField heading="Age" text={getAge()}></AboutField>
					<AboutField heading="Availability" text="Open to opportunities"></AboutField>
				</div>
			</GlassmorphicCard>
		</div>
	</div>
	<div class="h-20"></div>
	<h2 class="mb-2 text-center text-3xl font-bold text-white">My Skills</h2>
	<div
		class="mx-auto mb-5 h-[5px] w-24 rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-violet-700"
	></div>
	<MySkills></MySkills>
</Section>

<style>
</style>
