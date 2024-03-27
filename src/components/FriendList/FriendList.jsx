import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={styles["friends-wrapper"]}>
      <ul className={styles["friends-list"]}>
        {friends.map((friend) => (
          <li key={friend.id} className={styles["friends-list-item"]}>
            <div className={styles["friends-list-item-wrap"]}>
              <img
                className={styles["friend-avatar"]}
                src={friend.avatar}
                alt="Avatar"
                width="48"
              />
              <p className={styles["friend-name"]}>{friend.name}</p>
              <p
                className={`${styles["friend-status"]} ${
                  friend.isOnline ? styles["online"] : styles["offline"]
                }`}
              >
                {friend.isOnline ? "Online" : "Offline"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
