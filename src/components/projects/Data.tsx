import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

// Enhanced project content array with all projects
const PROJECT_CONTENT: Required<ProjectProps>[] = [
{
  title: 'AI System Design Consultant',
  description:
    'An AI-powered system design consultant that converts natural-language requirements into scalable software architectures. It uses a supervisor-worker multi-agent architecture where specialized agents handle requirements analysis, capacity planning, database design, caching, queues, CDN strategy, and cost estimation before combining everything into a complete architecture document.',
  techStack: [
    'Python',
    'LangChain',
    'LangGraph',
    'FastAPI',
    'Pydantic',
    'PostgreSQL',
    'LLMs',
  ],
  date: '2026',
  links: [],
  images: [],
},

{
  title: 'Deep Research Agent',
  description:
    'A multi-agent AI research system designed to investigate complex questions by breaking them into smaller tasks, gathering information, evaluating results, and synthesizing the findings into a structured research report. Built with LangGraph to orchestrate the research workflow and manage state between specialized agents.',
  techStack: [
    'Python',
    'LangGraph',
    'LangChain',
    'FastAPI',
    'LLMs',
    'Multi-Agent Systems',
    'Web Search',
  ],
  date: '2026',
  links: [],
  images: [],
},
{
  title: 'AI Notification System',
  description:
    'A production-ready, multi-tenant AI-powered notification platform that sends Email, SMS, and WhatsApp messages from one unified API (/api/v1/notifications/send). Built as a Turborepo monorepo of microservices (API Gateway, Auth, Management, Template, Notification services and channel-specific workers), with RabbitMQ as the event-driven backbone, gRPC for low-latency internal calls, API-key authentication, delivery tracking (queued, sent, delivered, failed), and a real-time multi-tenant dashboard.',
  techStack: [
    'Next.js',
    'Node.js',
    'MongoDB',
    'RabbitMQ',
    'OpenAI',
    'gRPC',
    'Docker',
    'Turborepo',
  ],
  date: '2025',
  links: [],
  images: [],
},

{
  title: 'GitIssueHunt',
  description:
    'A platform that helps developers find beginner-friendly open-source issues to contribute to, with GitHub API integration, filtering, and search. Launched on Product Hunt, where it got 11 upvotes and its first active users.',
  techStack: [
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
    'GitHub API',
    'PostgreSQL',
  ],
  date: '2025',
  links: [{ name: 'Live', url: 'https://git-issue-hunt.deepxdev.com' }],
  images: [],
},
{
  title: 'MyAuth',
  description:
    'A production-ready Auth-as-a-Service platform with a centralized admin dashboard for managing applications, users, and authentication flows. Each app gets its own client_id/client_secret, users sign up and sign in through a hosted portal, and admins can force logout or log a user out of all devices. Redis handles rate limiting, token revocation, and session caching; RabbitMQ publishes user.created / user.updated events; and a Next.js SDK (@myauth/next) makes integration easy. Fully containerized with Docker.',
  techStack: [
    'Next.js',
    'Node.js',
    'MongoDB',
    'OAuth 2.0',
    'Redis',
    'RabbitMQ',
    'Docker',
  ],
  date: '2025',
  links: [],
  images: [],
},
];

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
  // AI / Agentic AI Projects
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
    content: (
      <ProjectContent project={{ title: 'Deep Research Agent' }} />
    ),
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
    title: 'Notification System',
    src: '/ai-notification.png',
    content: (
      <ProjectContent project={{ title: 'AI Notification System' }} />
    ),
  },
  {
    category: 'Developer Tool',
    title: 'GitIssueHunt',
    src: '/gih.png',
    content: <ProjectContent project={{ title: 'GitIssueHunt' }} />,
  },
];

