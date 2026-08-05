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

export const work: WorkEntry[] = [
	{
		id: '001',
		title: 'RAG Pipeline',
		href: '/work/rag-pipeline',
		stack: 'pgvector / Gemini / SSE',
		role: 'Full-stack, sole author',
		period: '2025',
		sector: 'B2B platform'
	},
	{
		id: '002',
		title: 'Client Platform',
		href: '/work/platform',
		stack: 'SvelteKit / Fastify / Drizzle',
		role: 'Full-stack, sole author',
		period: '2025',
		sector: 'B2B platform'
	},
	{
		id: '003',
		title: 'Production Recovery',
		href: '/work/recovery',
		stack: 'Legacy / Triage / Refactor',
		role: 'Full-stack',
		period: '2025',
		sector: 'Live consumer product'
	}
];

export function entry(id: string): WorkEntry {
	const found = work.find((w) => w.id === id);
	if (!found) throw new Error(`No work entry with id ${id}`);
	return found;
}
