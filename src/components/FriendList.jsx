
export default function FriendList({ friends }) {
    return (
      <div>
        <ul className="friends-list">
          {friends.map((friend) => (
            <li key={friend.id} className="friends-list-item">
              <img src={friend.avatar} alt="Avatar" width="48" />
              <p>Friend name: {friend.name}</p>
              <p>Friend status: {friend.isOnline ? 'Online' : 'Offline'}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }


