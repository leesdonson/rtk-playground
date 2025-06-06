import { useState } from "react";
import styles from "./post.module.css";
import { IoMdPhotos } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { createPost } from "../../app/features/post/postSlice";
import Loading from "../ui/loading";

const CreatePost = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);

  const cloudName = import.meta.env.VITE_APP_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_APP_UPLOAD_PRESET;

  // console.log(file);
  const dispatch = useAppDispatch();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    const selectedFile = file || null;
    if (file) {
      const image = URL.createObjectURL(file);
      setPreviewImage(image);
    }

    setFile(selectedFile);
  };

  const upload = async () => {
    setLoading(true);
    try {
      if (!file) return;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("cloud_name", cloudName);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      setLoading(false);
      return data.secure_url;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const image = await upload();
    const payload = {
      description: text,
      thumbnail: image,
    };
    dispatch(createPost(payload)).then((res) => {
      if (res.type === "post/create/fulfilled") {
        console.log(res.payload);
        navigate("/");
      } else {
        console.log("Error has occured");
      }
    });
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
          {loading ? (
            <div className={styles.loading}>
              <Loading /> Posting...
            </div>
          ) : (
            <span>Post</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
