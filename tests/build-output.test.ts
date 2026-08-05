import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

import { work } from '../src/lib/content/work';

const BUILD = 'build';

// Derived from the work index rather than listed by hand, so adding or renaming
// a case study cannot leave this test asserting against routes that no longer
// exist, or silently stop covering one that does.
const ROUTES = ['', ...work.map((w) => w.href.replace(/^\//, '')), 'colophon'];

/**
 * adapter-static writes `about.html` by default and `about/index.html` when
 * trailingSlash is 'always'. Accept either so the test is not brittle.
 */
function resolvePage(route: string): string | null {
	const candidates =
		route === ''
			? [join(BUILD, 'index.html')]
			: [join(BUILD, `${route}.html`), join(BUILD, route, 'index.html')];
	return candidates.find((p) => existsSync(p)) ?? null;
}

describe('static build output', () => {
	it('prerenders every route', () => {
		const missing = ROUTES.filter((r) => resolvePage(r) === null);
		expect(missing, `routes not prerendered: ${missing.join(', ')}`).toEqual([]);
	});

	it('ships no JavaScript to the browser', () => {
		for (const route of ROUTES) {
			const page = resolvePage(route);
			if (!page) continue;
			const html = readFileSync(page, 'utf8');
			expect(html, `${page} contains a script tag`).not.toMatch(/<script/i);
			expect(html, `${page} contains a modulepreload`).not.toMatch(/rel=["']?modulepreload/i);
		}
	});

	it('never references an external font host', () => {
		for (const route of ROUTES) {
			const page = resolvePage(route);
			if (!page) continue;
			const html = readFileSync(page, 'utf8');
			expect(html, `${page} links an external font host`).not.toMatch(
				/fonts\.(googleapis|gstatic)\.com/
			);
		}
	});
});
