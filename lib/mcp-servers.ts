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
  },
  {
    id: 'mcplist',
    name: 'MCP List',
    url: 'https://mcplist.bookchaowalit.com',
    description: 'Comprehensive MCP server directory and aggregator',
    longDescription: `A comprehensive directory and documentation hub for Model Context Protocol (MCP) servers. This website serves both as a documentation site and as an MCP server aggregator that can proxy requests to other MCP servers.

## Features
- **Directory of MCP Servers**: Browse and discover MCP servers with detailed documentation
- **Server Documentation**: Individual pages for each MCP server with tool descriptions and usage examples
- **MCP Server API**: Built-in MCP server endpoint that can list all available MCP servers and proxy tool calls to other MCP servers
- **Modern UI**: Clean, responsive design built with Next.js and Tailwind CSS
- **Dark Mode Support**: Automatic dark mode based on system preferences`,
    tools: [
      {
        name: 'list_servers',
        description: 'List all registered MCP servers',
        inputSchema: {
          type: 'object',
          properties: {
            tags: { type: 'array', items: { type: 'string' } }
          }
        }
      },
      {
        name: 'get_server',
        description: 'Get detailed information about a specific server',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        }
      },
      {
        name: 'proxy_tool_call',
        description: 'Proxy a tool call to another MCP server',
        inputSchema: {
          type: 'object',
          properties: {
            serverId: { type: 'string' },
            toolName: { type: 'string' },
            arguments: { type: 'object' }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['mcp', 'aggregator', 'directory', 'api']
  },
  {
    id: 'artblog',
    name: 'Art Blog',
    url: 'https://artblog.bookchaowalit.com',
    description: 'Creative arts blog with MDX content and tag system',
    longDescription: `A Next.js blog exploring knowledge of various art styles, design techniques, and creative fields, built with MDX and hosted on Vercel.

## Features
- **Next.js App Router** with TypeScript
- **MDX** for writing posts with rich content
- **Tailwind CSS** for styling
- **Responsive images** and SEO optimization
- **Tag system** and search functionality
- **Vercel deployment** ready`,
    tools: [
      {
        name: 'get_art_posts',
        description: 'Fetch art blog posts with optional filtering',
        inputSchema: {
          type: 'object',
          properties: {
            tag: { type: 'string' },
            limit: { type: 'number' }
          }
        }
      },
      {
        name: 'search_art_content',
        description: 'Search art blog content by keywords',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' }
          }
        }
      },
      {
        name: 'get_art_post',
        description: 'Get a specific art blog post by slug',
        inputSchema: {
          type: 'object',
          properties: {
            slug: { type: 'string' }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['blog', 'art', 'creative', 'mdx']
  },
  {
    id: 'linerichmenu',
    name: 'LINE Rich Menu Maker',
    url: 'https://linerichmenu.bookchaowalit.com',
    description: 'Visual editor for creating and managing LINE rich menus',
    longDescription: `A modern web application for creating, editing, and managing LINE rich menus. Built with Next.js 14, Shadcn UI, Tailwind CSS, and PostgreSQL.

## Features
- 🎨 **Visual Editor**: Intuitive drag-and-drop interface for creating rich menu areas
- 📱 **Multiple Menu Sizes**: Support for all LINE rich menu sizes (Small, Mini, Medium, Large)
- 🗄️ **Database Storage**: PostgreSQL backend for persistent menu storage
- 🔄 **Full CRUD Operations**: Create, read, update, and delete rich menus
- 🎯 **Action Types**: Support for message, postback, URI, datetime picker, camera, camera roll, and location actions
- 📥 **Export Functionality**: Export menus as PNG or JPEG images
- 🌐 **Responsive Design**: Works on desktop and mobile devices`,
    tools: [
      {
        name: 'list_menus',
        description: 'List all LINE rich menus',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_menu',
        description: 'Get a specific rich menu by ID',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'number' }
          }
        }
      },
      {
        name: 'create_menu',
        description: 'Create a new LINE rich menu',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            size: { type: 'string', enum: ['small', 'mini', 'medium', 'large'] }
          }
        }
      },
      {
        name: 'export_menu_image',
        description: 'Export a menu as PNG or JPEG image',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            format: { type: 'string', enum: ['png', 'jpeg'] }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['line', 'messaging', 'editor', 'visual']
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    url: 'https://portfolio.bookchaowalit.com',
    description: 'Professional portfolio website with blog CMS',
    longDescription: `A modern, responsive portfolio website built with Next.js, TypeScript, and Shadcn UI. Features a content management system (CMS) for easy blog content management.

## Features
- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Beautiful UI**: Uses Shadcn UI components for a consistent, professional design
- **Blog CMS**: MDX-based content management system for easy blog post creation
- **Responsive Design**: Fully responsive across all device sizes
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance**: Optimized for speed with static generation and image optimization`,
    tools: [
      {
        name: 'get_projects',
        description: 'Get all portfolio projects',
        inputSchema: {
          type: 'object',
          properties: {
            featured: { type: 'boolean' }
          }
        }
      },
      {
        name: 'get_portfolio_blog',
        description: 'Get blog posts from portfolio',
        inputSchema: {
          type: 'object',
          properties: {
            tag: { type: 'string' },
            limit: { type: 'number' }
          }
        }
      },
      {
        name: 'get_skills',
        description: 'Get skills and expertise information',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['portfolio', 'projects', 'cms', 'professional']
  },
  {
    id: 'techblog',
    name: 'Tech Blog',
    url: 'https://techblog.bookchaowalit.com',
    description: 'Modern tech blog with Text-Art ASCII design aesthetic',
    longDescription: `A modern tech blog built with Next.js, featuring a unique Text-Art ASCII design aesthetic.

## Features
- 🚀 **Next.js 15** with App Router
- 🎨 **shadcn/ui** components
- 📝 **MDX** for blog content
- 🎯 **Text-Art ASCII** design theme
- 📱 **Responsive** design
- 🌙 **Dark mode** support
- ⚡ **Vercel** ready deployment

The blog features a unique ASCII/terminal-inspired design with ASCII headers, monospace fonts, terminal borders, and animated terminal elements.`,
    tools: [
      {
        name: 'get_tech_posts',
        description: 'Fetch tech blog posts',
        inputSchema: {
          type: 'object',
          properties: {
            tag: { type: 'string' },
            limit: { type: 'number' }
          }
        }
      },
      {
        name: 'search_tech_content',
        description: 'Search tech blog posts by query',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' }
          }
        }
      },
      {
        name: 'get_tech_post',
        description: 'Get a specific tech blog post by slug',
        inputSchema: {
          type: 'object',
          properties: {
            slug: { type: 'string' }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['blog', 'tech', 'programming', 'ascii']
  },
  {
    id: 'techspace',
    name: 'Tech Space',
    url: 'https://techspace.bookchaowalit.com',
    description: 'Technology and development focused content platform',
    longDescription: `A technology-focused content platform built with modern web technologies. Provides technical articles, tutorials, and resources for developers.

## Features
- **Modern Next.js Architecture**: Built with latest Next.js features
- **Content Management**: MDX-based content system
- **Responsive Design**: Mobile-first approach
- **Developer Resources**: Technical articles and tutorials
- **Fast Performance**: Optimized for speed`,
    tools: [
      {
        name: 'get_techspace_articles',
        description: 'Get technical articles and resources',
        inputSchema: {
          type: 'object',
          properties: {
            category: { type: 'string' },
            limit: { type: 'number' }
          }
        }
      },
      {
        name: 'search_techspace',
        description: 'Search technical content',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['tech', 'development', 'programming', 'tutorials']
  },
  {
    id: 'mcpdocs',
    name: 'MCP Documentation Hub',
    url: 'https://bookchaowalit-mcpdocs-frontend.vercel.app',
    description: 'Complete documentation for the Model Context Protocol',
    longDescription: `Comprehensive documentation hub for the Model Context Protocol (MCP). Includes protocol specifications, code examples, integration guides, and best practices.

## Features
- Protocol overview and architecture
- Code examples in JavaScript, Python, TypeScript, Go, and Rust
- Integration guides for Claude Desktop, web apps, and custom servers
- Security best practices
- Searchable documentation`,
    tools: [
      {
        name: 'get_protocol_docs',
        description: 'Get MCP protocol documentation',
        inputSchema: {
          type: 'object',
          properties: {
            section: { type: 'string', enum: ['overview', 'architecture', 'protocol', 'best-practices', 'security'] }
          }
        }
      },
      {
        name: 'get_examples',
        description: 'Get code examples for MCP implementation',
        inputSchema: {
          type: 'object',
          properties: {
            language: { type: 'string', enum: ['javascript', 'python', 'typescript', 'go', 'rust'] }
          }
        }
      },
      {
        name: 'get_servers',
        description: 'Get list of available MCP servers',
        inputSchema: {
          type: 'object',
          properties: {
            category: { type: 'string' }
          }
        }
      },
      {
        name: 'get_integration_guide',
        description: 'Get integration guide for MCP',
        inputSchema: {
          type: 'object',
          properties: {
            platform: { type: 'string', enum: ['claude-desktop', 'web-app', 'server', 'custom'] }
          }
        }
      },
      {
        name: 'search_docs',
        description: 'Search MCP documentation',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' }
          },
          required: ['query']
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['documentation', 'mcp', 'reference', 'guide']
  },
  {
    id: 'github',
    name: 'GitHub Showcase',
    url: 'https://bookchaowalit-github-frontend.vercel.app',
    description: 'GitHub activity, repositories, and contributions showcase',
    longDescription: `A showcase of GitHub activity including repositories, commits, programming languages, and pull requests. Uses the GitHub API to fetch real-time data.

## Features
- Repository listing with details
- Recent commit activity
- Programming language breakdown
- Pull request history`,
    tools: [
      {
        name: 'get_repos',
        description: 'Get GitHub repositories',
        inputSchema: {
          type: 'object',
          properties: {
            limit: { type: 'number' }
          }
        }
      },
      {
        name: 'get_commits',
        description: 'Get recent commits',
        inputSchema: {
          type: 'object',
          properties: {
            repo: { type: 'string' }
          }
        }
      },
      {
        name: 'get_languages',
        description: 'Get programming languages used',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_pull_requests',
        description: 'Get pull requests',
        inputSchema: {
          type: 'object',
          properties: {
            state: { type: 'string', enum: ['open', 'closed', 'all'] }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['github', 'code', 'development', 'version-control']
  },
  {
    id: 'snippets',
    name: 'Code Snippets Library',
    url: 'https://bookchaowalit-snippets-frontend.vercel.app',
    description: 'Collection of reusable code snippets and utilities',
    longDescription: `A library of code snippets organized by language and category. Includes JavaScript, Python, TypeScript, and more.

## Features
- Browse snippets by language
- Search by keyword or tag
- Copy code with one click
- Category filtering`,
    tools: [
      {
        name: 'get_snippets',
        description: 'Get all code snippets',
        inputSchema: {
          type: 'object',
          properties: {
            language: { type: 'string' }
          }
        }
      },
      {
        name: 'search_snippets',
        description: 'Search code snippets',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' }
          }
        }
      },
      {
        name: 'get_snippet',
        description: 'Get a specific snippet',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        }
      },
      {
        name: 'get_categories',
        description: 'Get snippet categories',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['code', 'snippets', 'utilities', 'developer-tools']
  },
  {
    id: 'reading',
    name: 'Reading List',
    url: 'https://bookchaowalit-reading-frontend.vercel.app',
    description: 'Curated list of articles, books, and resources',
    longDescription: `A personal reading list and bookmark collection. Features articles, books, and resources organized by category.

## Features
- Browse by category (Tech, Design, Business)
- Search articles
- Recent additions
- Reading status tracking`,
    tools: [
      {
        name: 'get_articles',
        description: 'Get all reading items',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_by_category',
        description: 'Get articles by category',
        inputSchema: {
          type: 'object',
          properties: {
            category: { type: 'string' }
          }
        }
      },
      {
        name: 'get_recent',
        description: 'Get recent additions',
        inputSchema: {
          type: 'object',
          properties: {
            limit: { type: 'number' }
          }
        }
      },
      {
        name: 'search',
        description: 'Search articles',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['reading', 'bookmarks', 'resources', 'learning']
  },
  {
    id: 'projects-showcase',
    name: 'Projects Showcase',
    url: 'https://bookchaowalit-projects-showcase-fro.vercel.app',
    description: 'Detailed showcase of personal and side projects',
    longDescription: `A detailed portfolio of projects with tech stacks, screenshots, and descriptions. Features advanced filtering and search.

## Features
- Project gallery with screenshots
- Filter by tech stack
- Featured projects
- Case studies`,
    tools: [
      {
        name: 'get_projects',
        description: 'Get all projects',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_project',
        description: 'Get project details',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        }
      },
      {
        name: 'get_by_tech',
        description: 'Filter by tech stack',
        inputSchema: {
          type: 'object',
          properties: {
            tech: { type: 'string' }
          }
        }
      },
      {
        name: 'get_featured',
        description: 'Get featured projects',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['projects', 'portfolio', 'showcase', 'case-studies']
  },
  {
    id: 'learn',
    name: 'Learning Resources',
    url: 'https://bookchaowalit-learn-frontend.vercel.app',
    description: 'Tutorials, guides, and learning paths',
    longDescription: `A collection of tutorials and learning paths. Organized by difficulty and topic.

## Features
- Tutorial library
- Learning paths
- Difficulty levels
- Topic categorization`,
    tools: [
      {
        name: 'get_tutorials',
        description: 'Get all tutorials',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_tutorial',
        description: 'Get tutorial content',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        }
      },
      {
        name: 'get_paths',
        description: 'Get learning paths',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_by_difficulty',
        description: 'Filter by difficulty',
        inputSchema: {
          type: 'object',
          properties: {
            level: { type: 'string', enum: ['beginner', 'intermediate', 'advanced'] }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['learning', 'tutorials', 'education', 'guides']
  },
  {
    id: 'design',
    name: 'Design Portfolio',
    url: 'https://bookchaowalit-design-frontend.vercel.app',
    description: 'UI/UX design portfolio and case studies',
    longDescription: `A showcase of design work including web, mobile, logos, and illustrations. Features case studies and design tools.

## Features
- Design gallery
- Case studies
- Tool showcase
- Type filtering`,
    tools: [
      {
        name: 'get_works',
        description: 'Get all design work',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_by_type',
        description: 'Filter by design type',
        inputSchema: {
          type: 'object',
          properties: {
            type: { type: 'string', enum: ['web', 'mobile', 'logo', 'illustration'] }
          }
        }
      },
      {
        name: 'get_tools',
        description: 'Get design tools used',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_case_study',
        description: 'Get case study',
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
    tags: ['design', 'portfolio', 'ux', 'ui']
  },
  {
    id: 'talks',
    name: 'Talks & Presentations',
    url: 'https://bookchaowalit-talks-frontend.vercel.app',
    description: 'Conference talks and presentations archive',
    longDescription: `An archive of talks, presentations, and workshops. Includes slides and recordings.

## Features
- Talk listings
- Upcoming events
- Slide deck links
- Year filtering`,
    tools: [
      {
        name: 'get_talks',
        description: 'Get all talks',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_upcoming',
        description: 'Get upcoming talks',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_by_year',
        description: 'Filter by year',
        inputSchema: {
          type: 'object',
          properties: {
            year: { type: 'number' }
          }
        }
      },
      {
        name: 'get_slides',
        description: 'Get slide deck links',
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
    tags: ['talks', 'presentations', 'conferences', 'speaking']
  },
  {
    id: 'certs',
    name: 'Certifications',
    url: 'https://bookchaowalit-certs-frontend.vercel.app',
    description: 'Professional certifications and achievements',
    longDescription: `A showcase of certifications, awards, and professional achievements. Features verification links.

## Features
- Certification gallery
- Issuer filtering
- Badge images
- Verification links`,
    tools: [
      {
        name: 'get_certs',
        description: 'Get all certifications',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_by_issuer',
        description: 'Filter by issuer',
        inputSchema: {
          type: 'object',
          properties: {
            issuer: { type: 'string' }
          }
        }
      },
      {
        name: 'get_badge',
        description: 'Get certification badge',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        }
      },
      {
        name: 'verify',
        description: 'Verify certification',
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
    tags: ['certifications', 'achievements', 'professional', 'credentials']
  },
  {
    id: 'lab',
    name: 'Lab Experiments',
    url: 'https://bookchaowalit-lab-frontend.vercel.app',
    description: 'Experimental projects and proof-of-concepts',
    longDescription: `A collection of experiments, demos, and proof-of-concepts. Features live demos and source code links.

## Features
- Experiment gallery
- Live demos
- Tech stack filtering
- Source code links`,
    tools: [
      {
        name: 'get_experiments',
        description: 'Get all experiments',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_demo',
        description: 'Get experiment demo',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        }
      },
      {
        name: 'get_by_tech',
        description: 'Filter by technology',
        inputSchema: {
          type: 'object',
          properties: {
            tech: { type: 'string' }
          }
        }
      },
      {
        name: 'get_source',
        description: 'Get source code link',
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
    tags: ['experiments', 'demos', 'poc', 'lab']
  },
  {
    id: 'newsletter',
    name: 'Newsletter Archive',
    url: 'https://bookchaowalit-newsletter-frontend.vercel.app',
    description: 'Newsletter and blog post archive',
    longDescription: `An archive of newsletter issues and blog posts. Features search and tagging.

## Features
- Issue archive
- Tag filtering
- Full content search
- RSS feeds`,
    tools: [
      {
        name: 'get_issues',
        description: 'Get all newsletter issues',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_issue',
        description: 'Get specific issue',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        }
      },
      {
        name: 'get_by_tag',
        description: 'Filter by tag',
        inputSchema: {
          type: 'object',
          properties: {
            tag: { type: 'string' }
          }
        }
      },
      {
        name: 'search',
        description: 'Search issues',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['newsletter', 'blog', 'archive', 'content']
  },
  {
    id: 'status',
    name: 'Status Page',
    url: 'https://bookchaowalit-status-frontend.vercel.app',
    description: 'Service status and uptime monitoring',
    longDescription: `A status page for monitoring all services and APIs. Features uptime metrics and incident history.

## Features
- Service status dashboard
- Uptime metrics
- Incident history
- Health checks`,
    tools: [
      {
        name: 'get_status',
        description: 'Get service status',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_incidents',
        description: 'Get incident history',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_uptime',
        description: 'Get uptime metrics',
        inputSchema: {
          type: 'object',
          properties: {
            service: { type: 'string' }
          }
        }
      },
      {
        name: 'get_service',
        description: 'Get specific service status',
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
    tags: ['status', 'monitoring', 'uptime', 'health']
  },
  {
    id: 'changelog',
    name: 'Changelog',
    url: 'https://bookchaowalit-changelog-frontend.vercel.app',
    description: 'Project updates and changelog',
    longDescription: `A changelog tracking updates across all projects. Features filtering by project and type.

## Features
- Update timeline
- Project filtering
- Type categorization
- Date range filtering`,
    tools: [
      {
        name: 'get_changes',
        description: 'Get all changes',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_by_project',
        description: 'Filter by project',
        inputSchema: {
          type: 'object',
          properties: {
            project: { type: 'string' }
          }
        }
      },
      {
        name: 'get_by_date',
        description: 'Filter by date range',
        inputSchema: {
          type: 'object',
          properties: {
            start: { type: 'string' },
            end: { type: 'string' }
          }
        }
      },
      {
        name: 'get_by_type',
        description: 'Filter by change type',
        inputSchema: {
          type: 'object',
          properties: {
            type: { type: 'string', enum: ['feature', 'fix', 'improvement', 'breaking'] }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['changelog', 'updates', 'releases', 'history']
  },
  {
    id: 'tools',
    name: 'Web Tools Collection',
    url: 'https://bookchaowalit-tools-frontend.vercel.app',
    description: 'Collection of useful web tools and utilities',
    longDescription: `A collection of developer and productivity tools. Features converters, generators, and calculators.

## Features
- Tool gallery
- Category browsing
- Search functionality
- Interactive demos`,
    tools: [
      {
        name: 'get_tools',
        description: 'Get all tools',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_by_category',
        description: 'Filter by category',
        inputSchema: {
          type: 'object',
          properties: {
            category: { type: 'string' }
          }
        }
      },
      {
        name: 'get_tool',
        description: 'Get tool details',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        }
      },
      {
        name: 'search',
        description: 'Search tools',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' }
          }
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['tools', 'utilities', 'developer', 'productivity']
  },
  {
    id: 'photo',
    name: 'Photography Portfolio',
    url: 'https://bookchaowalit-photo-frontend.vercel.app',
    description: 'Photography gallery and portfolio',
    longDescription: `A photography portfolio with albums, locations, and EXIF data. Features gallery browsing and filtering.

## Features
- Photo gallery
- Album organization
- Location tagging
- EXIF metadata`,
    tools: [
      {
        name: 'get_photos',
        description: 'Browse photo gallery',
        inputSchema: {
          type: 'object',
          properties: {
            limit: { type: 'number' }
          }
        }
      },
      {
        name: 'get_by_album',
        description: 'Filter by album',
        inputSchema: {
          type: 'object',
          properties: {
            album: { type: 'string' }
          }
        }
      },
      {
        name: 'get_by_location',
        description: 'Filter by location',
        inputSchema: {
          type: 'object',
          properties: {
            location: { type: 'string' }
          }
        }
      },
      {
        name: 'get_exif',
        description: 'Get photo metadata',
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
    tags: ['photography', 'portfolio', 'gallery', 'images']
  },
  {
    id: 'tracking',
    name: 'TrackIt',
    url: 'https://tracking.bookchaowalit.com',
    description: 'Personal content tracker for anime, manga, movies, books, games, and more',
    longDescription: `A comprehensive web application for tracking your manga, anime, movies, books, games, podcasts, websites, and more. Built with Next.js 14, Tailwind CSS, shadcn/ui, and PostgreSQL.

## Features
- **Multi-Category Tracking**: Track 9 different content categories
  - Anime & Manga
  - Movies & TV Shows
  - Books
  - Games
  - Podcasts
  - Websites
  - Custom/Other content

- **Status Management**: Track content status
  - Plan to Watch/Read
  - Watching/Reading
  - Completed
  - On Hold
  - Dropped

- **Rating System**: 10-point rating scale for all content
- **Progress Tracking**: Track episodes, chapters, or book progress
- **Favorites System**: Mark your favorite items for quick access
- **Advanced Filtering**: Filter by category, status, favorites, and search
- **Statistics Dashboard**: Overview of your tracking statistics`,
    tools: [
      {
        name: 'get_tracking_items',
        description: 'Get tracked content items with optional filters',
        inputSchema: {
          type: 'object',
          properties: {
            category: { type: 'string' },
            status: { type: 'string' },
            favorites: { type: 'boolean' }
          }
        }
      },
      {
        name: 'add_tracking_item',
        description: 'Add a new item to track',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            category: { type: 'string' },
            status: { type: 'string' }
          }
        }
      },
      {
        name: 'update_tracking_progress',
        description: 'Update progress for a tracked item',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            progress: { type: 'number' },
            status: { type: 'string' }
          }
        }
      },
      {
        name: 'get_statistics',
        description: 'Get tracking statistics and overview',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      }
    ],
    author: 'bookchaowalit',
    version: '1.0.0',
    tags: ['tracking', 'entertainment', 'personal', 'database']
  }
];

export function getMCPServerById(id: string): MCPServer | undefined {
  return MCP_SERVERS.find(server => server.id === id);
}

export function getMCPServers(): MCPServer[] {
  return MCP_SERVERS;
}
