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
 * Alberto actually did, not about technology. Check each one before this ships.
 *
 * Roles are written from the git record, measured by lines changed rather than
 * commit count, and scoped to the areas he actually wrote. On teams of two or
 * three, saying which part was yours reads better than implying all of it was.
 */
export const work: WorkEntry[] = [
	{
		id: '001',
		title: 'Realtime Client',
		href: '/work/realtime-client',
		stack: 'SvelteKit / LiveKit / Fastify',
		role: 'Frontend lead, three-developer team',
		period: '2026',
		sector: 'Real-time analysis platform'
	},
	{
		id: '002',
		title: 'Production Recovery',
		href: '/work/recovery',
		stack: 'React Native / Expo / TanStack Query',
		role: 'Full-stack, third team on the codebase',
		period: '2026',
		sector: 'Consumer mobile app'
	},
	{
		id: '003',
		title: 'Assistant Platform',
		href: '/work/assistant-platform',
		stack: 'SvelteKit / Fastify / pgvector',
		role: 'Frontend lead, two-developer team',
		period: '2025 to 2026',
		sector: 'Enterprise AI assistant'
	}
];

export function entry(id: string): WorkEntry {
	const found = work.find((w) => w.id === id);
	if (!found) throw new Error(`No work entry with id ${id}`);
	return found;
}
