export interface IUser {
    username: string,
    email: string,
    country: string,
}

export interface IUserResponse {
    access_token: string;
    user: IUser;
}

export interface IUserRegistrationResponse {
    message: string;
}

export interface IUserState {
    data: IUserResponse | null;
    isAuth: boolean;
    loading: boolean;
    error: string | null;
    message: string | null;
}


export enum UserActionTypes {
    USER_LOGIN = 'USER_LOGIN',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',

    USER_REGISTRATION = 'USER_REGISTRATION',
    USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS',
    USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR',

    USER_CHECK_AUTH = 'USER_CHECK_AUTH',
    USER_CHECK_AUTH_SUCCESS = 'USER_CHECK_AUTH_SUCCESs',
    USER_CHECK_AUTH_ERROR = 'USER_CHECK_AUTH_ERROR',

    USER_LOGOUT = 'USER_LOGOUT',
}


interface IUserLoginAction {
    type: UserActionTypes.USER_LOGIN;
}

interface IUserLoginSuccessAction {
    type: UserActionTypes.USER_LOGIN_SUCCESS;
    payload: IUserResponse;
}

interface IUserLoginErrorAction {
    type: UserActionTypes.USER_LOGIN_ERROR;
    payload: string;
}

type TUserLogin = IUserLoginAction | IUserLoginSuccessAction | IUserLoginErrorAction;


interface IUserRegistrationAction {
    type: UserActionTypes.USER_REGISTRATION;
}

interface IUserRegistrationSuccessAction {
    type: UserActionTypes.USER_REGISTRATION_SUCCESS;
    payload: IUserRegistrationResponse;
}

interface IUserRegistrationErrorAction {
    type: UserActionTypes.USER_REGISTRATION_ERROR;
    payload: string;
}

type TUserRegistration = IUserRegistrationAction | IUserRegistrationSuccessAction | IUserRegistrationErrorAction;


interface IUserCheckAuthAction {
    type: UserActionTypes.USER_CHECK_AUTH;
}

interface IUserCheckAuthSuccessAction {
    type: UserActionTypes.USER_CHECK_AUTH_SUCCESS;
    payload: IUserResponse;
}

interface IUserCheckAuthErrorAction {
    type: UserActionTypes.USER_CHECK_AUTH_ERROR;
    payload: string;
}

type TUserCheckAuth = IUserCheckAuthAction | IUserCheckAuthSuccessAction | IUserCheckAuthErrorAction;


interface IUserLogout {
    type: UserActionTypes.USER_LOGOUT;
}


export type UserAction = TUserLogin | TUserRegistration | TUserCheckAuth | IUserLogout;
