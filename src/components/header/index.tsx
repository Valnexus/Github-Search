import './style.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { logOut, user } from '../../store/slices/authSlice';
import { Link, useLocation } from "react-router-dom";
import UserBox from '../UserBox';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar';

const Header = () => {
    const userData = useSelector(user);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchCSS, setSearchCSS] = useState(false);

    useEffect(() => {
        location.pathname === "/search" || location.pathname === "/search/" ? setSearchCSS(true) : setSearchCSS(false) 
    }, [location.pathname]);

    const logOutHandler = () => {
        dispatch(logOut());
        navigate('/');
    };

    return (
        <header className={searchCSS ? "header search-page" : "header"}>
            <div className="header-container">
                <div className="col-3">
                    <div className="header-logo">
                        <Link to='/search'>
                            <img src='/images/logos/github-logo.png' alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="col-3">
                    <SearchBar />
                </div>
                <div className="col-3 align-right">
                    <UserBox user={userData} logOut={()=>logOutHandler()} />                    
                </div>
            </div>                       
        </header>
    )
};

export default Header;