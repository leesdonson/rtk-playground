import styles from "./account.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { PiSignOutFill } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../ui/loading";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { signOut } from "../../app/features/auth/authSlice";

const links = [
  {
    id: 1,
    title: "Profile",
    url: "/account",
    icon: <FaCircleUser />,
  },
  {
    id: 2,
    title: "Settings",
    url: "/account/settings",
    icon: <IoMdSettings />,
  },
];

const Account = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(signOut())
      .then((res) => {
        navigate("/auth/signin");

        console.log(res.payload.message);
        localStorage.removeItem("rtk_user");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.account}>
      <div className={styles.account_header}>
        <FaArrowLeft
          onClick={() => setIsOpen(false)}
          className={styles.account_back}
        />
        <h2 className={styles.account_title}>My Account</h2>
      </div>
      <div className={styles.account_content}>
        <p className={styles.account_email}>acme@example.com</p>
        <div className={styles.account_links_container}>
          {links.map((link) => (
            <Link key={link.id} className={styles.account_links} to={link.url}>
              {link.icon} <span>{link.title}</span>
            </Link>
          ))}

          <div className={styles.account_logout}>
            {loading ? (
              <div className={styles.account_logout_btn}>
                <Loading />
                <span>Logging out...</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleLogout}
                className={styles.account_logout_btn}
              >
                <PiSignOutFill />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
