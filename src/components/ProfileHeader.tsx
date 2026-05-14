function ProfileHeader (){
{
    return (
      <header className="profile-header">
        <div className="profile-avatar-container">
          <img src="" alt="Profile Large Avatar" />
        </div>
        <section className="profile-details">
          <div className="profile-top-row">
            <h2>username</h2>
            <button>Edit Profile</button>
            <button>View Archive</button>
            <button className="settings-btn">⚙️</button>
          </div>
          <ul className="profile-stats">
            <li><span>10</span> posts</li>
            <li><span>100</span> followers</li>
            <li><span>50</span> following</li>
          </ul>
          <div className="profile-bio">
            <span className="fullname">Nombre Real</span>
            <p className="bio-text">Texto de biografía aquí...</p>
            <a href="#">linktr.ee/usuario</a>
          </div>
        </section>
      </header>
    );
  }
}
export default ProfileHeader;