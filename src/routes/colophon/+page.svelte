<script lang="ts">
	import StackTable from '$lib/components/StackTable.svelte';

	const build = [
		{ tech: 'SvelteKit', role: 'Static site generation via adapter-static' },
		{ tech: 'Rendering', role: 'Every route prerendered at build time, client-side rendering disabled' },
		{ tech: 'JavaScript', role: 'None. Navigation is plain anchor links.' },
		{ tech: 'CSS', role: 'Hand written, no framework. Tokens as custom properties, components scoped.' },
		{ tech: 'Type', role: 'Archivo and Archivo Black for display and body, IBM Plex Mono for data' },
		{ tech: 'Fonts', role: 'Self-hosted, latin subset, woff2, roughly 84 KB total' },
		{ tech: 'Hosting', role: 'Cloudflare Pages' }
	];
</script>

<svelte:head>
	<title>Colophon</title>
	<meta name="description" content="How this site is built." />
</svelte:head>

<article class="col">
	<h1>Colophon</h1>

	<p class="prose">
		This site ships no JavaScript. Every page is rendered to HTML at build time and client-side
		rendering is switched off, so the browser receives markup, one stylesheet and four font files.
		Navigation is handled by the browser, which is what browsers are for.
	</p>

	<p class="prose">
		The layout is a twelve column grid. The hairlines between rows and compartments are not borders:
		they are a one pixel grid gap over a dark parent, which gives exact rules with no doubling where
		cells meet. There is one accent colour, and it never appears in body copy, because at this size it
		does not clear the contrast threshold.
	</p>

	<section class="blk">
		<h2 class="lbl">Build</h2>
		<StackTable rows={build} />
	</section>
</article>

<style>
	.col {
		padding-block: clamp(2.75rem, 5vw, 4.5rem);
	}
	h1 {
		font-family: var(--display);
		text-transform: uppercase;
		letter-spacing: -0.035em;
		font-size: clamp(2rem, 6vw, 4.25rem);
		line-height: 0.9;
		margin: 0 0 2rem;
	}
	.prose {
		margin: 0 0 1.25rem;
	}
	.blk {
		margin-top: 2.75rem;
	}
</style>
