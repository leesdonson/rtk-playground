import { Link, useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import { useState } from "react";
import { signUp } from "../../app/features/auth/authSlice";
import { SignUp as SignUpProps } from "../../app/features/auth/types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Loading from "../ui/loading";

interface FormProps {
  name: string;
  email: string;
  password: string;
}

const initialValues: FormProps = {
  name: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const [formData, setFormData] = useState<SignUpProps>(initialValues);
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  // console.log(error);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      alert("Please enter name, email and password");
    }
    const payload = { name, email, password };
    dispatch(signUp(payload)).then((res: any) => {
      if (res.meta.requestStatus === "fulfilled") {
        setFormData(initialValues);
        navigate("/");
        alert(res.payload.message);
      }
    });
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
          {loading ? (
            <>
              <Loading /> Loading{" "}
            </>
          ) : (
            "Sign Up"
          )}
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
