import { useState } from "react";
import "./style.css";

const Search = () => {
    const [search, setSearch] = useState('');
    const searchHandler = (e:any) => {
        e.preventDefault();
        console.log(search)
    }
    return (
        <div className="search-box">
            <div className="search-box-logo">
                <img src="/images/logos/github-logo.png" alt="github logo" />
            </div>
            <div className="search-box-form">
                <form onSubmit={(e)=>searchHandler(e)}>
                    <input type="text" className="search-box-input" value={search} onChange={(e)=>setSearch(e.target.value)} />
                    <button type="submit" className="search-box-button" onClick={(e)=>searchHandler(e)}>Search Github</button>
                </form>
            </div>
        </div>
    )
};

export default Search;