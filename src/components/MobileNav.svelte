<script>
	import NavButton from './navButton.svelte';
	import { items } from '../data/nav';

	let isVisibleMobile = $state(false);
</script>

<nav class="h-fit border-t-1 border-slate-600 bg-slate-950/60 md:hidden">
	<ul class="flex w-full flex-col">
		{#each items as item (item.id)}
			<NavButton text={item.text} href={item.href}></NavButton>
		{/each}
	</ul>
</nav>
