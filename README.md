# MCP List

A comprehensive directory and documentation hub for Model Context Protocol (MCP) servers. This website serves both as a documentation site and as an MCP server aggregator that can proxy requests to other MCP servers.

## Features

- **Directory of MCP Servers**: Browse and discover MCP servers with detailed documentation
- **Server Documentation**: Individual pages for each MCP server with tool descriptions and usage examples
- **MCP Server API**: Built-in MCP server endpoint at `/api/mcp` that can:
  - List all available MCP servers
  - List available tools from all registered servers
  - Proxy tool calls to other MCP servers
- **Modern UI**: Clean, responsive design built with Next.js and Tailwind CSS
- **Dark Mode Support**: Automatic dark mode based on system preferences

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding a New MCP Server

To add a new MCP server to the directory, edit `lib/mcp-servers.ts`:

```typescript
import { MCPServer } from './lib/mcp-servers';

export const MCP_SERVERS: MCPServer[] = [
  // ... existing servers
  {
    id: 'your-server-id',
    name: 'Your Server Name',
    url: 'https://your-server.com',
    description: 'Brief description',
    longDescription: 'Detailed description with markdown support',
    tools: [
      {
        name: 'tool_name',
        description: 'Tool description',
        inputSchema: {
          // JSON Schema for tool parameters
        }
      }
    ],
    author: 'Your Name',
    version: '1.0.0',
    tags: ['tag1', 'tag2']
  }
];
```

## MCP Server API

The `/api/mcp` endpoint implements the Model Context Protocol and supports the following methods:

### `initialize`
Initialize the MCP connection.

### `tools/list`
List all available tools from all registered MCP servers.

### `tools/call`
Call a tool on a specific MCP server. Format: `{serverName}_{toolName}`

### `servers/list`
List all registered MCP servers.

Example usage:

```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/list"
  }'
```

## Project Structure

```
app/
├── api/mcp/route.ts      # MCP server API endpoint
├── mcp/[id]/page.tsx     # Individual server documentation pages
├── layout.tsx            # Root layout with metadata
└── page.tsx              # Homepage with server list
lib/
└── mcp-servers.ts        # Server data and utilities
```

## Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

The project is pre-configured with `vercel.json` for optimal deployment.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **@modelcontextprotocol/sdk** - MCP protocol implementation

## License

MIT

## Related

- **Mobile App:** [bookchaowalit-mcplist-mobile](https://github.com/bookchaowalit-mobile/bookchaowalit-mcplist-mobile)
- **Portfolio:** [bookchaowalit.com](https://bookchaowalit.com)

