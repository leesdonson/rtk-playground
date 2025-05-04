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
  image: string | undefined;
}
export type GetPosts = {
  user: User;
  id: string;
  thumbnail: string;
  description: string;
  like: number | undefined;
  createdAt: string;
  updatedAt: string;
  userId: string;
  comments: [];
};

export type Init = {
  posts: GetPosts[];
  post: GetPosts | null;
  loading: boolean;
  error: string | null;
  message: string;
};
