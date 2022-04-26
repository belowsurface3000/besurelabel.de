const initialState = {
    cookies: null,
    navigation: false,
    contact: false
}

export const usersReducer = (state = initialState,  { type, payload }) => {
    switch (type) {
        case "ACCEPTCOOKIES":
            return {...state, cookies: true};
        case "REJECTCOOKIES":
            return {...state, cookies: false};
        case "REVOKECOOKIES":
            return {...state, cookies: null};
        case "SHOWNAVIGATION":
            return {...state, navigation: true};
        case "HIDENAVIGATION":
            return {...state, navigation: false};
        case "SHOWCONTACTFORM":
            return {...state, contact: true};
        default:
            return state;        
    }
}