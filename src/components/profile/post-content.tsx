import styles from "./profile.module.css";
const posts = [
  {
    id: 1,
    image: "/images/scene-1.jpg",
  },
  {
    id: 2,
    image: "/images/scene-2.jpg",
  },
  {
    id: 3,
    image: "/images/scene-3.jpg",
  },
];
const PostContents = () => {
  return (
    <section className={styles.tab_sections}>
      <h3>Post Contents</h3>
      <p className={styles.text_content}>
        These are the list of all posts you have posted on the platform.
      </p>
      <div className={styles.post_contents}>
        {posts.map((post) => (
          <PostContent key={post.id} post={post.image} />
        ))}
      </div>
    </section>
  );
};

const PostContent = ({ post }: { post: string }) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_image_container}>
        <img className={styles.post_image} src={post} alt="post 1" />
      </div>
    </div>
  );
};

export default PostContents;
