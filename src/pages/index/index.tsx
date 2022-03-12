import './style.css';
import { useEffect } from 'react';
import LoginGithub from 'react-github-login';
import { apiCall, apiGitHub } from '../../api';
import { useDispatch } from 'react-redux';
import { saveUser, toggleAuth } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { isAuth } from '../../store/slices/authSlice';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLog = useSelector(isAuth);

    useEffect(()=>{
        if(isLog) {
            navigate('/search');
        }
    }, [isLog, navigate]);

    const OnSuccess = (response: any) => {
        apiCall('https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth', 'post', {code: response.code})
        .then((res)=>{ 
            const token = res.data.access_token;
            apiGitHub('https://api.github.com/user', 'get', token, {}).then((res)=>{
                let user = res;
                user.token = token;
                dispatch(saveUser(user));
                dispatch(toggleAuth());
            })
        })
    };
    const OnFailure = (response: any) => console.error(response);

    return (
        <div className="auth-page">
            <LoginGithub
                className="auth-page__button"
                clientId="4f262cc9e20d3043da02"
                buttonText="Login to Github"
                redirectUri=""
                onSuccess={OnSuccess}
                onFailure={OnFailure}
            />
        </div>
    )
};

export default Auth;