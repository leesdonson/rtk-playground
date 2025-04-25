import styles from "./home.module.css";
import { post } from "../../lib/data";
import PostCard from "../cards/post-card";
import { useSelector } from "react-redux";
const HomePage = () => {
  const user = useSelector(
    (state: { user: { username: string; email: string } }) => state.user
  );
  console.log(user);
  return (
    <div className={styles.home}>
      <div className={styles.card_content}>
        {post.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
