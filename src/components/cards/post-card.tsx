import { useNavigate } from "react-router-dom";
import { Post } from "../../lib/data";
import styles from "./post-card.module.css";
import { BiSolidLike } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { useState } from "react";

const PostCard = ({ post }: { post: Post }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.author}>
        <div className={styles.left}>
          <div className={styles.author_image}>
            <img
              className={styles.avatar}
              src={post.author.image}
              alt={post.author.name}
            />
          </div>
          <p className={styles.author_name}>{post.author.name}</p>
        </div>
        <div className={styles.right}>
          <button className={styles.follow}>Follow</button>
        </div>
      </div>
      <div className={styles.description}>
        {post.description?.length! > 50 ? (
          <p>
            {expanded ? (
              <>
                {post.description}
                <span
                  className={styles.expand}
                  onClick={() => setExpanded(false)}
                >
                  ...Hide
                </span>
              </>
            ) : (
              <span className={styles.expand} onClick={() => setExpanded(true)}>
                {post.description?.slice(0, 50).concat("...see more")}
              </span>
            )}
          </p>
        ) : (
          <p>{post.description}</p>
        )}
      </div>
      <div className={styles.card_image}>
        <img
          className={styles.post_image}
          src={post.thumbnail}
          alt={post.slug}
        />
      </div>
      <div className={styles.card_footer}>
        <button className={styles.footer_btn} type="button">
          <BiSolidLike className={styles.like} />
          {post.likes}
        </button>
        <button
          onClick={() => navigate(`/post/${post.slug}`)}
          className={styles.footer_btn}
          type="button"
        >
          <MdMessage className={styles.comment} />
          {post.comments?.length! > 0 && post.comments?.length}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
