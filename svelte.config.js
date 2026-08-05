import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// The header, footer and work index link to routes and assets added by later
// tasks (the colophon page, the CV PDF, the three case study pages).
// Prerendering follows every internal link and fails the build on a 404 by
// default, so allow exactly these known, deliberate dangling links to warn
// instead of failing, without deleting them.
const EXPECTED_DANGLING_LINKS = [
	'/colophon',
	'/cv/alberto-cerqua-cv.pdf',
	'/work/rag-pipeline',
	'/work/platform',
	'/work/recovery'
];

// The header links to `/#index`, an anchor on the home page's "Selected work"
// section. The home page content is a later task, so that id does not exist
// yet. Same rationale as above: warn, don't fail, don't delete the link.
const EXPECTED_MISSING_IDS = new Set(['index']);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (EXPECTED_DANGLING_LINKS.includes(path)) {
					console.warn(`prerender: expected dangling link ${path} (linked from ${referrer})`);
					return;
				}
				throw new Error(message);
			},
			handleMissingId: ({ path, id, referrers, message }) => {
				if (EXPECTED_MISSING_IDS.has(id)) {
					console.warn(
						`prerender: expected missing id "${id}" on ${path} (linked from ${referrers.join(', ')})`
					);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
