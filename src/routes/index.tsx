import { Routes, Route } from "react-router-dom";
import Auth from "../pages/index/index";
import { useSelector } from 'react-redux';
import { isAuth } from '../store/slices/authSlice';
import Layout from "../components/layout";
import Search from "../pages/search";
import SearchResult from "../pages/searchResults";

const AppRoutes = () => {
    const isLoggedIn = useSelector(isAuth);

    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/search" element={
                isLoggedIn ? 
                    <Layout>
                        <Search />
                    </Layout>
                : <h1 style={{ padding: "1rem", textAlign: 'center' }}>You have to loggin to see this page.</h1>
            } />
            <Route path="/search/results" element={
                isLoggedIn ? 
                    <Layout>
                        <SearchResult />
                    </Layout> 
                : <h1 style={{ padding: "1rem", textAlign: 'center' }}>You have to loggin to see this page.</h1>
            } />
            <Route path="*" element={
                <main style={{ padding: "1rem", textAlign: 'center' }}>
                    <h3>404, You are lost, there's nothing here!</h3>
                </main>
            }/>
      </Routes>
    );
};

export default AppRoutes;