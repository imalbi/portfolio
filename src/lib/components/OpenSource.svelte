<script lang="ts">
	const contributions = [
		{
			repo: 'fast-json-stringify',
			context: 'Fastify ecosystem',
			label: 'PR #841 / Merged',
			href: 'https://github.com/fastify/fast-json-stringify/pull/841',
			summary:
				"Fixed a malformed comma serialization edge case in Fastify's JSON stringifier triggered by Zod-generated schemas. Verified with regression tests and benchmarks, reviewed and merged by the project maintainers."
		},
		{
			repo: 'quickshell',
			context: 'QtQuick desktop shell toolkit',
			label: 'PR #1269 / Merged',
			href: 'https://github.com/quickshell-mirror/quickshell/pull/1269',
			summary:
				'Fixed a crash in the Wayland screen capture path when no screen is connected, such as during a display hotplug. Added the missing null checks in the screencopy managers, reviewed and merged upstream.'
		}
	];
</script>

<section class="sec">
	<h2 class="lbl">Open source</h2>
	{#each contributions as c (c.href)}
		<div class="grid">
			<div class="who">
				<h3>{c.repo}</h3>
				<p class="eco m muted">{c.context}</p>
				<a class="pr" href={c.href}>{c.label}</a>
			</div>
			<div class="what">
				<p class="prose">{c.summary}</p>
			</div>
		</div>
	{/each}
</section>

<style>
	.sec {
		padding-block: clamp(2.75rem, 5vw, 4.5rem);
		border-top: 1px solid var(--ink);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--gut);
		align-items: start;
	}
	.grid + .grid {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid var(--ink);
	}
	.who {
		grid-column: 1 / 6;
	}
	.what {
		grid-column: 6 / 13;
	}
	h3 {
		font-family: var(--display);
		text-transform: uppercase;
		letter-spacing: -0.03em;
		font-size: clamp(1.5rem, 3.4vw, 2.25rem);
		line-height: 0.95;
		margin: 0 0 0.5rem;
		word-break: break-word;
	}
	.eco {
		margin: 0 0 1.1rem;
	}
	.pr {
		display: inline-block;
		border: 2px solid var(--ink);
		padding: 0.3rem 0.55rem;
		text-decoration: none;
		font-family: var(--data);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 13px;
		font-weight: 600;
	}
	.pr:hover {
		background: var(--hazard);
		border-color: var(--hazard);
		color: var(--paper);
	}
	.prose {
		margin: 0;
	}

	@media (max-width: 900px) {
		.who,
		.what {
			grid-column: 1 / 13;
		}
	}
</style>
