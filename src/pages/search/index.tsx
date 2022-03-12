import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { apiGitHub } from "../../api";
import { user } from '../../store/slices/authSlice';
import { saveRepSearch, saveUserSearch } from "../../store/slices/searchSlice";
import "./style.css";

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector(user);
    const [search, setSearch] = useState('');
    const [searching, setSearching] = useState(false);
    
    const searchHandler = (e:any) => {
        setSearching(true);
        e.preventDefault();
        apiGitHub('https://api.github.com/search/repositories', 'get', token, {
            q: search,
            per_page: 10
        }).then((res) => {
            setSearching(false);
            dispatch(saveRepSearch(res));
            apiGitHub('https://api.github.com/search/users', 'get', token, {
                q: search,
                per_page: 10
            }).then((resUser)=> {
                setSearching(false);
                dispatch(saveUserSearch(resUser));
                navigate('/search/results');
            }).catch((err) => {
                console.log(err);
                setSearching(false);
            });
        }).catch((err) => {
            console.log(err);
            setSearching(false);
        });
    };

    return (
        <div className="search-box">
            <div className="search-box-logo">
                <img src="/images/logos/github-logo.png" alt="github logo" />
            </div>
            <div className="search-box-form">
                <form onSubmit={(e)=>searchHandler(e)}>
                    <input type="text" className="search-box-input" value={search} onChange={(e)=>setSearch(e.target.value)} />
                    <button type="submit" className="search-box-button" onClick={(e)=>searchHandler(e)}>{searching ? 'Searching...' : 'Search Github'}</button>
                </form>
            </div>
        </div>
    )
};

export default Search;