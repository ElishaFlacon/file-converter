import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Convertation from '../pages/Convertation/Convertation';
import Undefind from '../pages/Undefind/Undefind';
import IRoutes from '../types/Routes';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Forgot from '../pages/Reset/Forgot';


export const publicRoutes: IRoutes[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/registration', component: Registration },
    { path: '/forgot', component: Forgot },
    { path: '/undefind', component: Undefind },
    { path: '/convertation/:convert', component: Convertation },
]

export const privateRoutes: IRoutes[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    // { path: '/files', component: Files },
    // { path: '/reset', component: Reset },
    { path: '/undefind', component: Undefind },
    { path: '/convertation/:convert', component: Convertation },
]