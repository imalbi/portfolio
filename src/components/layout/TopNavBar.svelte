<script>
	import NavButton from '../ui/navButton.svelte';
	import { items } from '../../data/nav';
</script>

<nav>
	<ul class="hidden items-center space-x-2 md:flex">
		{#each items as item (item.id)}
			<NavButton text={item.text} href={item.href}></NavButton>
		{/each}
	</ul>
</nav>
