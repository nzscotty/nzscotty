export type BlogPost = {
  id: string
  title: string
  picture: string
  date: Date
  createdAt: Date
  updatedAt: Date
  status: string
};

export type Query = {
  blogpost: BlogPost,
  blogPosts: BlogPost[]
};

export interface Post {
      id: string;
      date: Date;
      updatedAt: Date;
      title: string;
      slug: string;
      coverImage: CoverImage;
      status: string;
      content: Content;
}

export interface Content {
  html: string;
  text: string;
}

export interface CoverImage {
  id: string;
  handle: string;
}

