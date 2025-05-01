import { API } from "../constants";
import { AuthResponse, SignIn, SignUp } from "./types";

// Sign Up
const signUp = async (data: SignUp): Promise<AuthResponse> => {
  const response = await fetch(`${API.auth}/sign-up`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    return await error.message;
  }

  const responseData = await response.json();
  return responseData;
};

// Sign in
const signIn = async (data: SignIn): Promise<AuthResponse> => {
  const response = await fetch(`${API.auth}/sign-in`, {
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

// sign out
const signOut = async () => {
  const response = await fetch(`${API.auth}/sign-out`, {
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
  return responseData;
};

const authServices = {
  signUp,
  signIn,
  signOut,
};

export default authServices;
