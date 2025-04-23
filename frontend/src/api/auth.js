import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Adjust if your backend runs on different port

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            inp_email: credentials.email,
            inp_password: credentials.password
        });
        return response.data; // This will be the token
    } catch (error) {
        throw error.response.data;
    }
};

export const getProfile = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/profile`, {
            headers: {
                'Authorization': token
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};