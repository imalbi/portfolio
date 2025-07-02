<script>
	import NavButton from '../ui/navButton.svelte';
	import { items } from '../../data/nav';

	let isVisibleMobile = $state(false);
</script>

<nav class="w-screen border-t-1 border-slate-600 bg-slate-950/60 md:hidden">
	<ul class="flex h-screen w-full flex-col items-center justify-center">
		{#each items as item (item.id)}
			<NavButton text={item.text} href={item.href}></NavButton>
		{/each}
	</ul>
</nav>
