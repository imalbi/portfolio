import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * The copy-rules test scans the built HTML, which is the right place to catch
 * copy that leaked into the page. It cannot catch these markers, because they
 * live in comments that the compiler strips. This test scans the source instead.
 *
 * TODO(content) marks copy that was invented and is not true yet.
 * TODO(review)  marks copy drawn from real client work, pending a decision on
 *               how much of it may be published.
 *
 * Neither may ship. Set ALLOW_UNRESOLVED_CONTENT=1 to build anyway while the
 * site is still being drafted.
 */
const MARKERS = [/TODO\(content\)/, /TODO\(review\)/];

const SOURCE_EXTENSIONS = ['.svelte', '.ts', '.js', '.css', '.html'];

function sourceFiles(dir: string): string[] {
	return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
		const p = join(dir, e.name);
		if (e.isDirectory()) return sourceFiles(p);
		return SOURCE_EXTENSIONS.some((ext) => e.name.endsWith(ext)) ? [p] : [];
	});
}

describe('unresolved content', () => {
	const files = sourceFiles('src');

	it('finds source files to check', () => {
		expect(files.length).toBeGreaterThan(0);
	});

	it('has no unresolved content markers left in the source', () => {
		if (process.env.ALLOW_UNRESOLVED_CONTENT === '1') return;

		const offenders = files.filter((f) => {
			const source = readFileSync(f, 'utf8');
			return MARKERS.some((m) => m.test(source));
		});

		expect(
			offenders,
			`unresolved content in:\n  ${offenders.join('\n  ')}\n` +
				'Resolve each marker, or set ALLOW_UNRESOLVED_CONTENT=1 to build a draft.'
		).toEqual([]);
	});
});
