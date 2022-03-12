import { Routes, Route } from "react-router-dom";
import Auth from "../pages/index";
import { useSelector } from 'react-redux';
import { isAuth } from '../store/slices/authSlice';
import Layout from "../components/layout";
import Search from "../pages/search";

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
                : <h1>You have to loggin to see this page.</h1>
            } />
            <Route path="/search/result" element={
                isLoggedIn ? 
                    <Layout><h1>Search Result Page</h1></Layout> 
                : <h1>You have to loggin to see this page.</h1>
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