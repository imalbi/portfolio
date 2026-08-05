import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

function htmlFiles(dir: string): string[] {
	return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
		const p = join(dir, e.name);
		if (e.isDirectory()) return htmlFiles(p);
		return e.name.endsWith('.html') ? [p] : [];
	});
}

const BANNED = [
	{ label: 'em-dash', pattern: /—/ },
	{ label: 'en-dash', pattern: /–/ },
	{ label: 'scroll cue', pattern: /scroll to (explore|continue)/i },
	{ label: 'coordinate strip', pattern: /\d{2}\.\d+\s*[NS]\s*\/?\s*\d+\.\d+\s*[EW]/ },
	// Placeholder copy must never reach the browser wearing a straight face.
	{ label: 'content TODO marker', pattern: /TODO\(content\)/ },
	// Real copy drawn from client work, still awaiting a disclosure decision.
	// Different failure from invented copy, same rule: it does not ship unreviewed.
	{ label: 'review TODO marker', pattern: /TODO\(review\)/ }
];

describe('copy rules', () => {
	const files = htmlFiles('build');

	it('finds pages to check', () => {
		expect(files.length).toBeGreaterThan(0);
	});

	for (const { label, pattern } of BANNED) {
		it(`contains no ${label}`, () => {
			const offenders = files.filter((f) => pattern.test(readFileSync(f, 'utf8')));
			expect(offenders, `${label} found in: ${offenders.join(', ')}`).toEqual([]);
		});
	}
});
