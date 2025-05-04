import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Account from "./account";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={style.navbar}>
      <div className={style.nav_container}>
        <div className={style.logo}>
          <Link className={style.logo_link} to="/">
            DevlyMedia
          </Link>
        </div>
        <nav className={style.nav}>
          <Link className={style.nav_links} to="/post/new">
            Create Post
          </Link>
          {isOpen ? (
            <Account setIsOpen={setIsOpen} />
          ) : (
            <FaUserCircle size={30} onClick={() => setIsOpen(true)} />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
