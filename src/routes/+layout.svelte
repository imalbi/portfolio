<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="grain" aria-hidden="true"></div>

<div class="wrap">
	<SiteHeader />
	{@render children()}
	<SiteFooter />
</div>
