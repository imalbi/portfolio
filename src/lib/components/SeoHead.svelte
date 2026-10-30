<script lang="ts">
	import { page } from '$app/state';

	let { title, description }: { title: string; description: string } = $props();

	// Social crawlers need absolute URLs. The site is served from Pages, so this is the one place to change.
	const SITE = 'https://imalbi.pages.dev';
	const url = $derived(SITE + (page.url.pathname === '/' ? '/' : page.url.pathname.replace(/\/$/, '')));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="{SITE}/og.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
