import Link from 'next/link';
import { getMCPServers } from '@/lib/mcp-servers';

export default function Home() {
  const servers = getMCPServers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                MCP List
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Documentation hub for Model Context Protocol servers
              </p>
            </div>
            <nav className="flex gap-4">
              <a
                href="/api/mcp"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
              >
                MCP Endpoint
              </a>
              <a
                href="https://github.com"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            Discover & Connect MCP Servers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            A comprehensive directory of Model Context Protocol servers.
            Browse documentation, explore available tools, and integrate AI capabilities into your applications.
          </p>
        </div>

        {/* MCP Server Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servers.map((server) => (
            <Link
              key={server.id}
              href={`/mcp/${server.id}`}
              className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {server.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {server.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {server.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <svg
                  className="h-5 w-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              {server.tools && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {server.tools.length} tool{server.tools.length !== 1 ? 's' : ''} available
                  </p>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Add Your Server CTA */}
        <div className="mt-16 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-8 text-center dark:border-slate-700 dark:bg-slate-900/50">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Add Your MCP Server
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Want to list your MCP server? Submit it to the directory and make it discoverable by the community.
          </p>
          <a
            href="https://github.com"
            className="mt-4 inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Submit Your Server
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            MCP List &copy; {new Date().getFullYear()} &bull; Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
