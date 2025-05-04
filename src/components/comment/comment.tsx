// import { Comment as CommentType } from "../../lib/data";
import styles from "./comment.module.css";
import { BiSolidLike } from "react-icons/bi";
import { RiReplyFill } from "react-icons/ri";

const Comment = () => {
  return (
    <div className={styles.comment_section}>
      <div className={styles.comment_left}>
        <div className={styles.comment_by_container}>
          <div className={styles.comment_by}>
            <p>JD</p>
            <div className={styles.comment_line}></div>
          </div>
        </div>
      </div>
      <div className={styles.comment_right}>
        <div className={styles.comment}>
          <div className={styles.comment_body}>
            <p className={styles.comment_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              ipsa quasi voluptatum, pariatur illum voluptates aspernatur
              cupiditate voluptatem quidem illo animi nemo corrupti maiores
              numquam omnis nulla facilis reiciendis impedit.
            </p>
          </div>
          <div className={styles.comment_actions}>
            <div className={styles.actions}>
              <button className={styles.comment_btns}>
                <BiSolidLike />
              </button>
              <button className={styles.comment_btns}>
                <RiReplyFill />
              </button>
            </div>

            <button className={styles.comment_btns}>
              <BiSolidLike />
              <span>10</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
