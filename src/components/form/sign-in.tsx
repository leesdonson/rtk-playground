import { Link, useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import { useEffect, useState } from "react";
import Loading from "../ui/loading";
interface FormData {
  email: string;
  password: string;
}

const defaultValues: FormData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState<FormData>(defaultValues);
  const { email, password } = formData;
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (localStorage.getItem("rtk_user")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("rtk_user", JSON.stringify(formData));
      setLoading(false);
      navigate("/");
    }, 3000);
    console.log(formData);
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_header}>
          <h2 className={styles.form_title}>RTK PG - Sign In</h2>
        </div>
        <div className={styles.form_group}>
          <div className={styles.form_input}>
            <label className={styles.form_label} htmlFor="email">
              Email
            </label>
            <input
              onChange={handleChange}
              autoComplete="off"
              value={email}
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
              onChange={handleChange}
              value={password}
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
              <Loading />
              <span>Signing In...</span>
            </>
          ) : (
            "Sign In"
          )}
        </button>
        <div className={styles.form_footer}>
          <p>Don't already have an account yet?</p>
          <Link className={styles.form_link} to="/auth/signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
