import styles from "./home.module.css";
// import { post } from "../../lib/data";
// import PostCard from "../cards/post-card";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { getPosts } from "../../app/features/post/postSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../ui/loading";

const HomePage = () => {
  const { posts, loading } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, [posts.length]);

  const user = localStorage.getItem("rtk_user")
    ? JSON.parse(localStorage.getItem("rtk_user")!)
    : null;
  useEffect(() => {
    if (!user) {
      navigate("/auth/signin");
    }
  }, [user]);

  return (
    <div className={styles.home}>
      <p>home</p>
      {/* <div className={styles.card_content}>
        {post.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div> */}
      <div className={styles.posts_collections}>
        {loading ? (
          <Loading />
        ) : (
          <div className="">
            {posts?.map((post, i) => (
              <h1 className={styles.post_description} key={i}>
                {post?.description}
              </h1>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
