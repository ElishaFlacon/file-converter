import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/User";
import AuthService from "../../service/Auth.service";


export const userLogin = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.USER_LOGIN });

            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.access_token);

            dispatch({
                type: UserActionTypes.USER_LOGIN_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: UserActionTypes.USER_LOGIN_ERROR,
                payload: 'error on login'
            });
        }
    }
}

export const userRegistration = (username: string, email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.USER_REGISTRATION });

            const response = await AuthService.registration(username, email, password);
            // localStorage.setItem('token', response.data.access_token);

            dispatch({
                type: UserActionTypes.USER_REGISTRATION_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: UserActionTypes.USER_REGISTRATION_ERROR,
                payload: 'error on registration'
            });
        }
    }
}

export const userConfirmEmail = (token: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.USER_LOGIN });

            const response = await AuthService.confirmEmail(token);

            dispatch({
                type: UserActionTypes.USER_LOGIN_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: UserActionTypes.USER_LOGIN_ERROR,
                payload: 'error on login'
            });
        }
    }
}

export const userCheckAuth = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.USER_CHECK_AUTH });

            const response = await AuthService.checkAuth();
            localStorage.setItem('token', response.data.access_token);

            dispatch({
                type: UserActionTypes.USER_CHECK_AUTH_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: UserActionTypes.USER_CHECK_AUTH_ERROR,
                payload: 'error on check auth'
            });
        }
    }
}

export const userLogout = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            dispatch({ type: UserActionTypes.USER_LOGOUT });
        } catch (error) {
            console.error('woops');
        }
    }
}