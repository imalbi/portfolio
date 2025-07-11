<script>
	import LinkGradient from '../ui/LinkGradient.svelte';
	const buttonClass =
		'rounded-full border-2 border-purple-400 px-6 py-2 text-center font-bold text-purple-200 transition hover:scale-105 hover:bg-purple-900/30 focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95';
	import { reveal } from 'svelte-reveal';
	import { animateTyping } from '$lib/animateTyping';
	import 'svelte-reveal/styles.css';
</script>

<section
	id="hero"
	class="nebula-bg flex min-h-screen flex-col justify-center overflow-hidden px-4 py-24 lg:flex-row lg:gap-8"
>
	<div
		class="order-2 mb-6 flex items-end justify-center px-8 lg:order-2 lg:mb-0 lg:items-center lg:px-0"
	>
		<img
			src="/photo.webp"
			alt="Portrait of Alberto Cerqua, aspiring frontend developer"
			loading="lazy"
			use:reveal={{ animation: 'slide', x: 80, opacity: 0, delay: 100 }}
			class="sr__hide w-full max-w-xs rounded-full object-cover shadow-[0_4px_20px_rgba(168,85,247,0.5)] transition-transform duration-300 hover:scale-105 hover:shadow-2xl lg:max-w-lg"
		/>
	</div>

	<div class="order-3 flex flex-col items-center justify-center lg:order-1 lg:items-start">
		<div
			use:reveal={{ animation: 'slide', x: -80, opacity: 0, delay: 200 }}
			class=" sr__hide flex flex-col items-center justify-center gap-6 px-8 lg:items-start lg:py-10"
		>
			<h2 class="text-center text-2xl font-semibold text-purple-400 lg:text-start">Hi, I'm</h2>
			<h1
				class="text-center text-6xl font-extrabold text-white underline decoration-purple-600 decoration-8 underline-offset-8 lg:text-start"
			>
				Alberto Cerqua
			</h1>
			<!-- Typewriter effect for dynamic text -->
			<h2 class="mt-2 text-center text-4xl font-bold text-slate-200 lg:text-start">
				<span use:animateTyping={'Aspiring Web Developer'}>Aspiring Web Developer</span>
			</h2>
			<p class="max-w-xl text-center text-slate-300 lg:text-start">
				I'm learning web development and focusing on building user-friendly interfaces with Svelte,
				JavaScript, and CSS. I enjoy problem-solving and am committed to growing as a frontend
				developer.
			</p>
			<div class="mt-4 flex flex-wrap justify-center gap-4">
				<a href="/#about" class={buttonClass}>About Me</a>
				<a href="/#contacts" class={buttonClass}>Contact me</a>
				<LinkGradient href="#projects">View Projects</LinkGradient>
			</div>
		</div>
	</div>
</section>

<style>
	.nebula-bg {
		position: relative;
		background: #01000a; /* A darker, almost black, colgic background */
	}

	/* This rule ensures your text and other content sits ON TOP of the background effects. */
	.nebula-bg > * {
		position: relative;
		z-index: 2;
	}

	/* LAYER 1: The gaseous clouds (foreground)
      We use ::before for the colorful nebula clouds.
    */
	.nebula-bg::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1; /* Places clouds on top of stars */
		pointer-events: none;

		/* More complex gradients for a richer look */
		background:
            /* Bright central core (like in the photo) */
			radial-gradient(ellipse at 20% 50%, rgba(224, 204, 255, 0.45) 0%, transparent 35%),
			/* Main purple cloud mass */
				radial-gradient(ellipse at 60% 40%, rgba(168, 85, 247, 0.4) 0%, transparent 60%),
			/* Secondary pinkish cloud */
				radial-gradient(ellipse at 30% 65%, rgba(236, 72, 153, 0.25) 0%, transparent 70%),
			/* Faint blueish accents */
				radial-gradient(ellipse at 95% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 70%);

		/* THIS IS THE KEY: We blur the gradients significantly to create the soft, "gassy" look.
          Contrast is increased slightly to make the colors pop.
        */
		filter: blur(80px) contrast(1.1);

		/* A more subtle, swirling animation for the clouds */
		animation:
			moveNebula 20s ease-in-out infinite,
			blinkClouds 20s ease-in-out infinite;
	}

	@keyframes blinkClouds {
		0%,
		100% {
			opacity: 0.85;
		}
		10% {
			opacity: 1;
		}
		20% {
			opacity: 0.7;
		}
		30% {
			opacity: 1;
		}
		40% {
			opacity: 0.8;
		}
		50% {
			opacity: 1;
		}
		60% {
			opacity: 0.7;
		}
		70% {
			opacity: 1;
		}
		80% {
			opacity: 0.8;
		}
		90% {
			opacity: 1;
		}
	}

	/* LAYER 2: The starfield (background)
      We use ::after for the stars to keep them separate from the clouds.
    */
	.nebula-bg::after {
		content: '';
		position: absolute;
		inset: -100px; /* Make it larger to hide edges during animation */
		z-index: 0; /* Places stars behind the clouds */
		pointer-events: none;

		/* Create a repeating starfield using tiny radial gradients */
		background-image:
			radial-gradient(1px 1px at 25px 55px, white, transparent),
			radial-gradient(1px 1px at 70px 90px, white, transparent),
			radial-gradient(1px 1px at 150px 180px, white, transparent),
			radial-gradient(2px 2px at 300px 80px, white, transparent),
			radial-gradient(1px 1px at 450px 150px, white, transparent),
			radial-gradient(2px 2px at 550px 250px, white, transparent),
			radial-gradient(1px 1px at 480px 320px, white, transparent);

		background-repeat: repeat;
		background-size: 600px 400px;

		/* A very slow, constant drift for the stars to create a parallax effect */
		animation:
			moveStars 150s linear infinite,
			twinkleStars 3.5s steps(5, end) infinite;
	}

	@keyframes twinkleStars {
		0%,
		100% {
			opacity: 1;
		}
		10% {
			opacity: 0.7;
		}
		20% {
			opacity: 1;
		}
		30% {
			opacity: 0.5;
		}
		40% {
			opacity: 1;
		}
		50% {
			opacity: 0.8;
		}
		60% {
			opacity: 1;
		}
		70% {
			opacity: 0.6;
		}
		80% {
			opacity: 1;
		}
		90% {
			opacity: 0.9;
		}
	}

	/* A more fluid animation for the nebula clouds */
	@keyframes moveNebula {
		0% {
			transform: translate(0, 0) scale(1);
			opacity: 0.9;
		}
		50% {
			transform: translate(15px, -25px) scale(1.05);
			opacity: 1;
		}
		100% {
			transform: translate(0, 0) scale(1);
			opacity: 0.9;
		}
	}

	/* A slow-drifting animation for the background stars */
	@keyframes moveStars {
		from {
			transform: translate(0, 0);
		}
		to {
			/* This moves the repeating background by one full tile, creating a seamless loop */
			transform: translate(-600px, -400px);
		}
	}
</style>
