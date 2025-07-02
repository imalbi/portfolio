<script>
	import GlassmorphicCard from './GlassmorphicCard.svelte';
	import SkillItem from './SkillItem.svelte';
	import { skillCategories } from '../../data/skillsData';
</script>

<div class="mx-auto my-8 flex flex-col flex-nowrap items-stretch justify-center gap-8 lg:flex-row">
	{#each skillCategories as category (category.id)}
		<GlassmorphicCard>
			<h3 class="mb-6 text-center text-xl font-bold tracking-wide text-white">
				{category.title}
			</h3>
			<ul class="grid w-full list-none grid-cols-3 gap-5">
				{#each category.skills as skill}
					<SkillItem logo={skill.logo} alt={skill.alt} text={skill.text} />
				{/each}
			</ul>
		</GlassmorphicCard>
	{/each}
</div>
