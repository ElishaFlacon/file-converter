import React, { FC, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { userCheckAuth } from '../store/action-creators/user';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';


const AppRouter: FC = () => {
    const { isAuth } = useTypedSelector(state => state.user);
    const dispatch: any = useDispatch();
    const location = useLocation();

    // 1 еффект нужен для обновления аксес токена, при переходах, если пользователь авторизован
    // 2 еффект нужен для проверки авторизованности при перезагрузке страницы
    useEffect(() => {
        if (isAuth) {
            dispatch(userCheckAuth());
        }
    }, [location]);

    useEffect(() => {
        // каждые 60 секунд делаем проверку авторизации
        const timer = setInterval(() => {
            dispatch(userCheckAuth());
        }, 60000);

        dispatch(userCheckAuth());
        return () => clearInterval(timer)
    }, []);


    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                )
                :
                publicRoutes.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                )
            }

            <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
    );
}


export default AppRouter;