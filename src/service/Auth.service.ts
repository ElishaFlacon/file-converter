import axios from "axios";
import $api from "../api";
import { API_URL } from "../config";


export default class AuthService {
    static async login(username: string, password: string) {
        return $api.post(
            '/user/login',
            {
                username,
                password,
            }
        );
    }

    static async registration(username: string, email: string, password: string) {
        return $api.post(
            '/user/register',
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
        // делаем обычный аксиос заапрос чтобы не тянуть за собой аксес токен из интерцептора
        return await axios.get(`${API_URL}/user/refresh`, { withCredentials: true });
    }
}