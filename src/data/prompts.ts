export interface PromptRepo {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string; // emoji
  githubUrl: string;
  date: string;
}

export const promptRepos: PromptRepo[] = [
  {
    id: "video-editing-claude-code",
    title: "AI Video Editing Pipeline",
    description:
      "The full system I use to get Claude Code to edit raw footage — silence detection, filler word removal, and Final Cut Pro XML generation.",
    category: "Video Editing",
    icon: "🎬",
    githubUrl: "#",
    date: "2026-03-09",
  },
  {
    id: "content-engine",
    title: "Content Engine System",
    description:
      "The complete system prompt and workflow that powers all my content creation — scripts, posts, scheduling, and voice consistency across platforms.",
    category: "Content Creation",
    icon: "✍️",
    githubUrl: "#",
    date: "2026-03-09",
  },
  {
    id: "reel-script-framework",
    title: "Short-Form Script Framework",
    description:
      "My prompt framework for writing 30-60 second reel scripts that actually retain viewers. Hook structures, tension patterns, and closing types.",
    category: "Content Creation",
    icon: "🎯",
    githubUrl: "#",
    date: "2026-03-09",
  },
  {
    id: "claude-code-web-dev",
    title: "Web Dev with Claude Code",
    description:
      "How I prompt Claude Code to build production websites — from scaffolding to component architecture to deployment. The exact workflow behind SiteLift.",
    category: "Development",
    icon: "🛠️",
    githubUrl: "#",
    date: "2026-03-10",
  },
];

export const categories = [...new Set(promptRepos.map((p) => p.category))];
