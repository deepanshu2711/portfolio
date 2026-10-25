![image](assets/readme-photo.png)

# Deepanshu Saini — AI Portfolio 🤖✨

Hey, I'm **Deepanshu**, a Full-Stack Developer and AI Engineer from India.

This is my interactive portfolio. Instead of scrolling through a static page, you ask my AI avatar a question and it answers as me, pulling up my projects, skills, resume, and contact info as it goes.

## 👇 What can you ask?

- 🧠 **Recruiter?** Ask about my stack, experience, and what I've shipped
- 💻 **Developer?** Dig into how I built Orchestra, Atlas, Crucible, MyAuth, and more
- 🧑‍🤝‍🧑 **Friend or family?** See what I've been working on lately

## 🛠️ Featured projects

| Project | What it is |
| --- | --- |
| [Orchestra](https://github.com/deepanshu2711/Orchestra) | Durable runtime for multi-agent workflows: an append-only event log, crash recovery, replay, fork, and a budget governor |
| [Atlas](https://github.com/deepanshu2711/Atlas) | Multi-tenant RAG service with hybrid retrieval, reranking, clickable citations, and an eval harness |
| [Crucible](https://github.com/deepanshu2711/Crucible) | Evaluation and red-teaming harness for AI agents, with bootstrap CIs and regression verdicts |
| [AI System Design Consultant](https://github.com/deepanshu2711/AI-System-Design-Consultant) | LangGraph supervisor/worker agents that turn a prompt into a system design document |
| [Deep Research Agent](https://github.com/deepanshu2711/open_deep_research) | Self-hosted research agent on FastAPI and Ollama |
| [MyAuth](https://github.com/deepanshu2711/MyAuth) | Self-hostable Auth-as-a-Service for Next.js with the `@myauth/next` SDK |
| [AI Notification System](https://github.com/deepanshu2711/AI-Notification-System) | Multi-tenant Email/SMS/WhatsApp notification platform on RabbitMQ and gRPC |
| [GitIssueHunt](https://git-issue-hunt.deepxdev.com) | Finds beginner-friendly GitHub issues, filtered by language |

## 🧱 Built with

Next.js 15, React 19, Tailwind CSS 4, Framer Motion, and the Vercel AI SDK with Google Gemini (`gemini-2.5-flash`) and tool calling.

## 🚀 How to run

### Prerequisites
- **Node.js** (v18 or higher)
- **pnpm** package manager
- **Google Gemini API key** (for the AI chat)
- **GitHub token** (optional, for the GitHub stars endpoint)

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/deepanshu2711/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment variables**
   Create a `.env` file in the root directory (see `.env.example`):
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
   GITHUB_TOKEN=your_github_token_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Getting your tokens
- **Gemini API key**: Get it from [Google AI Studio](https://aistudio.google.com/apikey)
- **GitHub token**: Generate one at [github.com/settings/tokens](https://github.com/settings/personal-access-tokens)

## ✏️ Making it yours

- AI persona and knowledge: `src/app/api/chat/prompt.ts`
- Projects carousel: `src/components/projects/Data.tsx`
- Skills, contact, resume, and intro cards: `src/components/`

## 📬 Contact

- Email: [deepanshusaini2711@gmail.com](mailto:deepanshusaini2711@gmail.com)
- LinkedIn: [deepanshu-saini-a6757b213](https://www.linkedin.com/in/deepanshu-saini-a6757b213)
- GitHub: [deepanshu2711](https://github.com/deepanshu2711)
- X: [@DeepanshuS7943](https://x.com/DeepanshuS7943)

---

Based on the open-source AI portfolio template by [toukoum](https://github.com/toukoum/portfolio).
