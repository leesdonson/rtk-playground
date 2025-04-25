import styles from "./post-details.module.css";
import { useParams } from "react-router-dom";
import { post } from "../../lib/data";
import { useEffect, useRef, useState } from "react";
import InputModal from "./input-modal";
import Comment from "../comment/comment";
const PostDetails = () => {
  const { slug } = useParams();
  const [showInput, setShowInput] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);

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
    <div className={styles.post_details_container}>
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
                {showInput && modalRef && (
                  <InputModal
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    modalRef={modalRef}
                  />
                )}
              </div>
              {btnRef &&
                postDetails.comments.map((comment, i) => (
                  <Comment
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    ref={btnRef}
                    key={i}
                    comment={comment}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
