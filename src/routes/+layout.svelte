<script>
	import '../app.css';
	import AnimatedCursor from '../components/layout/AnimatedCursor.svelte';
	let { children } = $props();
</script>

<AnimatedCursor></AnimatedCursor>
{@render children()}
