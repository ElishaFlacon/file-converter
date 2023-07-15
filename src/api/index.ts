import axios, { AxiosInstance } from "axios";
import { API_URL } from "../config";


export const $api: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
});

export const $userAuthApi: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});