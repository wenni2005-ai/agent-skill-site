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
  author: string;
  createdAt: string;
  featured?: boolean;
  content: string;
};

export type News = {
  slug: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  tags: string[];
  content: string;
};
