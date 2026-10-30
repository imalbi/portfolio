<script lang="ts">
	import CaseLayout from '$lib/components/CaseLayout.svelte';
	import CaseSections from '$lib/components/CaseSections.svelte';
	import RecoveryDiagram from '$lib/diagrams/RecoveryDiagram.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { entry } from '$lib/content/work';

	const item = entry('#02');

	const brief =
		'A consumer mobile app that had passed through three teams in eighteen months, changed source control provider mid-life, and arrived with no linter, no formatter, native build output committed to git, and three different ways of talking to the API living side by side. It was in the stores and in use. The job was to make it safe to change again, while a rewrite of the backend ran underneath it.';

	const constraints = [
		'The app was live throughout. Nothing could be taken offline to be fixed.',
		'Each of the three previous teams had left its own data-access idiom in place, and all three still had callers.',
		'The backend was being replaced in parallel, so the API underneath was moving while the app was being stabilised.',
		'There was no test suite meaningful enough to catch a regression.'
	];

	const howItWorks = [
		'Server state goes through a query layer that owns caching, deduplication and invalidation. Client state that outlives a screen sits separately. The disease being treated was screens that built their own service objects and bypassed both.',
		'API types are generated from the backend specification, so the client cannot drift from the server without the build noticing. The query and mutation layer on top of them is written by hand, which keeps one shape for loading and error state across the app.',
		'The legacy client and the generated typed one run side by side during the migration. New code goes on the typed one; old call sites move over incrementally rather than in a single cutover on a live app with no tests.',
		'Years of one-off UI components were consolidated behind a small set of shared primitives, and the result was checked by comparing screens before and against after, because with no visual coverage the compiler cannot tell you the screen still looks right.',
		'The remaining debt is not described, it is counted: read-only audits record how many call sites still use each old pattern, so the next pass can measure whether it moved.'
	];

	// Scoped from the git record, measured by lines changed.
	const myPart = [
		'The profile section and the social feed screens, including the immersive feed item, which is the largest single component I wrote here.',
		'Work on the typed API layer and the migration of screens onto it.',
		'Part of the third team on this codebase, arriving after two others had built and partly abandoned it.',
		'Not mine: the first eighteen months of the app, and the TypeScript backend that replaced the original Java services, which another developer led.'
	];

	const outcome =
		'The app has one linter, one formatter and one documented way to reach the API, which new code follows. What debt remains is listed and prioritised rather than waiting to be discovered. The audits also surfaced code that had been quietly wrong for a long time, including a placeholder left over from early development that was still feeding invented profile data to a live screen.';

	const stack = [
		{ tech: 'React Native / Expo', role: 'The application, with file-based routing' },
		{ tech: 'TypeScript', role: 'API types generated from the specification, not hand-written' },
		{ tech: 'TanStack Query', role: 'Server state, caching and cross-domain invalidation' },
		{ tech: 'Redux Toolkit', role: 'Client state that outlives a single screen' },
		{ tech: 'Auth0', role: 'Authentication, shared with the backend' },
		{ tech: 'Stripe', role: 'Payments' }
	];
</script>

<SeoHead
	title="{item.title}, case {item.id}"
	description="Taking over a live mobile app after three teams and making it safe to change again."
/>

<CaseLayout {item}>
	<CaseSections {brief} {constraints} {howItWorks} {myPart} {outcome} {stack}>
		{#snippet diagram()}
			<RecoveryDiagram />
		{/snippet}
	</CaseSections>
</CaseLayout>
