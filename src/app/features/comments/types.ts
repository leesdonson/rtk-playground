interface Reply {
  id: string;
  replyBy: string;
  description: string;
}
export type CommentResponse = {
  id: string;
  commentBy: string;
  description: string;
  like: number | null;
  reply: Reply[] | [];
};

export type CommentResponseData = {
  id: string;
  commentBy: string;
  description: string;
  like: number | null;
  reply: Reply[] | [];
};

export type EditComment = {
  description?: string;
  like?: number;
  postId: string;
  commentId: string;
};
