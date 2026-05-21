import UserSuggestionsList from './UserSuggestionsList';
import '../index.css';

function SuggestionsList (){
{
    return (
      <div className="suggestions-list-wrapper">
        <div className="suggestions-header">
          <span>Suggested for you</span>
          <button>See All</button>
        </div>
        <div className="suggestions-items">
          <UserSuggestionsList />
          <UserSuggestionsList />
          <UserSuggestionsList />
        </div>
      </div>
    );
  }
}
export default SuggestionsList;