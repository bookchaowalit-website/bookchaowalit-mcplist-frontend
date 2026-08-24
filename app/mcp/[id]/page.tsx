import Link from "next/link";
import { notFound } from "next/navigation";
import { getMCPServerById } from "@/lib/mcp-servers";

export default async function MCPServerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const server = getMCPServerById(id);
  if (!server) notFound();
  const notes = (server.longDescription || server.description).split("\n").filter(Boolean);

  return (
    <main className="atlas-shell server-detail-shell">
      <header className="atlas-topbar"><Link href="/" className="atlas-mark">MCP / ATLAS</Link><span>server field note</span><span>{server.id}</span></header>
      <nav className="detail-back"><Link href="/">← Back to directory</Link></nav>
      <section className="detail-hero"><div><p>{(server.tags || []).join(" · ")}</p><h1>{server.name}</h1><span>{server.description}</span></div><div className="detail-seal">{String(server.tools?.length || 0).padStart(2, "0")}<small>TOOLS</small></div></section>
      <section className="detail-grid"><article className="detail-notes"><div className="detail-label">01 / Field note</div>{notes.map((note, index) => <p key={`${note}-${index}`}>{note.replace(/^[-*] /, "")}</p>)}</article><aside className="tool-register"><div className="detail-label">02 / Tool register</div>{server.tools?.map((tool, index) => <section className="tool-row" key={tool.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{tool.name}</h2><p>{tool.description}</p>{tool.inputSchema && <pre>{JSON.stringify(tool.inputSchema, null, 2)}</pre>}</div></section>)}</aside></section>
      <section className="detail-boundary"><span>REGISTRY BOUNDARY</span><p>Listed from the local MCP registry. Version {server.version || "unspecified"} · author {server.author || "unspecified"} · no live health check performed.</p></section>
      <footer className="atlas-footer"><span>BOOKCHAOWALIT / MCP LIST</span><a href={server.url} target="_blank" rel="noreferrer">Visit declared URL ↗</a></footer>
    </main>
  );
}
