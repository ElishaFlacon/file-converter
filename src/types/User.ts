export interface IUser {
    username: string,
    email: string,
}

export interface IUserResponse {
    access_token: string;
    user: IUser;
}

export interface IUserState {
    data: IUserResponse | null;
    loading: boolean;
    error: string | null;
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
    payload: IUserResponse;
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


export type UserAction = TUserLogin | TUserRegistration | TUserCheckAuth;
