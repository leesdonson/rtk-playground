import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "./hooks/hooks";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  // const user = useAppSelector((state) => state.auth.user);
  const user = localStorage.getItem("rtk_user")
    ? JSON.parse(localStorage.getItem("rtk_user")!)
    : null;

  useEffect(() => {
    if (!user) {
      navigate("/auth/signin");
    }
  }, [user]);

  return <div>{children}</div>;
};

export default AuthProvider;
