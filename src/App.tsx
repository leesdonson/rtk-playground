import { Route, Routes } from "react-router-dom";
import RootLayout from "./rootLayout";
import {
  CreatePost,
  HomePage,
  PostDetails,
  SignIn,
  SignUp,
} from "./components";

import ProfileLayout from "./components/profile/profileLayout";
import AboutTab from "./components/profile/about-tab";
import Followers from "./components/profile/followers";
import PostContents from "./components/profile/post-content";
import Following from "./components/profile/following";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/new" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/account" element={<ProfileLayout />}>
          {/* <Route path="/account/:id" element={<AboutTab />} /> */}
          <Route path="/account" element={<AboutTab />} />
          <Route path="/account/followers" element={<Followers />} />
          <Route path="/account/posts" element={<PostContents />} />
          <Route path="/account/following" element={<Following />} />
        </Route>
      </Route>
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
