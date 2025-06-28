<script>
	import '../app.css';
	import AnimatedCursor from '../components/AnimatedCursor.svelte';
	let { children } = $props();
</script>

<AnimatedCursor></AnimatedCursor>
{@render children()}
