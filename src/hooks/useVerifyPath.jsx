import React, { useEffect } from "react";
import PathService from "../service/Path.service";
import { useNavigate } from "react-router-dom";

// хук проверяет правильность пути
// если путь не правильный, то по стандарту будет переадресация на Undefind
// но можно переать callback и если путь не верный, то он также отработает
export const useVerifyPath = (path, callback) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!PathService.validation(path)) {
            if (callback) {
                callback();
            }

            navigate('/undefind');
        }
    }, [path])
}