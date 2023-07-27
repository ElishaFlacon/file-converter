import { UserActionTypes, IUserState, UserAction } from "../../types/User";


const initalState: IUserState = {
    isAuth: false,
    data: null,
    loading: false,
    error: null,
}

const saveUser = (user: string) => {
    localStorage.setItem('user', user);
    localStorage.setItem('isAuth', 'true');
}

const getUser = () => {
    const user = localStorage.getItem('user') || '';
    const auth = localStorage.getItem('isAuth') || '';
    return [user, auth]
}

const removeUser = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuth');
}


export const userReducer = (state: IUserState = initalState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.USER_LOGIN:
            return { isAuth: false, loading: true, error: null, data: null };
        case UserActionTypes.USER_LOGIN_SUCCESS:
            saveUser(action.payload.user.username);
            return { isAuth: true, loading: false, error: null, data: action.payload };
        case UserActionTypes.USER_LOGIN_ERROR:
            return { isAuth: false, loading: false, error: action.payload, data: null };

        case UserActionTypes.USER_REGISTRATION:
            return { isAuth: false, loading: true, error: null, data: null };
        case UserActionTypes.USER_REGISTRATION_SUCCESS:
            saveUser(action.payload.user.username);
            return { isAuth: true, loading: false, error: null, data: action.payload };
        case UserActionTypes.USER_REGISTRATION_ERROR:
            return { isAuth: false, loading: false, error: action.payload, data: null };

        case UserActionTypes.USER_LOGOUT:
            removeUser();
            return { isAuth: false, loading: false, error: null, data: null };

        case UserActionTypes.USER_CHECK_AUTH:
            const [user, auth] = getUser();
            const data = { access_token: '', user: { email: user, username: user } };
            return { isAuth: auth ? Boolean(auth) : false, loading: true, error: null, data: user ? data : null };
        case UserActionTypes.USER_CHECK_AUTH_SUCCESS:
            saveUser(action.payload.user.username);
            return { isAuth: true, loading: false, error: null, data: action.payload };
        case UserActionTypes.USER_CHECK_AUTH_ERROR:
            removeUser();
            return { isAuth: false, loading: false, error: action.payload, data: null };

        default:
            return state;
    }
}