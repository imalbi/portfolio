// Every route is a static document. Prerender all of them, and ship no JavaScript:
// `csr = false` strips every <script> tag from the output.
export const prerender = true;
export const csr = false;
