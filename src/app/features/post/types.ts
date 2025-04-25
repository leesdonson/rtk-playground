export interface NewPostData {
  description: string;
  thumbnail: string;
}

export type EditPostData = {
  like: number | null;
  description: string | null;
  thumbnail: string | null;
  id: string;
};

export type MutationResponse = {
  statusTxt: string;
  message: string;
};
export interface PostResponse {
  statusTxt: string;
  message: string;
  data: {
    id: string;
    description: string;
    thumbnail: string;
    createdAt: string;
    slug: string;
    author: {
      name: string;
      image: string;
    };
    like: number | null;
    comments: Comment[] | null;
  };
}

export interface Comment {
  id: string;
  description: string;
  date: string;
  commentBy: string;
  like: number;
}

export interface Post {
  id: string;
  slug: string;
  image: string;
  date: string;
  description: string;
  comments: Comment[];
}
export interface PostProps {
  posts: Post[];
  loading: boolean;
  error: string | null;
  message: string;
}
