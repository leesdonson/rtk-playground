import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
}
const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  // const user: User | null =
  //   localStorage.getItem("rtk_user") !== null
  //     ? (JSON.parse(localStorage.getItem("rtk_user")!) as User)
  //     : null;
  const user = useSelector((state: { user: User }) => state.user);
  console.log(user.email);
  useEffect(() => {
    if (!user) {
      navigate("/auth/signin");
    }
  }, [user]);

  return <div>{children}</div>;
};

export default AuthProvider;
