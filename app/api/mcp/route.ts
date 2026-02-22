import { NextRequest, NextResponse } from 'next/server';

// MCP Server implementation for Next.js API route
// This acts as a proxy/aggregator to other MCP servers

export const runtime = 'edge';

interface MCPServer {
  name: string;
  url: string;
  description: string;
  tools?: string[];
}

const KNOWN_MCP_SERVERS: MCPServer[] = [
  {
    name: 'bookchaowalit',
    url: 'https://bookchaowalit.com',
    description: 'Personal blog and content platform',
    tools: ['fetch_content', 'search_articles', 'get_post']
  }
];

// Handle GET requests - return server info
export async function GET() {
  return NextResponse.json({
    name: 'MCP List Hub',
    version: '1.0.0',
    description: 'MCP List Hub - Aggregator for MCP servers',
    endpoints: {
      mcp: '/api/mcp',
      documentation: '/',
      servers: KNOWN_MCP_SERVERS.length
    },
    usage: {
      method: 'POST',
      contentType: 'application/json',
      example: {
        jsonrpc: '2.0',
        id: 1,
        method: 'initialize'
      }
    },
    availableMethods: ['initialize', 'tools/list', 'tools/call', 'servers/list']
  });
}

// Handle POST requests - MCP protocol
async function handleMCPRequest(request: NextRequest) {
  try {
    const body = await request.json();
    const { method, params } = body;

    switch (method) {
      case 'initialize':
        return NextResponse.json({
          jsonrpc: '2.0',
          id: body.id,
          result: {
            protocolVersion: '2024-11-05',
            capabilities: {
              tools: {},
              resources: {}
            },
            serverInfo: {
              name: 'mcplist-hub',
              version: '1.0.0',
              description: 'MCP List Hub - Aggregator for MCP servers'
            }
          }
        });

      case 'tools/list':
        const allTools = KNOWN_MCP_SERVERS.flatMap(server =>
          (server.tools || []).map(tool => ({
            name: `${server.name}_${tool}`,
            description: `${tool} from ${server.name}`,
            inputSchema: {
              type: 'object',
              properties: {
                server: { type: 'string', const: server.name },
                tool: { type: 'string', const: tool },
                params: { type: 'object' }
              }
            }
          }))
        );

        return NextResponse.json({
          jsonrpc: '2.0',
          id: body.id,
          result: { tools: allTools }
        });

      case 'tools/call':
        const { name, arguments: toolArgs } = params;
        const [serverName, toolName] = name.split('_');

        const targetServer = KNOWN_MCP_SERVERS.find(s => s.name === serverName);
        if (!targetServer) {
          return NextResponse.json({
            jsonrpc: '2.0',
            id: body.id,
            error: {
              code: -32601,
              message: `Server ${serverName} not found`
            }
          });
        }

        // Proxy request to target MCP server
        const response = await fetch(`${targetServer.url}/api/mcp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: body.id,
            method: 'tools/call',
            params: { name: toolName, arguments: toolArgs }
          })
        });

        const result = await response.json();
        return NextResponse.json(result);

      case 'servers/list':
        return NextResponse.json({
          jsonrpc: '2.0',
          id: body.id,
          result: { servers: KNOWN_MCP_SERVERS }
        });

      default:
        return NextResponse.json({
          jsonrpc: '2.0',
          id: body.id,
          error: {
            code: -32601,
            message: 'Method not found'
          }
        });
    }
  } catch (error) {
    return NextResponse.json({
      jsonrpc: '2.0',
      error: {
        code: -32700,
        message: 'Parse error',
        detail: 'Invalid JSON-RPC request'
      }
    }, { status: 400 });
  }
}

export { handleMCPRequest as POST };
