import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Convertation from '../pages/Convertation/Convertation';
import Undefind from '../pages/Undefind/Undefind';
import IRoutes from '../types/Routes';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';


export const routes: IRoutes[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/registration', component: Registration },
    // { path: '/files', component: Files },
    // { path: '/reset', component: Reset },
    { path: '/undefind', component: Undefind },
    { path: '/:convert', component: Convertation },
]