<script>
	import { page } from '$app/stores';
	let { text, href } = $props();

	let isActive = $derived(
		$page.url.hash === href ||
			// OPPURE, vero se:
			// 1. L'href del link è `#home`
			// 2. Il percorso della pagina è `/`
			// 3. Non c'è nessun hash nell'URL (stringa vuota)
			(href === '#home' && $page.url.pathname === '/' && $page.url.hash === '')
	);

	let c = $derived(
		isActive
			? 'px-3 py-2 rounded-md bg-purple-600/20 text-purple-500'
			: 'px-3 py-2 rounded-md text-white hover:bg-white/10'
	);
</script>

<a class={c} {href}><span>{text}</span></a>
