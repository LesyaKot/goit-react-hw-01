import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.wrapper}>
      <div className={styles["img-wrapper"]}>
        <img className={styles["user-img"]} src={image} alt="User avatar" />
        <p className={styles["user-name"]}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles["list-item"]}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles["list-item"]}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles["list-item"]}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
