import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Convertation from '../pages/Convertation/Convertation';
import Undefind from '../pages/Undefind/Undefind';
import IRoutes from '../types/Routes';


export const routes: IRoutes[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/undefind', component: Undefind },
    { path: '/:convert', component: Convertation },
]