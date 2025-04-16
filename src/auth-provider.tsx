import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
}
const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const user: User | null =
    localStorage.getItem("rtk_user") !== null
      ? (JSON.parse(localStorage.getItem("rtk_user")!) as User)
      : null;

  useEffect(() => {
    if (!user) {
      navigate("/auth/signin");
    }
  }, [user?.email]);

  return <div>{children}</div>;
};

export default AuthProvider;
