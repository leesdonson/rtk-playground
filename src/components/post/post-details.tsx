import styles from "./post-details.module.css";
import { Comment as CommentType, post } from "../../lib/data";
import { useParams } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { MdReply } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
const PostDetails = () => {
  const { slug } = useParams();
  const [showInput, setShowInput] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const [comment, setComment] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    console.log(comment);
    setShowInput(false);
  };

  //setShow to false when user click outside the input
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showInput &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowInput(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInput]);

  const postDetails = post.filter((post) => post.slug === slug)[0];

  return (
    <div className={styles.details}>
      <div className={styles.post_header}>
        <div className={styles.detail_left}>
          <div className={styles.author_image}>
            <img
              className={styles.avatar}
              src={postDetails.author.image}
              alt={postDetails.author.name}
            />
          </div>
          <p className={styles.author_name}>{postDetails.author.name}</p>
        </div>
        <div className={styles.right}>
          <button className={styles.follow}>Follow</button>
        </div>
      </div>
      <div className={styles.details_container}>
        <div className={styles.card_image}>
          <img
            className={styles.post_image}
            src={postDetails.thumbnail}
            alt={postDetails.slug}
          />
        </div>
        {postDetails.comments && (
          <div className={styles.comments}>
            <div className={styles.comment_top}>
              <p className="">Comments</p>
              {postDetails.comments.length === 0 && (
                <small>No comment yet</small>
              )}

              <button
                type="button"
                onClick={() => setShowInput(!showInput)}
                className={styles.cmt_btn}
              >
                Add Comment
              </button>
              {showInput && (
                <div ref={modalRef} className={styles.comment_input}>
                  <input
                    onChange={handleChange}
                    className={styles.cmt_input}
                    type="text"
                    placeholder="Add a comment"
                  />
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className={styles.cmt_btn}
                  >
                    <LuSend color="#fff" />
                  </button>
                </div>
              )}
            </div>
            {postDetails.comments.map((comment, i) => (
              <Comment key={i} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Comment = ({ comment }: { comment: CommentType }) => {
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
        <button type="button" className={styles.cmt_btn}>
          <MdReply />
          Reply
        </button>
        <p>Date: {comment.date}</p>
      </div>
    </div>
  );
};

export default PostDetails;
