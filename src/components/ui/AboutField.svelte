<script>
	let { heading, text } = $props();
	let c = $state(heading === 'Availability' ? 'text-green-500' : '');
</script>

<div>
	<div>
		<h2 class=" font-bold">{heading}</h2>
	</div>
	<p class={c}>{text}</p>
</div>
