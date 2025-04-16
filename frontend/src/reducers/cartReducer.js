const initialState = {
    items: [], // Array to store cart items
    total: 0   // Total price
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if(existingItem) {
                // If item exists, increase quantity
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    total: state.total + action.payload.price
                };
            } else {
                // Add new item with quantity 1
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                    total: state.total + action.payload.price
                };
            }
            
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                total: state.total - (action.payload.price * action.payload.quantity)
            };
            
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
                total: state.items.reduce((sum, item) => 
                    sum + (item.price * (item.id === action.payload.id 
                        ? action.payload.quantity 
                        : item.quantity)), 0)
            };
            
        default:
            return state;
    }
};

export default cartReducer;