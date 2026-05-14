import UserProfileMini from './UserProfileMini';
import SuggestionsList from './SuggestionsList';
import FooterLinks from './FooterLinks';

function SuggestionsBar (){
  {
    return (
      <div className="suggestions-container">
        <UserProfileMini />
        <SuggestionsList />
        <FooterLinks />
      </div>
    );
  }
}
export default SuggestionsBar;