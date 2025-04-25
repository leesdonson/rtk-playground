import { API } from "../constants";
import { CommentResponseData, EditComment } from "./types";

// Add comment
interface Props {
  description: string;
  postId: string;
}
const addComment = async (data: Props): Promise<CommentResponseData> => {
  const response = await fetch(`${API.comment}/add-comment/${data.postId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
};

// get comments
const getComments = async (postId: string) => {
  const response = await fetch(`${API.comment}/${postId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData = await response.json();
  return responseData.data;
};
// edit comment
const editComment = async (data: EditComment) => {
  const response = await fetch(
    `${API.comment}/comment/${data.postId}/${data.commentId}`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const responseData = await response.json();
  return responseData.data;
};

// delete comment
const deleteComment = async (data: { postId: string; commentId: string }) => {
  const response = await fetch(
    `${API.comment}/comment/${data.postId}/${data.commentId}`,
    {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseData = await response.json();
  return responseData;
};

const commentServices = {
  addComment,
  getComments,
  editComment,
  deleteComment,
};

export default commentServices;
