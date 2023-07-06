import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from '../router';


const AppRouter: FC = () => {
    return (
        <Routes>
            {routes.map((route) =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                />
            )}

            <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
    );
}


export default AppRouter;