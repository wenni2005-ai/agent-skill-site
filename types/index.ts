export type Skill = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  version: string;
  author: string;
  githubUrl: string;
  downloadUrl: string;
  platform: string[];
  createdAt: string;
  featured?: boolean;
  content: string;
};

export type Tutorial = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  level: "beginner" | "intermediate" | "advanced";
  cover: string;
  createdAt: string;
  readingTime: string;
  featured?: boolean;
  content: string;
};

export type News = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  source: string;
  sourceUrl: string;
  createdAt: string;
  featured?: boolean;
  content: string;
};
