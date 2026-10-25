import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Enhanced project content array with all projects
const PROJECT_CONTENT: Required<ProjectProps>[] = [
  {
    title: 'Orchestra',
    description:
      'A durable runtime for multi-agent workflows that treats every run like a bank transaction. Each step is written to an append-only event log in Postgres, so a worker crash loses nothing: steps are leased from Redis Streams, and a reaper hands unacknowledged work to another worker. On top of the log it adds human-in-the-loop pauses, deterministic replay at zero model cost, forking a run from any node to compare before/after, parallel branches with deterministic merges, and a budget governor that stops runaway agents (tokens, cost, steps, wall time, loop detection). Currently under active development.',
    techStack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Redis Streams',
      'Event Sourcing',
      'OpenTelemetry',
      'Langfuse',
      'Docker',
      'Next.js',
    ],
    date: '2026',
    links: [
      { name: 'GitHub', url: 'https://github.com/deepanshu2711/Orchestra' },
    ],
    images: [],
  },
  {
    title: 'Atlas',
    description:
      'A multi-tenant retrieval (RAG) service for answering questions over badly structured documents, with clickable citations down to the page, bounding box, and quote. It uses structure-aware ingestion with Docling, contextual chunks, hybrid dense + BM25 retrieval fused with Reciprocal Rank Fusion, cross-encoder reranking, query decomposition, an agentic loop with a hop budget, and citation verification. A built-in eval harness runs a 40-question golden set through the real pipeline: answer accuracy went from 25% on the naive baseline to 55% with Docling + hybrid search + reranking, with retrieval recall@3 of 0.95.',
    techStack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'Qdrant',
      'Hybrid Search',
      'BM25',
      'Reranking',
      'Docling',
      'Ollama',
      'RAG Evals',
    ],
    date: '2026',
    links: [{ name: 'GitHub', url: 'https://github.com/deepanshu2711/Atlas' }],
    images: [],
  },
  {
    title: 'Crucible',
    description:
      'An evaluation and red-teaming harness for AI agents. Agent evals are not LLM evals, so Crucible runs every case multiple times, reports metrics with bootstrap 95% confidence intervals, flags flaky cases, and compares runs with a verdict per metric: no detectable change, too small to matter, improved, or regressed. Its first target is Atlas, evaluated over HTTP against a golden dataset. Next on the roadmap: OpenTelemetry trajectory metrics (tool choice, step efficiency, stop accuracy), calibrated LLM judges, a CI gate that fails regressing PRs, and an adversarial prompt-injection suite.',
    techStack: [
      'Python',
      'asyncio',
      'uv',
      'Bootstrap CIs',
      'LLM-as-a-Judge',
      'Agent Evaluation',
      'Red Teaming',
      'OpenTelemetry',
    ],
    date: '2026',
    links: [
      { name: 'GitHub', url: 'https://github.com/deepanshu2711/Crucible' },
    ],
    images: [],
  },
  {
    title: 'AI System Design Consultant',
    description:
      'An AI-powered system design consultant that turns a prompt like "Design a system like Instagram" into a complete architecture document. A LangGraph supervisor routes a shared design state through specialist agents (requirements, traffic estimation, capacity planning, database, cache, queues, CDN, API design, and microservices), each returning a typed Pydantic artifact. It pauses to ask clarifying questions, then resumes with your answers. Runs fully locally on Ollama, with no API keys required.',
    techStack: [
      'Python',
      'LangChain',
      'LangGraph',
      'FastAPI',
      'Pydantic',
      'Ollama',
      'Multi-Agent Systems',
    ],
    date: '2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/deepanshu2711/AI-System-Design-Consultant',
      },
    ],
    images: [],
  },
  {
    title: 'Deep Research Agent',
    description:
      'A self-hosted research agent that investigates complex questions by clarifying scope, writing a research brief, gathering information in a loop, compressing the findings into notes, and synthesizing a structured Markdown report. Inspired by LangChain\'s open_deep_research and rebuilt as a smaller, easier-to-follow LangGraph flow that runs on local models through Ollama, exposed over a FastAPI interface.',
    techStack: [
      'Python',
      'LangGraph',
      'LangChain',
      'FastAPI',
      'Ollama',
      'LLMs',
      'AI Agents',
    ],
    date: '2026',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/deepanshu2711/open_deep_research',
      },
    ],
    images: [],
  },
  {
    title: 'AI Notification System',
    description:
      'A multi-tenant, AI-powered notification platform that sends Email, SMS, and WhatsApp messages from one unified API. Built as a Turborepo monorepo of microservices (API gateway, auth, management, template, and notification services, plus channel workers), with RabbitMQ as the event-driven backbone and gRPC for low-latency internal calls. Includes API key auth, AI-generated templates, and event-based delivery tracking (queued, sent, delivered, failed) in a real-time dashboard.',
    techStack: [
      'Node.js',
      'TypeScript',
      'Next.js',
      'MongoDB',
      'RabbitMQ',
      'gRPC',
      'OpenAI',
      'Docker',
      'Turborepo',
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/deepanshu2711/AI-Notification-System',
      },
    ],
    images: [],
  },
  {
    title: 'MyAuth',
    description:
      'A self-hostable, open-source Auth-as-a-Service platform for Next.js App Router, built as a backend-first alternative to Clerk and Auth0. It provides cookie-based sessions, short-lived RS256-signed JWTs with refresh-token rotation, Google and GitHub OAuth, passwordless email OTP, and Edge middleware for route protection. Apps are managed from an admin console with per-app client credentials, and developers integrate through the @myauth/next SDK. Uses Redis for rate limiting, token revocation, and session caching, and RabbitMQ for user lifecycle events.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'RabbitMQ',
      'OAuth 2.0',
      'JWT',
      'Docker',
      'Turborepo',
    ],
    date: '2025',
    links: [
      { name: 'GitHub', url: 'https://github.com/deepanshu2711/MyAuth' },
      { name: 'Console', url: 'https://console.deepxdev.com' },
    ],
    images: [],
  },
  {
    title: 'GitIssueHunt',
    description:
      'A developer-focused platform that helps you discover beginner-friendly GitHub issues ("good first issue" and "help wanted"), filtered by language. Built as a modern full-stack app with GitHub API integration, search, and a developer-friendly interface for finding open-source opportunities. Launched on Product Hunt, where it picked up early active users.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'GitHub API',
      'PostgreSQL',
      'Turborepo',
    ],
    date: '2025',
    links: [
      { name: 'Live site', url: 'https://git-issue-hunt.deepxdev.com' },
      {
        name: 'GitHub',
        url: 'https://github.com/deepanshu2711/GitIssueHunt-v2',
      },
    ],
    images: [],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  // AI Systems
  {
    category: 'AI Infrastructure',
    title: 'Orchestra',
    src: '/orchestra.png',
    content: <ProjectContent project={{ title: 'Orchestra' }} />,
  },
  {
    category: 'AI Engineering',
    title: 'Atlas',
    src: '/atlas.png',
    content: <ProjectContent project={{ title: 'Atlas' }} />,
  },
  {
    category: 'AI Evaluation',
    title: 'Crucible',
    src: '/crucible.png',
    content: <ProjectContent project={{ title: 'Crucible' }} />,
  },
  {
    category: 'AI Engineering',
    title: 'AI System Design Consultant',
    src: '/ai-system-design.png',
    content: (
      <ProjectContent project={{ title: 'AI System Design Consultant' }} />
    ),
  },
  {
    category: 'AI Engineering',
    title: 'Deep Research Agent',
    src: '/deep-research-agent.png',
    content: <ProjectContent project={{ title: 'Deep Research Agent' }} />,
  },
  // Backend / Distributed Systems
  {
    category: 'Backend Engineering',
    title: 'MyAuth',
    src: '/my-auth-gemini.png',
    content: <ProjectContent project={{ title: 'MyAuth' }} />,
  },
  {
    category: 'Backend Engineering',
    title: 'AI Notification System',
    src: '/ai-notification.png',
    content: <ProjectContent project={{ title: 'AI Notification System' }} />,
  },
  {
    category: 'Developer Tool',
    title: 'GitIssueHunt',
    src: '/gih.png',
    content: <ProjectContent project={{ title: 'GitIssueHunt' }} />,
  },
];
