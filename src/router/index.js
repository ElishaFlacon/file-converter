import Home from '../pages/Home';
import About from '../pages/About';
import Convertation from '../pages/Convertation';


export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/:convert', component: Convertation },
]