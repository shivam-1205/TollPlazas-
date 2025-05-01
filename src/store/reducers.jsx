const initialState = {
    access: null,
    camera: [],
    toll: [],
    customer: [],
    vehicle: [],
    expense: [],
    employee: [],
    wallet: [],
    unauthorized: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACCESS':
            return { ...state, access: action.payload };
        case 'GET_CAMERAS':
            return { ...state, camera: action.payload };
        case 'GET_TOLLS':
            return { ...state, toll: action.payload };
        case 'GET_CUSTOMERS':
            return { ...state, customer: action.payload };
        case 'GET_VEHICLES':
            return { ...state, vehicle: action.payload };
        case 'GET_EXPENSES':
            return { ...state, expense: action.payload };
        case 'GET_EMPLOYEES':
            return { ...state, employee: action.payload };
        case 'GET_WALLET':
            return { ...state, wallet: action.payload };
        case 'GET_UNAUTHORIZED':
            return { ...state, unauthorized: action.payload };
        default:
            return state;
    }
};