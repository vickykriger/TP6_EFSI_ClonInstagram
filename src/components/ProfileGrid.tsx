import GridItem from './GridItem';

function ProfileGrid (){
{
    return (
      <div className="profile-grid-container">
        <div className="profile-tabs">
          <button className="tab active">POSTS</button>
          <button className="tab">REELS</button>
          <button className="tab">SAVED</button>
          <button className="tab">TAGGED</button>
        </div>
        <div className="photos-grid">
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </div>
      </div>
    );
  }
}
export default ProfileGrid;