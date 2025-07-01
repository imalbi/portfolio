<script>
	//Glassmorphic Card with Glow Cursor & Reactive Border
	let { children } = $props();
	import { onMount } from 'svelte';

	onMount(() => {
		const card = document.querySelector('.card');
		const glow = card.querySelector('.glow');

		card.addEventListener('mousemove', (e) => {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			card.style.setProperty('--x', `${x}px`);
			card.style.setProperty('--y', `${y}px`);

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			const rotateX = ((y - centerY) / centerY) * 10;
			const rotateY = ((x - centerX) / centerX) * -10;

			card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

			const angle = 135 + rotateX - rotateY;
			card.style.setProperty('--angle', `${angle}deg`);
		});

		card.addEventListener('mouseleave', () => {
			card.style.transform = `rotateX(0deg) rotateY(0deg)`;
			card.style.setProperty('--angle', `135deg`);
		});
	});
</script>

<div class="card-container">
	<div class="card">
		{@render children()}
		<div class="glow"></div>
	</div>
</div>

<style>
	.card-container {
		width: 100%;
		z-index: 1;
	}

	/* Agregamos una textura de noise con pseudo-elemento */
	.card::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image: repeating-linear-gradient(
			45deg,
			rgba(255, 255, 255, 0.03) 0 2px,
			transparent 2px 8px
		);
		opacity: 0.05;
		pointer-events: none;
		z-index: 1;
	}

	.card {
		position: relative;
		padding: 2em;
		color: white;
		border-radius: 20px;
		backdrop-filter: blur(14px);
		background: rgba(255, 255, 255, 0.05);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
		overflow: hidden;
		transform-style: preserve-3d;
		transition: transform 0.1s ease;
		font-family: 'Poppins', sans-serif;
		z-index: 1;
	}

	.card::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 20px;
		padding: 2px;
		background: linear-gradient(
			var(--angle, 135deg),
			rgba(255, 255, 255, 0.1),
			rgba(255, 255, 255, 0)
		);
		-webkit-mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		pointer-events: none;
		z-index: 2;
		transition: background 0.2s ease;
	}

	.glow {
		position: absolute;
		top: var(--y, 50%);
		left: var(--x, 50%);
		width: 200px;
		height: 200px;
		background: radial-gradient(circle at center, rgba(200, 0, 218, 0.2), transparent 80%);
		transform: translate(-50%, -50%);
		pointer-events: none;
		opacity: 0;
		transition:
			top 0.1s,
			left 0.1s,
			opacity 0.3s ease;
		z-index: 0;
	}

	.card:hover .glow {
		opacity: 1;
	}
</style>
