import { Comment as CommentType } from "../../lib/data";
import styles from "./comment.module.css";
import { BiSolidLike } from "react-icons/bi";
import { MdReply } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useState } from "react";

interface CommentProps {
  comment: CommentType;
  ref: React.Ref<HTMLButtonElement>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  //   setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const Comment = ({
  comment,
  ref,
  handleChange,
  handleSubmit,
}: CommentProps) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className={styles.comment_section}>
      <div className={styles.comment_header}>
        <img
          className={styles.cmentor_image}
          src={comment.commenter.image}
          alt={comment.commenter.name}
        />
        <p className={styles.a_name}>{comment.commenter.name}</p>
      </div>
      <div className={styles.comment_box}>{comment.description}</div>
      <div className={styles.comment_footer}>
        <button type="button" className={styles.cmt_btn}>
          <BiSolidLike />
          {comment.like}
        </button>
        <button
          onClick={() => setShowInput((prev) => !prev)}
          ref={ref}
          type="button"
          className={styles.cmt_btn}
        >
          <MdReply />
          Reply
        </button>

        <p>Date: {comment.date}</p>
      </div>

      <div
        className={
          !showInput ? styles.reply : `${styles.reply} ${styles.active}`
        }
      >
        <input
          onChange={handleChange}
          placeholder="Add a reply"
          className={styles.reply_input}
          type="text"
          name="reply"
        />
        <button onClick={handleSubmit} type="button" className={styles.cmt_btn}>
          <LuSend color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default Comment;
