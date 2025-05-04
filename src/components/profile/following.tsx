import styles from "./profile.module.css";
const following = [
  {
    id: 1,
    image: "/images/author-1.jpg",
  },
  {
    id: 2,
    image: "/images/author-2.jpg",
  },
  {
    id: 3,
    image: "/images/author-3.jpg",
  },
];

const Following = () => {
  return (
    <section className={styles.tab_sections}>
      <h3>Following List</h3>
      <p className={styles.text_content}>
        This is the list of people you are following them on this platform.
      </p>
      <div className={styles.post_contents}>
        {following.map((following) => (
          <FollowingList key={following.id} following={following.image} />
        ))}
      </div>
    </section>
  );
};

const FollowingList = ({ following }: { following: string }) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_image_container}>
        <img className={styles.post_image} src={following} alt="following 1" />
      </div>
    </div>
  );
};

export default Following;
