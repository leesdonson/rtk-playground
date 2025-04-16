import { Link } from "react-router-dom";
import styles from "./form.module.css";
import { useState } from "react";
interface FormData {
  name: string;
  email: string;
  password: string;
}

const initialValues: FormData = {
  name: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const [formData, setFormData] = useState<FormData>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_header}>
          <h2 className={styles.form_title}>RTK PG - Sign Up</h2>
        </div>
        <div className={styles.form_group}>
          <div className={styles.form_input}>
            <label className={styles.form_label} htmlFor="name">
              Name
            </label>
            <input
              value={formData.name}
              name="name"
              autoComplete="off"
              onChange={handleChange}
              className={styles.form_control}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.form_input}>
            <label className={styles.form_label} htmlFor="email">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              name="email"
              className={styles.form_control}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.form_input}>
            <label className={styles.form_label} htmlFor="password">
              Password
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              className={styles.form_control}
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit" className={styles.form_submit}>
          Sign Up
        </button>
        <div className={styles.form_footer}>
          <p>Already have an account?</p>
          <Link className={styles.form_link} to="/auth/signin">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
