<script>
	import GlassmorphicCard from '../ui/GlassmorphicCard.svelte';
	import Section from '../ui/Section.svelte';
	import { myProjects } from '../../data/projectsData';
	import Techs from '../ui/Techs.svelte';
	import Status from '../ui/Status.svelte';
	import LinkGradient from '../ui/LinkGradient.svelte';
	import SectionTitle from '../ui/SectionTitle.svelte';
</script>

<Section id="projects">
	<SectionTitle title="Projects"></SectionTitle>

	<div
		class="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-2 xl:grid-cols-3"
	>
		{#each myProjects as project (project.id)}
			<GlassmorphicCard>
				<div class="flex h-full flex-col">
					<img
						class="h-48 w-full rounded-t-2xl object-cover"
						src={project.img}
						alt={`${project.id} project image`}
					/>
					<div class="flex h-full flex-1 flex-col">
						<h1 class="mt-2 mb-2 text-2xl font-bold text-purple-500">
							{project.title}
						</h1>
						<p class="mb-4 min-h-[3rem] flex-1 text-slate-300">{project.desc}</p>
						<Status status={project.status}></Status>
						<Techs techs={project.techs}></Techs>
						<div
							class="mt-4 flex h-full items-center justify-center gap-4 border-t-2 border-slate-600 pt-4"
							id="project-link"
						>
							<a
								class="rounded-full border-2 border-purple-400 px-6 py-2 text-center font-bold text-nowrap text-purple-200 transition hover:scale-105 hover:bg-purple-900/30 focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95"
								href={project.git}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="inline-block h-4 w-4"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.18 9.18 0 0 1 2.5-.34c.85 0 1.71.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.63.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
									/>
								</svg>
								View Code</a
							>
							<LinkGradient href={project.live}>Live Demo</LinkGradient>
						</div>
					</div>
				</div>
			</GlassmorphicCard>
		{/each}
	</div>
</Section>
