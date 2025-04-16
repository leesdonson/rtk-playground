import { Route, Routes } from "react-router-dom";
import RootLayout from "./rootLayout";
import {
  CreatePost,
  HomePage,
  PostDetails,
  SignIn,
  SignUp,
} from "./components";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/new" element={<CreatePost />} />
        <Route path="/post/:slug" element={<PostDetails />} />
      </Route>
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
