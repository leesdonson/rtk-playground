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
}

export interface Comment {
  id: string;
  description: string;
  createdAt: string;
  commentBy: string;
  like: number;
}

export interface Post {
  id: string;
  slug: string;
  thumbnail: string;
  createdAt: string;
  like: number | null;
  description: string;
  comments: Comment[] | null;
}
export interface PostProps {
  posts: Post[];
  loading: boolean;
  error: string | null;
  message: string;
}
interface User {
  id: string;
  name: string;
  email: string;
  image: string | null;
}
export type GetPosts = {
  user: User;
  id: string;
  thumbnail: string | null;
  description: string | null;
  like: number | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

export type Init = {
  posts: GetPosts[];
  loading: boolean;
  error: string | null;
  message: string;
};
