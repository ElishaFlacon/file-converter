import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/User";
import AuthService from "../../service/Auth.service";


export const userLogin = (username: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.USER_LOGIN });

            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response.data.acces_token);

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
            localStorage.setItem('token', response.data.acces_token);

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

export const userCheckAuth = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.USER_CHECK_AUTH });

            const response = await AuthService.checkAuth();
            localStorage.setItem('token', response.data.acces_token);

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