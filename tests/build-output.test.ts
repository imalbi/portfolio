import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const BUILD = 'build';

const ROUTES = ['', 'work/rag-pipeline', 'work/platform', 'work/recovery', 'colophon'];

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
