<script>
	import GlassmorphicCard from './GlassmorphicCard.svelte';
	import SkillItem from './SkillItem.svelte';
</script>

<div class="my-8 flex flex-wrap items-stretch justify-center gap-8">
	<div
		class="flex h-[420px] w-[340px] flex-col items-center rounded-2xl border border-[rgba(168,85,247,0.18)] bg-[rgba(30,27,75,0.55)] p-8 py-8 shadow-lg backdrop-blur-lg"
	>
		<h3 class="mb-6 text-center text-xl font-bold tracking-wide text-white">
			Frontend Development
		</h3>
		<ul class="grid w-full list-none grid-cols-3 gap-5">
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
				alt="JavaScript"
				text="JavaScript"
			/>
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
				alt="HTML5"
				text="HTML5"
			/>
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
				alt="CSS3"
				text="CSS3"
			/>
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
				alt="Svelte"
				text="Svelte"
			/>
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
				alt="Tailwind CSS"
				text="Tailwind CSS"
			/>
		</ul>
	</div>
	<div
		class="flex h-[420px] w-[340px] flex-col items-center rounded-2xl border border-[rgba(168,85,247,0.18)] bg-[rgba(30,27,75,0.55)] p-8 py-8 shadow-lg backdrop-blur-lg"
	>
		<h3 class="mb-6 text-center text-xl font-bold tracking-wide text-white">
			Backend &amp; Database
		</h3>
		<ul class="grid w-full list-none grid-cols-3 gap-5">
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
				alt="Java"
				text="Java"
			/>
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
				alt="Python"
				text="Python"
			/>
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
				alt="MySQL"
				text="MySQL"
			/>
		</ul>
	</div>
	<div
		class="flex h-[420px] w-[340px] flex-col items-center rounded-2xl border border-[rgba(168,85,247,0.18)] bg-[rgba(30,27,75,0.55)] p-8 py-8 shadow-lg backdrop-blur-lg"
	>
		<h3 class="mb-6 text-center text-xl font-bold tracking-wide text-white">
			Tools &amp; Methodologies
		</h3>
		<ul class="grid w-full list-none grid-cols-3 gap-5">
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
				alt="Git"
				text="Git"
			/>
			<SkillItem
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
				alt="VS Code"
				text="VS Code"
			/>
			<SkillItem
				logo="https://img.icons8.com/color/48/api-settings.png"
				alt="RESTful APIs"
				text="RESTful APIs"
			/>
		</ul>
	</div>
</div>
