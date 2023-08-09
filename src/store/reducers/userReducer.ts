import { UserActionTypes, IUserState, UserAction, IUser } from "../../types/User";


const initalState: IUserState = {
    isAuth: false,
    data: null,
    loading: false,
    error: null,
    message: null,
}

const saveUser = (user: IUser) => {
    localStorage.setItem('email', user.email);
    localStorage.setItem('username', user.username);
    localStorage.setItem('country', user.country);
    localStorage.setItem('isAuth', 'true');
}

const getUser = () => {
    const email = localStorage.getItem('email') || '';
    const username = localStorage.getItem('username') || '';
    const country = localStorage.getItem('country') || '';
    const isAuth = localStorage.getItem('isAuth') || '';
    return [email, username, country, isAuth];
}

const removeUser = () => {
    localStorage.clear();
}


export const userReducer = (state: IUserState = initalState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.USER_LOGIN:
            return { isAuth: false, loading: true, error: null, data: null, message: null };
        case UserActionTypes.USER_LOGIN_SUCCESS:
            saveUser(action.payload.user);
            return { isAuth: true, loading: false, error: null, data: action.payload, message: null };
        case UserActionTypes.USER_LOGIN_ERROR:
            return { isAuth: false, loading: false, error: action.payload, data: null, message: null };

        case UserActionTypes.USER_REGISTRATION:
            return { isAuth: false, loading: true, error: null, data: null, message: null };
        case UserActionTypes.USER_REGISTRATION_SUCCESS:
            return { isAuth: false, loading: false, error: null, data: null, message: action.payload.message };
        case UserActionTypes.USER_REGISTRATION_ERROR:
            return { isAuth: false, loading: false, error: action.payload, data: null, message: null };

        case UserActionTypes.USER_LOGOUT:
            removeUser();
            return { isAuth: false, loading: false, error: null, data: null, message: null };

        case UserActionTypes.USER_CHECK_AUTH:
            const [email, username, country, isAuth] = getUser();
            const data = { access_token: '', user: { email, username, country } };
            return { isAuth: isAuth ? Boolean(isAuth) : false, loading: true, error: null, data: email ? data : null, message: null };
        case UserActionTypes.USER_CHECK_AUTH_SUCCESS:
            saveUser(action.payload.user);
            return { isAuth: true, loading: false, error: null, data: action.payload, message: null };
        case UserActionTypes.USER_CHECK_AUTH_ERROR:
            removeUser();
            return { isAuth: false, loading: false, error: action.payload, data: null, message: null };

        default:
            return state;
    }
}