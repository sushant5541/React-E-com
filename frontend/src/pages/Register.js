import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/Auth/RegisterForm';

function Register() {
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
            <RegisterForm />
        </div>
    );
}

export default Register;