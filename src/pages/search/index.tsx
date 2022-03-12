import "./style.css";
import SearchBar from "../../components/SearchBar";

const Search = () => {
    return (
        <div className="search-box">
            <div className="search-box-logo">
                <img src="/images/logos/github-logo.png" alt="github logo" />
            </div>
            <SearchBar box />            
        </div>
    )
};

export default Search;