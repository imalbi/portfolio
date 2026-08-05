export interface WorkEntry {
	/** Zero-padded designation shown in the index and the case masthead */
	id: string;
	title: string;
	href: string;
	/** Primary stack, shown in the index row */
	stack: string;
	role: string;
	period: string;
	/** Generic sector label. Never a client name. */
	sector: string;
}

/*
 * TODO(review): the `role`, `period` and `sector` fields are claims about what
 * Alberto actually did, not about technology, and they carry more risk than
 * anything else on the site. Check each one before this ships.
 *
 * Two entries, not three. An earlier draft listed a Java to TypeScript backend
 * port as a third case; that work was led by someone else and has been removed
 * rather than padded out.
 */
export const work: WorkEntry[] = [
	{
		id: '001',
		title: 'Production Recovery',
		href: '/work/recovery',
		stack: 'React Native / Expo / TanStack Query',
		role: 'Full-stack, third team on the codebase',
		period: '2026',
		sector: 'Consumer mobile app'
	},
	{
		id: '002',
		title: 'Retrieval Layer',
		href: '/work/retrieval',
		stack: 'pgvector / Gemini / SSE',
		role: 'Full-stack, two-developer team',
		period: '2025 to 2026',
		sector: 'Enterprise AI assistant'
	}
];

export function entry(id: string): WorkEntry {
	const found = work.find((w) => w.id === id);
	if (!found) throw new Error(`No work entry with id ${id}`);
	return found;
}
