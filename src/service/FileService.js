import React from "react";
import { $api } from "../api";


export default class FileService {
    static async upload(from, to, data) {
        return await $api.post(`/from-to`, data);
    }
}