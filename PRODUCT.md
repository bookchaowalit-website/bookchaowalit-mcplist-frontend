# MCP List — product truth

MCP List is a public-facing directory and documentation hub for Model Context
Protocol servers. Its core flow is discovery: scan registered servers,
understand what tools each exposes, and open a server detail page before
connecting or inspecting its API surface.

The current repository is a curated portfolio demo with local registry data and
an MCP API endpoint. It is not a verified marketplace, a hosted proxy for
arbitrary third-party traffic, or a community submission service yet.

> Product truth inferred from the existing README, routes, copy, registry data, and implementation because this batch was explicitly authorized to proceed without an interview.

## Audience and scene

- A developer looking for an MCP server or tool contract.
- An AI builder comparing capabilities before integration.
- A browser session reading a curated local registry.

## Constraints

- Registry data in `lib/mcp-servers.ts` remains the source of truth.
- Server detail links must resolve and expose tools/schemas honestly.
- API and directory claims must distinguish curated demo data from live health.
- The visual system should feel like a field directory / protocol reference,
  not a generic SaaS card grid.
