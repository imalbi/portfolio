<script lang="ts">
	import CaseLayout from '$lib/components/CaseLayout.svelte';
	import CaseSections from '$lib/components/CaseSections.svelte';
	import KinesiologyStudioDiagram from '$lib/diagrams/KinesiologyStudioDiagram.svelte';
	import KinesiologyInterfacePreview from '$lib/components/KinesiologyInterfacePreview.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { entry } from '$lib/content/work';

	const item = entry('#04');

	const brief =
		'A digital presence for a personal trainer and kinesiologist in the Susa valley. Visitors arrive primarily via Instagram on mobile. The goal was to establish professional credibility around posture and recovery, avoid generic fitness clichés, and drive qualified inquiries to the contact form within sixty seconds of landing.';

	const constraints = [
		'Mobile-first traffic arriving from in-app social browsers with limited attention spans.',
		'Hyper-local focus on the Susa valley, stripping an early bilingual experiment to keep the interface fast, lean, and directly targeted.',
		'Zero ongoing hosting cost on Cloudflare serverless edge.',
		'Strict accessibility compliance (WCAG 2.2 AA) suitable for users with mobility or visual sensitivity issues.',
		'Direct lead notifications on mobile without depending on custom domain email infrastructure.'
	];

	const howItWorks = [
		'The site runs on Next.js App Router deployed to Cloudflare Workers via Open-Next, keeping compute at the edge and serving static assets directly from Cloudflare storage.',
		'Initially built with bilingual routing, then deliberately stripped to Italian-only after aligning with the local audience. Removing the language switch freed horizontal space in the desktop dock, reduced vertical clutter in the mobile drawer, and eliminated unused translation overhead.',
		'The design system uses a dark editorial direction with deep ink, warm paper surfaces, saturated purple accents and rare gold hairlines, eliminating decorative animations in favor of immediate readability.',
		'Form submissions dispatch directly from the edge worker to a dedicated Telegram bot, giving the trainer immediate push alerts on mobile so inquiries can be answered in minutes.',
		'All text and interactive elements satisfy WCAG AA contrast thresholds, with reduced-motion defaults for all transitions.'
	];

	const myPart = [
		'End-to-end design and art direction: visual identity, typography system, responsive layouts, and copy structure.',
		'Full-stack edge implementation: Open-Next configuration, Cloudflare Workers deployment, architecture simplification, and the contact handler pipeline.',
		'Structured data and local search optimization for regional discoverability in Susa.'
	];

	const outcome =
		'A fast, accessible presence running entirely on edge infrastructure with zero recurring server costs. Inquiries are pushed instantly to Telegram, enabling direct follow-ups within minutes of submission without email client friction.';

	const stack = [
		{ tech: 'Next.js / React', role: 'App router, server-rendered components' },
		{ tech: 'Cloudflare Workers / Open-Next', role: 'Edge deployment with serverless compute' },
		{ tech: 'Tailwind CSS', role: 'Design token implementation and responsive layout' },
		{ tech: 'next-intl', role: 'Type-safe Italian message catalog and server-rendered content' },
		{ tech: 'Telegram Bot API', role: 'Instant mobile push notifications for inbound leads' }
	];
</script>

<SeoHead
	title="{item.title}, case {item.id}"
	description="A mobile-first landing page for a personal trainer and kinesiologist in the Susa valley. Next.js on Cloudflare Workers, with contact requests pushed to a Telegram bot."
/>

<CaseLayout {item}>
	<CaseSections {brief} {constraints} {howItWorks} {myPart} {outcome} {stack}>
		{#snippet diagram()}
			<KinesiologyStudioDiagram />
		{/snippet}
		{#snippet preview()}
			<KinesiologyInterfacePreview />
		{/snippet}
	</CaseSections>
</CaseLayout>
