import { Link, Outlet } from "react-router-dom";
import styles from "./profile.module.css";

const navLinks = [
  {
    id: 1,
    title: "About",
    url: "/account",
  },
  {
    id: 2,
    title: "Posts",
    url: "/account/posts",
  },
  {
    id: 3,
    title: "Followers",
    url: "/account/followers",
  },
  {
    id: 4,
    title: "Following",
    url: "/account/following",
  },
  {
    id: 5,
    title: "Likes",
    url: "/account/likes",
  },
];
const ProfileLayout = () => {
  return (
    <section className={styles.profile_layout}>
      <div className={styles.profile_content}>
        <div className={styles.profile_header}>
          <div className={styles.profile_cover}>
            <img
              src="/images/cover.png"
              alt="Cover Image"
              className={styles.cover}
            />
          </div>
          <div className={styles.profile_image}>
            <img
              src="/images/avatar.png"
              alt="Avatar"
              className={styles.avatar}
            />
          </div>
        </div>
        <div className={styles.profile_details}>
          <nav className={styles.tabs_nav}>
            {navLinks.map((link) => (
              <Link key={link.id} className={styles.tabs} to={link.url}>
                {link.title}
              </Link>
            ))}
          </nav>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
