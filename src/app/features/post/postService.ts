import { API } from "../constants";
import {
  EditPostData,
  MutationResponse,
  NewPostData,
  PostResponse,
} from "./types";

// Create post

const createPost = async (data: NewPostData): Promise<PostResponse> => {
  const response = await fetch(`${API.post}/create-post`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData.data;
};

// Get all post
const getPosts = async (): Promise<PostResponse[]> => {
  const response = await fetch(`${API.post}/`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
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
  const responseData = await response.json();
  return responseData;
};

const postServices = { createPost, getPosts, editPost, deletePost };
export default postServices;
