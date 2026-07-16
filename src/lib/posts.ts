// Loads Markdown post bodies at build time via Vite's import.meta.glob.
// Keyed by `<folder>/<slug>.md`.

const modules = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function readBody(folder: string, slug: string): string {
  const key = `../content/${folder}/${slug}.md`
  return modules[key] ?? ''
}

export function getBlogBody(slug: string): string {
  return readBody('blog', slug)
}

export function getResourceBody(slug: string): string {
  return readBody('resources', slug)
}
