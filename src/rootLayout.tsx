import AuthProvider from "./auth-provider";
import { Navbar } from "./components";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </main>
    </div>
  );
};

export default RootLayout;
