import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Convertation from '../pages/Convertation/Convertation';
import Undefind from '../pages/Undefind/Undefind';
import IRoutes from '../types/Routes';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Forgot from '../pages/Reset/Forgot';
import Profile from '../pages/Profile/Profile';
import ConfirmEmail from '../pages/Confirm/ConfirmEmail';
import ConfirmPassword from '../pages/Confirm/ConfirmPassword';
import ConfirmProfile from '../pages/Confirm/ConfirmProfile';


export const publicRoutes: IRoutes[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/registration', component: Registration },
    { path: '/undefind', component: Undefind },
    { path: '/forgot', component: Forgot },
    { path: '/convertation/:convert', component: Convertation },
    { path: '/confirm/email/:token', component: ConfirmEmail },
    { path: '/confirm/password/:token', component: ConfirmPassword },
]

export const privateRoutes: IRoutes[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/profile', component: Profile },
    { path: '/undefind', component: Undefind },
    { path: '/profile/update', component: ConfirmProfile },
    { path: '/confirm/password/:token', component: ConfirmPassword },
    { path: '/convertation/:convert', component: Convertation },
]