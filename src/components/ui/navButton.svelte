<script>
	import { activeSection } from '../../stores/navigationStore';

	let { text, href } = $props();
	const sectionId = $derived(href.replace('#', '')); // Remove the # from href

	// Use both URL hash and active section store to determine active state
	let isActive = $derived(
		$activeSection === sectionId ||
			// Special case for home/hero section
			$activeSection === ''
	);

	let c = $derived(
		isActive
			? 'block px-3 py-2 rounded-md bg-purple-600/20 text-purple-500 w-full text-center'
			: 'block px-3 py-2 rounded-md text-white hover:bg-white/10 w-full text-center'
	);
</script>

<li class="w-full list-none py-2">
	<a class={c} {href}><span>{text}</span></a>
</li>
