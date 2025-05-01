import { API } from "../constants";
import { EditPostData, GetPosts, MutationResponse, NewPostData } from "./types";

// Create post
interface CPResponse {
  statusTxt: string;
  message: string;
}
const createPost = async (data: NewPostData): Promise<CPResponse> => {
  const response = await fetch(`${API.post}/create-post`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    return error;
  }
  const responseData = await response.json();
  return responseData;
};

// Get all post

const getPosts = async (): Promise<GetPosts[]> => {
  const response = await fetch(`${API.post}/`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    return error;
  }
  const responseData = await response.json();
  return responseData.data;
};

// Edit post
const editPost = async (data: EditPostData): Promise<MutationResponse> => {
  const response = await fetch(`${API.post}/post/${data.id}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    return error;
  }
  const responseData = await response.json();
  return responseData.data;
};

//delete post
const deletePost = async (id: string): Promise<MutationResponse> => {
  const response = await fetch(`${API.post}/post/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    return error;
  }
  const responseData = await response.json();
  return responseData.data;
};

const postServices = { createPost, getPosts, editPost, deletePost };
export default postServices;
