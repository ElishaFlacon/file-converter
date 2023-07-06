import axios, { AxiosInstance } from "axios";


export const API_URL: string = 'http://localhost:8000';

export const $api: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});