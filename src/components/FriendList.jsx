export default function FriendList({ friends }) {
  return (
    <div>
      <ul className="friends-list">
        {friends.map((friend) => (
          <li key={friend.id} className="friends-list-item">
            <div className="friends-list-item-wrap">
              <img
                className="friend-avatar"
                src={friend.avatar}
                alt="Avatar"
                width="48"
              />
              <p className="friend-name">{friend.name}</p>
              <p
                className={`friend-status ${
                  friend.isOnline ? "online" : "offline"
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
}
