import styles from "./input-modal.module.css";
import { LuSend } from "react-icons/lu";

interface InputModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const InputModal = ({
  modalRef,
  handleChange,
  handleSubmit,
}: InputModalProps) => {
  return (
    <div ref={modalRef} className={styles.comment_input}>
      <input
        onChange={handleChange}
        className={styles.cmt_input}
        type="text"
        placeholder="Add a comment"
      />
      <button onClick={handleSubmit} type="button" className={styles.cmt_btn}>
        <LuSend color="#fff" />
      </button>
    </div>
  );
};

export default InputModal;
