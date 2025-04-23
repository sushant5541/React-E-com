import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';

function Login() {
    const { isAuthenticated } = useSelector(state => state.user);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);
    
    return (
        <div>
            <Navbar />
            <LoginForm />
        </div>
    );
}

export default Login;