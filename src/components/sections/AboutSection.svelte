<script>
	import GlassmorphicCard from '../ui/GlassmorphicCard.svelte';
	import Section from '../ui/Section.svelte';
	import AboutField from '../ui/AboutField.svelte';

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

<Section id="about">
	<h1 class=" mb-2 text-center text-5xl font-extrabold text-white">About Me</h1>
	<div
		class="mx-auto mt-3 mb-5 h-[5px] w-24 rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-violet-700"
	></div>
	<div class=" flex flex-col items-center gap-10 md:flex-row">
		<img
			src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=600&q=80"
			class="w-[50%] rounded-xl object-cover shadow-lg"
			style="aspect-ratio: 2/3;"
			alt="Sample person"
		/>
		<div class="w-[50%]">
			<GlassmorphicCard>
				<p class="mx-auto w-[95%] border-b-2 border-slate-600 pt-2 pb-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum ab aperiam
					molestias quia. Blanditiis molestias, dolorem explicabo eum magnam praesentium
					perspiciatis debitis placeat ducimus perferendis saepe mollitia, atque itaque reiciendis
					quia corrupti dolore quasi voluptate deleniti voluptas aliquam animi est! Nobis, magnam
					mollitia. Delectus tenetur ipsum dolores? Ipsum pariatur corrupti recusandae quod
					reiciendis assumenda quia nobis nam deserunt qui, at, vero in omnis unde harum, facere
					esse voluptates soluta vel alias error eligendi ab et! Sapiente, iste. Architecto
					praesentium, reprehenderit ducimus harum doloremque excepturi. Magni, fugit dolore placeat
					iste quibusdam, voluptates illum autem atque deserunt tenetur ratione laboriosam culpa?
				</p>
				<div class="grid grid-cols-2 px-3 pt-3">
					<AboutField heading="Name" text="Alberto Cerqua"></AboutField>
					<AboutField heading="Location" text="Mompantero, Torino, Italia"></AboutField>
					<AboutField heading="Age" text="25"></AboutField>
					<AboutField heading="Availability" text="Open to opportunities"></AboutField>
				</div>
			</GlassmorphicCard>
		</div>
	</div>
</Section>

<style>
</style>
