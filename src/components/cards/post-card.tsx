import { useNavigate } from "react-router-dom";
// import { Post } from "../../lib/data";
import styles from "./post-card.module.css";
import { BiSolidLike } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { useState } from "react";
import { initials, userName } from "../../helpers/capitalizeName";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface Post {
  createdAt: Date;
  description: string;
  id: string;
  like: number | undefined;
  thumbnail: string;
  userId: string;
  comments: [];
  user: {
    id: string;
    name: string;
    email: string;
    image: string | undefined;
  };
}

const PostCard = ({ post }: { post: Post }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prev) => !prev);

  const newLine = post.description.includes("\n\n")
    ? post.description.split("\n\n")
    : post.description.includes("\n") && post.description.split("\n");

  return (
    <div className={styles.card}>
      <div className={styles.author}>
        <div className={styles.left}>
          {post.user?.image ? (
            <div className={styles.author_image}>
              <img
                className={styles.avatar}
                src={post?.user?.image}
                alt={post.user?.name}
              />
            </div>
          ) : (
            <div className={styles.initials}>
              <h3 className={styles.user_initials}>
                {initials(post.user?.name)}
              </h3>
            </div>
          )}

          <p className={styles.author_name}>@{userName(post.user?.name)}</p>
        </div>
        <div className={styles.right}>
          <button className={styles.follow}>Follow</button>
        </div>
      </div>
      <div className={styles.description}>
        {post.description?.length! > 50 ? (
          <div className={styles.description_box}>
            {!expanded ? (
              <p className={styles.description_text}>
                {post.description.slice(0, 50).concat("...")}
              </p>
            ) : (
              <div className={styles.newline_box}>
                {newLine ? (
                  <>
                    {newLine.map((line, i) => (
                      <p
                        key={i}
                        className={`${styles.description_text} ${styles.newLine}`}
                      >
                        {line}
                      </p>
                    ))}
                  </>
                ) : (
                  <p className={styles.description_text}>{post.description}</p>
                )}
              </div>
            )}

            <button onClick={toggleExpand} className={styles.read_more_btn}>
              {expanded ? <FaAngleUp size={17} /> : <FaAngleDown size={17} />}
            </button>
          </div>
        ) : (
          <p>{post.description}</p>
        )}
      </div>
      {post?.thumbnail ? (
        <div className={styles.card_image}>
          <img
            className={styles.post_image}
            src={post.thumbnail}
            alt={post.description.slice(0, 5)}
          />
        </div>
      ) : null}

      <div className={styles.card_footer}>
        <button className={styles.footer_btn} type="button">
          <BiSolidLike className={styles.like} />
          {post.like}
        </button>
        <button
          onClick={() => navigate(`/post/${post.id}`)}
          className={styles.footer_btn}
          type="button"
        >
          <MdMessage className={styles.comment} />
          {post.comments?.length > 0 && post.comments?.length}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
