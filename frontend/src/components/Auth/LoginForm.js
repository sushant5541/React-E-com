import * as authApi from '../api/auth';
import { setAlert } from './alertActions';

// Register User
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: 'REGISTER_REQUEST' });
        
        await authApi.registerUser(userData);
        
        dispatch({ type: 'REGISTER_SUCCESS' });
        dispatch(setAlert('Registration successful! Please log in.', 'success'));
        
    } catch (error) {
        dispatch({
            type: 'REGISTER_FAIL',
            payload: error.message || 'Registration failed'
        });
        dispatch(setAlert(error.message || 'Registration failed', 'danger'));
    }
};

// Login User
export const login = (credentials) => async (dispatch) => {
    try {
        dispatch({ type: 'LOGIN_REQUEST' });
        
        const token = await authApi.loginUser(credentials);
        
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { token }
        });
        
        // Load user profile after login
        await dispatch(loadUser(token));
        
        dispatch(setAlert('Login successful!', 'success'));
        
    } catch (error) {
        dispatch({
            type: 'LOGIN_FAIL',
            payload: error.message || 'Login failed'
        });
        dispatch(setAlert(error.message || 'Login failed', 'danger'));
    }
};

// Load User
export const loadUser = (token) => async (dispatch) => {
    try {
        const user = await authApi.getProfile(token);
        
        dispatch({
            type: 'PROFILE_SUCCESS',
            payload: user
        });
        
    } catch (error) {
        dispatch({
            type: 'PROFILE_FAIL',
            payload: error.message || 'Failed to load user'
        });
    }
};

// Logout User
export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    dispatch(setAlert('Logged out successfully', 'success'));
};