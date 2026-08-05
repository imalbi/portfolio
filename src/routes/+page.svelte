<script lang="ts">
	import Masthead from '$lib/components/Masthead.svelte';
	import WorkIndex from '$lib/components/WorkIndex.svelte';
	import OpenSource from '$lib/components/OpenSource.svelte';
	import Capabilities from '$lib/components/Capabilities.svelte';
</script>

<svelte:head>
	<title>Alberto Cerqua, full-stack developer</title>
	<meta
		name="description"
		content="Full-stack developer in Turin. Retrieval pipelines, streamed APIs and production recovery, documented as technical case studies."
	/>
	<meta property="og:title" content="Alberto Cerqua, full-stack developer" />
	<meta
		property="og:description"
		content="Retrieval pipelines, streamed APIs and production recovery, documented as technical case studies."
	/>
	<meta property="og:image" content="/og.png" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Masthead />

<section class="sec">
	<p class="prose">
		I build web and mobile products end to end. Most of my depth sits where the frontend meets real
		infrastructure: streamed responses, vector retrieval, schema validation at the boundaries, and
		legacy code that has to keep running while you fix it.
	</p>
</section>

<WorkIndex />
<OpenSource />
<Capabilities />

<style>
	.sec {
		padding-block: clamp(2.75rem, 5vw, 4.5rem);
	}
	.prose {
		margin: 0;
	}
</style>
