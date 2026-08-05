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
 * TODO(content): invented. Replace with Alberto's real answer.
 *
 * The `role`, `period` and `sector` fields below are claims about what he
 * actually did, not about technology. They carry more risk than anything else
 * on the site: a wrong technical opinion is arguable, but "sole author" is a
 * checkable claim about how much of the work was his. Verify every one before
 * this ships. In particular, "Live consumer product" on case 003 does not come
 * from the CV, and the periods may well run past 2025.
 */
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
