import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Deepanshu Saini. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Deepanshu Saini, a full-stack developer from Yamunanagar, India, currently working as a MERN Stack Developer at AllHeart Web Pvt Ltd. Alongside that, I build with Python, FastAPI, LangChain, and LangGraph — combining traditional full-stack dev with AI/agent systems. I'm passionate about building production-ready platforms, from auth systems to AI-powered tools.",
    };
  },
});
