import '../index.css';
function UserSuggestionsList (){
{
    return (
      <div className="suggestion-item">
        <img src="" alt="Avatar sugerido" />
        <div className="suggestion-info">
          <span className="username">usuario_sugerido</span>
          <span className="reason">Followed by alguien...</span>
        </div>
        <button className="follow-btn">Follow</button>
      </div>
    );
  }
}
export default UserSuggestionsList;