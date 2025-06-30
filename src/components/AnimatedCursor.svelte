<script>
	import { onMount, onDestroy } from 'svelte';

	let x = 0,
		y = 0;
	let visible = true;

	function move(e) {
		x = e.clientX;
		y = e.clientY;
		visible = true;
	}
	function hide() {
		visible = false;
	}
	function show() {
		visible = true;
	}

	onMount(() => {
		window.addEventListener('mousemove', move);
		window.addEventListener('mouseenter', show);
		window.addEventListener('mouseleave', hide);
		return () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('mouseenter', show);
			window.removeEventListener('mouseleave', hide);
		};
	});
</script>

<div class="nebula-cursor {visible ? '' : 'hide'}" style="left: {x}px; top: {y}px;"></div>

<style>
	.nebula-cursor {
		position: fixed;
		top: 0;
		left: 0;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		pointer-events: none;
		z-index: 99999;
		transform: translate(-50%, -50%);
		background: radial-gradient(
			circle at 60% 40%,

			rgba(168, 85, 247, 0.18) 20%,
			rgba(236, 72, 153, 0.1) 50%,
			rgba(59, 130, 246, 0.08) 80%,
			transparent 100%
		);
		border: 2px solid rgba(168, 85, 247, 0.75);
		transition:
			background 0.6s,
			border 0.3s,
			opacity 0.3s,
			transform 0.12s cubic-bezier(0.22, 1, 0.36, 1);
		animation: nebula-cursor-anim 4s ease-in-out infinite alternate;
		opacity: 0.85;
		backdrop-filter: blur(0.5px);
	}

	@keyframes nebula-cursor-anim {
		0% {
			filter: blur(0px) brightness(1);
		}
		50% {
			filter: blur(1px) brightness(1.08);
		}
		100% {
			filter: blur(0px) brightness(1);
		}
	}

	.nebula-cursor.hide {
		opacity: 0;
		transition: opacity 0.2s;
	}

	@media (pointer: coarse) {
		.nebula-cursor {
			display: none !important;
		}
	}
</style>
