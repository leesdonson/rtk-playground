export type SignIn = {
  email: string;
  password: string;
};

export type SignUp = {
  name: string;
  email: string;
  password: string;
};

export type Role = "user" | "admin";

export type AuthResponse = {
  statusTxt: string;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    thumbnail?: string;
    role: Role;
  };
};
