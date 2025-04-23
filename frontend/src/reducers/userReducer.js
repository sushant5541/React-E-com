const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: false,
    loading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_REQUEST':
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
            
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                loading: false,
                error: null
            };
            
        case 'PROFILE_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false,
                error: null
            };
            
        case 'REGISTER_FAIL':
        case 'LOGIN_FAIL':
        case 'PROFILE_FAIL':
        case 'LOGOUT':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                loading: false,
                error: action.payload
            };
            
        default:
            return state;
    }
};

export default userReducer;