import { UserActionTypes, IUserState, UserAction } from "../../types/User";


const initalState: IUserState = {
    isAuth: false,
    data: null,
    loading: false,
    error: null,
}

export const userReducer = (state: IUserState = initalState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.USER_LOGIN:
            return { isAuth: false, loading: true, error: null, data: null };
        case UserActionTypes.USER_LOGIN_SUCCESS:
            return { isAuth: true, loading: false, error: null, data: action.payload };
        case UserActionTypes.USER_LOGIN_ERROR:
            return { isAuth: false, loading: false, error: action.payload, data: null };

        case UserActionTypes.USER_REGISTRATION:
            return { isAuth: false, loading: true, error: null, data: null };
        case UserActionTypes.USER_REGISTRATION_SUCCESS:
            return { isAuth: true, loading: false, error: null, data: action.payload };
        case UserActionTypes.USER_REGISTRATION_ERROR:
            return { isAuth: false, loading: false, error: action.payload, data: null };

        case UserActionTypes.USER_CHECK_AUTH:
            return { isAuth: false, loading: true, error: null, data: null };
        case UserActionTypes.USER_CHECK_AUTH_SUCCESS:
            return { isAuth: true, loading: false, error: null, data: action.payload };
        case UserActionTypes.USER_CHECK_AUTH_ERROR:
            return { isAuth: false, loading: false, error: action.payload, data: null };

        default:
            return state;
    }
}