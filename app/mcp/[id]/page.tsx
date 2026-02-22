import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMCPServerById, getMCPServers } from '@/lib/mcp-servers';

export async function generateStaticParams() {
  const servers = getMCPServers();
  return servers.map((server) => ({
    id: server.id,
  }));
}

export default async function MCPServerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const server = getMCPServerById(id);

  if (!server) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-slate-600 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50">
                Back to MCP List
              </span>
            </Link>
            <nav className="flex gap-4">
              <a
                href={server.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
              >
                Visit Website
              </a>
              <a
                href="/api/mcp"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
              >
                MCP Endpoint
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Server Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
              {server.name}
            </h1>
            {server.version && (
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                v{server.version}
              </span>
            )}
          </div>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
            {server.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {server.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Server Info Card */}
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
            Server Information
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Server ID</dt>
              <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50 font-mono">{server.id}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Endpoint URL</dt>
              <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50 break-all">
                <a href={server.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
                  {server.url}
                </a>
              </dd>
            </div>
            {server.author && (
              <div>
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Author</dt>
                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">{server.author}</dd>
              </div>
            )}
            <div>
              <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Available Tools</dt>
              <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">{server.tools?.length || 0} tools</dd>
            </div>
          </dl>
        </div>

        {/* Description */}
        {server.longDescription && (
          <div className="mb-8 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4 not-prose">
              About
            </h2>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="whitespace-pre-wrap text-slate-700 dark:text-slate-300">{server.longDescription}</p>
            </div>
          </div>
        )}

        {/* Tools */}
        {server.tools && server.tools.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
              Available Tools
            </h2>
            <div className="space-y-4">
              {server.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-mono font-semibold text-slate-900 dark:text-slate-50">
                        {server.id}_{tool.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        {tool.description}
                      </p>
                      {tool.inputSchema && (
                        <details className="mt-4">
                          <summary className="cursor-pointer text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50">
                            Input Schema
                          </summary>
                          <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-100 p-4 text-xs dark:bg-slate-800">
                            <code className="text-slate-800 dark:text-slate-200">
                              {JSON.stringify(tool.inputSchema, null, 2)}
                            </code>
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Usage Example */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
            Usage Example
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Connect to this MCP server using the Model Context Protocol:
          </p>
          <pre className="overflow-x-auto rounded-lg bg-slate-100 p-4 text-xs dark:bg-slate-800">
            <code className="text-slate-800 dark:text-slate-200">
{`{
  "mcpServers": {
    "${server.id}": {
      "command": "node",
      "args": ["path/to/server.js"],
      "env": {
        "SERVER_URL": "${server.url}"
      }
    }
  }
}`}
            </code>
          </pre>
        </div>
      </main>

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
