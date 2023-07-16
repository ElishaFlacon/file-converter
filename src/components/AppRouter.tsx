import React, { FC, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { userCheckAuth } from '../store/action-creators/user';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';


const AppRouter: FC = () => {
    const { isAuth } = useTypedSelector(state => state.user);
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(userCheckAuth());
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