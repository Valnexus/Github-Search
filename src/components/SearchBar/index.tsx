import "./style.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { apiGitHub } from "../../api";
import { user } from '../../store/slices/authSlice';
import { saveRepSearch, saveUserSearch } from "../../store/slices/searchSlice";
import Aux from "../auxiliary";

const SearchBar = (props: {box?:boolean}) => {
    const { box } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { token } = useSelector(user);
    const [search, setSearch] = useState('');
    const [searching, setSearching] = useState(false);
    
    const searchHandler = (e:any) => {
        e.preventDefault();
        setSearching(true);
        apiGitHub('https://api.github.com/search/repositories', 'get', token, {
            q: search,
            per_page: 100
        }).then((res) => {
            setSearching(false);
            dispatch(saveRepSearch(res));
            apiGitHub('https://api.github.com/search/users', 'get', token, {
                q: search,
                per_page: 100
            }).then((resUser)=> {
                setSearching(false);
                dispatch(saveUserSearch(resUser));
                setSearch('');
                if(pathname === "/search/" || pathname === "/search") {
                    navigate('/search/results');
                }                
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
        <Aux>
            { box ?
                <div className="search-box-form">
                    <form onSubmit={(e)=>searchHandler(e)}>
                        <input type="text" className="search-box-input" value={search} onChange={(e)=>setSearch(e.target.value)} />
                        <button type="submit" className="search-box-button" onClick={(e)=>searchHandler(e)}>{searching ? 'Searching...' : 'Search Github'}</button>
                    </form>
                </div>
            : 
                <div className="header-search">
                    <form onSubmit={(e)=>searchHandler(e)}>
                        { searching ? <span>searching...</span> : null }
                        <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
                    </form>
                </div>
            }
        </Aux>
    )
};

export default SearchBar;