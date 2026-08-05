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

	const measured = [
		{ tech: 'Method', role: 'Lighthouse 13.4.1, mobile preset, simulated throttling, run against the built site' },
		{ tech: 'Performance', role: '100 / 100' },
		{ tech: 'Accessibility', role: '100 / 100' },
		{ tech: 'SEO', role: '100 / 100' },
		{ tech: 'Requests, cover sheet', role: '8: one document, two stylesheets, four fonts, one favicon' },
		{ tech: 'Transferred, cover sheet', role: '90.2 KB total' },
		{ tech: 'JavaScript', role: '0 bytes, 0 files, verified against the build output directly' },
		{ tech: 'Fonts', role: '83.9 KB across 4 woff2 files' },
		{ tech: 'CSS, cover sheet', role: '7.1 KB across 2 files' },
		{ tech: 'HTML, cover sheet', role: '5.1 KB' }
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

	<section class="blk">
		<h2 class="lbl">Measured</h2>
		<p class="prose">
			Figures below are measured, not estimated. The accent colour is the reason accessibility took
			work rather than falling out for free: hazard red on this paper measures 4.21:1, so it is
			confined to rules, markers and text large enough to sit under the 3:1 threshold. Every label
			too small to clear it is set in ink.
		</p>
		<StackTable rows={measured} />
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
