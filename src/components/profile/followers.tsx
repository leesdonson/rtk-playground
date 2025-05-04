import styles from "./profile.module.css";

const followers = [
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

const Followers = () => {
  return (
    <section className={styles.tab_sections}>
      <h3>Followers List</h3>
      <p className={styles.text_content}>
        This is the list of people who are following you on this platform.
      </p>
      <div className={styles.post_contents}>
        {followers.map((follower) => (
          <FollowersList key={follower.id} follower={follower.image} />
        ))}
      </div>
    </section>
  );
};

const FollowersList = ({ follower }: { follower: string }) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_image_container}>
        <img className={styles.post_image} src={follower} alt="follower 1" />
      </div>
    </div>
  );
};

export default Followers;
