import { connect } from "react-redux";
import { searchToggle } from "../redux/actions/siteSettings";

const SearchButton = ({ showSearchButton, searchToggle }) => {
  const handleSearchClick = (e) => {
    e.preventDefault();
    searchToggle(false);
  };

  // Only render the button if showSearchButton is true
  return showSearchButton ? (
    <a
      href="#"
      className="metaportal_fn_search hold"
      onClick={handleSearchClick}
    >
      <span className="icon">
        <img src="/svg/loupe.svg" alt="" className="fn__svg" />
      </span>
    </a>
  ) : null;
};

export default connect(null, { searchToggle })(SearchButton);
