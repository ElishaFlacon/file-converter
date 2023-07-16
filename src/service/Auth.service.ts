import { $userAuthApi } from "../api";


export default class AuthService {
    static async login(username: string, password: string) {
        return $userAuthApi.post(
            '/user/login/',
            {
                user: {
                    username,
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

    // logout??

    static async checkAuth() {
        // делаем простой запрос, потому что все что нужно в куках
        return await $userAuthApi.get(`/user/token/refresh/`);
    }
}