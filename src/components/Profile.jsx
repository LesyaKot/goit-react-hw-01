

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="wrapper">
      <div className="img-wrapper">
        <img className="user-img" src={image} alt="User avatar" />
        <p className="user-name">{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className="list">
        <li className="list-item">
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className="list-item">
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className="list-item">
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;