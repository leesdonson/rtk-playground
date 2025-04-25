import { useState } from "react";
import styles from "./post.module.css";
import { IoMdPhotos } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // console.log(file);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    const selectedFile = file || null;
    if (file) {
      const image = URL.createObjectURL(file);
      setPreviewImage(image);
    }

    setFile(selectedFile);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(file, text);
  };

  return (
    <div className={styles.post}>
      <form onSubmit={handleSubmit} className={styles.post_content}>
        <div onClick={() => navigate("/")} className={styles.post_close_icon}>
          <FaRegWindowClose className={styles.post_close} />
        </div>
        <div className={styles.text_input}>
          <label className={styles.post_label} htmlFor="image">
            <input
              onChange={handleFileChange}
              accept="image/*"
              hidden
              id="image"
              type="file"
            />
            <IoMdPhotos className={styles.post_icon} /> Add Photo
          </label>
          <textarea
            onChange={handleTextChange}
            value={text}
            className={styles.post_text_input}
            name="text"
            id="text"
            placeholder="Say what you think."
          />
        </div>
        {previewImage && (
          <div className={styles.post_preview}>
            <img
              src={previewImage}
              className={styles.post_preview_image}
              alt="Preview"
            />
          </div>
        )}
        <button className={styles.post_button} type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
