<script>
	import GlassmorphicCard from '../ui/GlassmorphicCard.svelte';

	const contactLinks = [
		{
			label: 'Email',
			text: 'alberto.cerqua@icloud.com',
			href: 'mailto:alberto.cerqua@icloud.com',
			iconPath:
				'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z'
		},
		{
			label: 'LinkedIn',
			text: 'linkedin.com/in/alberto-cerqua-433059361/',
			href: 'https://www.linkedin.com/in/alberto-cerqua-433059361/',
			iconPath:
				'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v4.725z'
		},
		{
			label: 'GitHub',
			text: 'github.com/imalbi',
			href: 'https://github.com/imalbi',
			iconPath:
				'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
		}
	];
</script>

<GlassmorphicCard>
	<h2 class="pb-4 text-2xl font-bold tracking-wide text-white uppercase">
		Contact Information & CV
	</h2>

	<div class="mt-6 flex flex-col gap-4 text-white">
		{#each contactLinks as link}
			<div class="flex items-center gap-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 flex-shrink-0 text-purple-600"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d={link.iconPath} />
				</svg>
				<div>
					<div class="text-xs text-gray-400">{link.label}</div>
					<a href={link.href} target="_blank" rel="noopener" class="break-all hover:underline">
						{link.text}
					</a>
				</div>
			</div>
		{/each}
	</div>

	<hr class="my-6 border-t border-purple-700 opacity-50" />

	<div class="mt-4 flex flex-col gap-2">
		<a
			href="/resume.pdf"
			target="_blank"
			rel="noopener"
			class="rounded-lg bg-white/5 px-3 py-2 font-semibold text-purple-300 transition-colors duration-200 hover:bg-white/10 hover:text-purple-400 hover:underline"
		>
			<!-- Icona "View" -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-1 inline h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
				/>
			</svg>
			View Online
		</a>
		<a
			href="/resume.pdf"
			download
			class="rounded-lg bg-white/5 px-3 py-2 font-semibold text-purple-300 transition-colors duration-200 hover:bg-white/10 hover:text-purple-400 hover:underline"
		>
			<!-- Icona "Download" -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-1 inline h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
				/>
			</svg>
			Download CV (.pdf)
		</a>
	</div>
</GlassmorphicCard>
