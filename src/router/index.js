import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Convertation from '../pages/Convertation/Convertation';
import Undefind from '../pages/Undefind/Undefind';


export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/undefind', component: Undefind },
    { path: '/:convert', component: Convertation },
]