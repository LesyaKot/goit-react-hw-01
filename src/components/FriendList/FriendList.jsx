import FriendListItem from "../../components/FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={styles["friends-wrapper"]}>
      <ul className={styles["friends-list"]}>
        {friends.map((friend) => (
          <li key={friend.id} className={styles["friends-list-item"]}>
            <FriendListItem
  avatar={friend.avatar}
  name={friend.name}
  isOnline={friend.isOnline}
  className={`${styles["friend-status"]} ${
    friend.isOnline ? styles["online"] : styles["offline"]
  }`}
>
  {friend.isOnline ? "Online" : "Offline"}
</FriendListItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
