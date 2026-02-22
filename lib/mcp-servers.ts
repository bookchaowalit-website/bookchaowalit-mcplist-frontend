export interface MCPServer {
  id: string;
  name: string;
  url: string;
  description: string;
  longDescription?: string;
  tools?: Tool[];
  author?: string;
  version?: string;
  tags?: string[];
}

export interface Tool {
  name: string;
  description: string;
  inputSchema?: Record<string, unknown>;
}

export const MCP_SERVERS: MCPServer[] = [
  {
    id: 'bookchaowalit',
    name: 'Bookchaowalit',
    url: 'https://bookchaowalit.com',
    description: 'Personal blog and content platform MCP server',
    longDescription: `An MCP server that provides access to articles, blog posts, and content from bookchaowalit.com. This server enables AI assistants to fetch, search, and retrieve content from the personal blog platform.

## Features
- Fetch latest articles and blog posts
- Search content by keywords and topics
- Retrieve full post content with metadata
- Access categorized content sections`,
    tools: [
      {
        name: 'fetch_content',
        description: 'Fetch recent content from the blog',
        inputSchema: {
          type: 'object',
          properties: {
            limit: { type: 'number', default: 10 }
          }
        }
      },
      {
        name: 'search_articles',
        description: 'Search articles by keyword or topic',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' },
            category: { type: 'string' }
          }
        }
      },
      {
        name: 'get_post',
        description: 'Get a specific post by ID or slug',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['blog', 'content', 'personal']
  }
];

export function getMCPServerById(id: string): MCPServer | undefined {
  return MCP_SERVERS.find(server => server.id === id);
}

export function getMCPServers(): MCPServer[] {
  return MCP_SERVERS;
}
