<script>
	import GlassmorphicCard from '../ui/GlassmorphicCard.svelte';
	import Section from '../ui/Section.svelte';
	import { myProjects } from '../../data/projectsData';
	import Techs from '../ui/Techs.svelte';
	import Status from '../ui/Status.svelte';
	import LinkGradient from '../ui/LinkGradient.svelte';
</script>

<Section id="projects">
	<h1 class="mb-2 text-center text-5xl font-extrabold text-white">Projects</h1>
	<div
		class="mx-auto mt-3 mb-5 h-[5px] w-24 rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-violet-700"
	></div>
	<div class="grid grid-cols-1 gap-4 md:mx-auto md:w-[80%] md:grid-cols-2 lg:grid-cols-3">
		{#each myProjects as project (project.id)}
			<GlassmorphicCard>
				<img
					class="h-[40%] w-full rounded-t-2xl object-cover"
					src={project.img}
					alt={`${project.id} project image`}
				/>
				<h1 class="py-2 text-3xl font-bold text-purple-500">
					{project.title}
				</h1>
				<p class=" pb-2 text-slate-300">{project.desc}</p>
				<Status status={project.status}></Status>
				<Techs techs={project.techs}></Techs>
				<div class="mt-4 flex items-center justify-center gap-5 border-t-2 border-slate-600 pt-4">
					<a
						class="rounded-full bg-slate-800 px-6 py-2 text-white shadow transition hover:scale-105 active:scale-95"
						href={project.git}>View Code</a
					>
					<LinkGradient href={project.live}>Live Demo</LinkGradient>
				</div>
			</GlassmorphicCard>
		{/each}
	</div>
</Section>
