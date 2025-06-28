<script>
	import Hero from './Hero.svelte';

	import MobileNav from './MobileNav.svelte';

	import TopNavBar from './TopNavBar.svelte';

	import SocialLinks from './SocialLinks.svelte';

	import NavButton from './navButton.svelte';
	import { items } from '../data/nav';

	let isVisibleMobile = $state(false);
</script>

<section
	id="hero"
	class="nebula-bg text-foreground relative grid min-h-screen place-content-center overflow-hidden px-4 py-24"
>
	<Hero></Hero>
</section>

<style>
	.nebula-bg {
		position: relative;
		background: #01000a; /* A darker, almost black, cosmic background */
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
