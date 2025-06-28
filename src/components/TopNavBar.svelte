<script>
	import SocialLinks from './SocialLinks.svelte';

	import NavButton from './navButton.svelte';
	import { items } from '../data/nav';

	let isVisibleMobile = $state(false);
</script>

<nav>
	<ul class="hidden items-center space-x-2 md:flex">
		{#each items as item (item.id)}
			<NavButton text={item.text} href={item.href}></NavButton>
		{/each}
	</ul>
</nav>
