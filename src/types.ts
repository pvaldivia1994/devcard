export type ProjectSummary = {
  projectId: string;
  title: string;
  desc: string;
  client: string;
  image: string;
  filters?: string;
};

export type BlogPost = {
  title: string;
  desc: string;
  image: string;
  url: string;
  date: string;
};

export type Skill = {
  title: string;
  desc: string[];
  icons: string[];
};
