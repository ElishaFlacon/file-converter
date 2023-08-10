import { $api, $userAuthApi } from "../api";


export default class AuthService {
    static async login(email: string, password: string) {
        return $userAuthApi.post(
            '/user/login/',
            {
                user: {
                    email,
                    password,
                }
            }
        );
    }

    static async registration(username: string, email: string, password: string) {
        // делаем через обычный запрос
        return $userAuthApi.post(
            `/user/register/`,
            {
                user: {
                    username,
                    email,
                    password,
                }
            }
        );
    }

    static async confirmEmail(token: string) {
        return await $userAuthApi.get(`/user/email/confirm/${token}`);
    }

    static async logout() {
        const response = await this.checkAuth();
        if (response) {
            return await $api.post(`/user/logout/`);
        }
    }

    static async checkAuth() {
        // делаем простой запрос, потому что все что нужно в куках
        return await $userAuthApi.get(`/user/token/refresh/`);
    }
}