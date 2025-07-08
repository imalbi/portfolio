<script>
	let dot; // Il punto centrale
	let aura; // L'aura esterna

	let mouse = { x: -100, y: -100 };

	// Stato per gestire l'hover sugli elementi interattivi
	let isHovering = $state(false);

	// $effect gestisce l'inizializzazione e la pulizia
	$effect(() => {
		// Funzione per aggiornare le coordinate del mouse
		const handleMouseMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};

		// Funzioni per gestire l'hover sugli elementi interattivi
		const handleMouseEnter = () => {
			isHovering = true;
		};
		const handleMouseLeave = () => {
			isHovering = false;
		};

		// Aggiungiamo l'evento mousemove per aggiornare le coordinate del mouse
		window.addEventListener('mousemove', handleMouseMove);

		// Selezioniamo tutti gli elementi interattivi e aggiungiamo i listener
		const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
		interactiveElements.forEach((el) => {
			el.addEventListener('mouseenter', handleMouseEnter);
			el.addEventListener('mouseleave', handleMouseLeave);
		});

		// Loop di animazione per muovere il cursore in modo fluido
		let animationFrameId;
		const animate = () => {
			// Muoviamo il punto direttamente
			dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
			// Muoviamo l'aura con un effetto "lag" (ritardo)
			aura.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;

			animationFrameId = requestAnimationFrame(animate);
		};
		animate();

		// Funzione di pulizia (cleanup)
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			interactiveElements.forEach((el) => {
				el.removeEventListener('mouseenter', handleMouseEnter);
				el.removeEventListener('mouseleave', handleMouseLeave);
			});
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<div class="cursor-aura" bind:this={aura} class:hovered={isHovering}></div>
<div class="cursor-dot" bind:this={dot}></div>

<style>
	/* Nascondiamo il cursore predefinito su tutto il sito */
	:global(body) {
		cursor: none;
	}

	/* Stile per l'aura esterna */
	.cursor-aura {
		position: fixed;
		top: -25px;
		left: -25px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: rgba(168, 85, 247, 0.25);

		/* Effetto blur e transizione fluida */
		filter: blur(8px);
		transition:
			transform 0.15s ease-out,
			width 0.3s ease,
			height 0.3s ease,
			top 0.3s ease,
			left 0.3s ease;

		pointer-events: none;
		z-index: 9999;
	}

	/* Stile per il punto centrale */
	.cursor-dot {
		position: fixed;
		width: 12px;
		height: 12px;
		top: -6px;
		left: -6px;
		border-radius: 50%;
		background-color: #a855f7;
		border: 1px solid rgba(255, 255, 255, 0.8);
		pointer-events: none;
		z-index: 10000; /* Sopra a tutto */
	}

	/* Stile dell'aura quando siamo in hover */
	.cursor-aura.hovered {
		width: 70px;
		height: 70px;
		top: -35px;
		left: -35px;
		background-color: rgba(168, 85, 247, 0.4);
	}
</style>
