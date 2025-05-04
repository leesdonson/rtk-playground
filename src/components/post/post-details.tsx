import styles from "./post-details.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getPosts } from "../../app/features/post/postSlice";
import { initials } from "../../helpers/capitalizeName";

import { LuSend } from "react-icons/lu";
import Comment from "../comment/comment";
const PostDetails = () => {
  const { id } = useParams();
  // const [showInput, setShowInput] = useState(false);

  const { posts } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const post = posts?.find((post) => post.id === id);
  // console.log(post);
  const initialsLetters = post?.user.name && initials(post?.user.name);

  useEffect(() => {
    if (!id) return;
    dispatch(getPosts());
  }, [id]);

  // const [comment, setComment] = useState<string>("");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setComment(event.target.value);
  // };

  // const handleSubmit = () => {
  //   console.log(comment);
  //   setShowInput(false);
  // };

  //setShow to false when user click outside the input
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       showInput &&
  //       modalRef.current &&
  //       !modalRef.current.contains(event.target as Node)
  //     ) {
  //       setShowInput(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showInput]);

  return (
    <div className={styles.post_details_container}>
      <div className={styles.details}>
        <div className={styles.post_header}>
          <div className={styles.detail_left}>
            {post?.user.image ? (
              <div className={styles.author_image}>
                <img
                  className={styles.avatar}
                  src={post?.user.image}
                  alt={post?.user.name}
                />
              </div>
            ) : (
              <div className={styles.initials}>
                <h3 className={styles.user_initials}>{initialsLetters}</h3>
              </div>
            )}
            <p className={styles.author_name}>{post?.user.name}</p>
          </div>
          <div className={styles.right}>
            <button className={styles.follow}>Follow</button>
          </div>
        </div>
        <div className={styles.details_container}>
          <div className={styles.description}>
            <p>{post?.description}</p>
          </div>
          {post?.thumbnail ? (
            <div className={styles.card_image}>
              <img
                className={styles.post_image}
                src={post?.thumbnail}
                alt={post?.id}
              />
            </div>
          ) : null}

          {/* commets section  */}
          <div className={styles.comments}>
            <div className={styles.comment_input}>
              <input
                className={styles.cmt_input}
                type="text"
                name="comment"
                placeholder="Add a comment"
              />
              <div className={styles.send_icon}>
                <LuSend className={styles.send} />
              </div>
            </div>
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
