export type BlogParams = {
  id: string;
};

export type BlogList = {
  blogs: {
    id: number;
    title: string;
  }[];
};

export type BlogIds = {
  blogs: {
    id: number;
  }[];
};

export type BlogById = {
  blog: Blog;
};

export type Blog = {
  body: string;
  id: number;
  title: string;
};
