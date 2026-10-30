<script lang="ts">
	import Masthead from '$lib/components/Masthead.svelte';
	import WorkIndex from '$lib/components/WorkIndex.svelte';
	import OpenSource from '$lib/components/OpenSource.svelte';
	import Capabilities from '$lib/components/Capabilities.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
</script>

<SeoHead
	title="Alberto Cerqua, frontend developer"
	description="Frontend developer in Turin. Production web and mobile applications, design systems, and edge infrastructure, documented as technical case studies."
/>

<Masthead />

<section class="sec">
	<p class="prose">
		I am a frontend developer building production web and mobile applications, comfortable across the
		stack. Most of my depth sits where the interface meets real infrastructure: streamed responses,
		real-time transports, schema validation at the boundaries, and legacy code that has to keep running
		while you fix it.
	</p>
	<p class="prose exp">
		One year at Efebia (August 2025 to August 2026), progressing from frontend to full-stack across
		client products.
	</p>
</section>

<Capabilities />
<WorkIndex />
<OpenSource />

<style>
	.sec {
		padding-block: clamp(2.75rem, 5vw, 4.5rem);
	}
	.prose {
		margin: 0;
	}
	.exp {
		margin-top: 1rem;
		color: var(--muted);
	}
</style>
