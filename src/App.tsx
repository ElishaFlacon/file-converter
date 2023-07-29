import React, { FC } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Headers from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/App.css';


const App: FC = () => {
    return (
        <div className='wrapper'>
            <HashRouter>
                <Headers />

                <div className="app">
                    <AppRouter />
                </div>

                <Footer />
            </HashRouter>
        </div>
    );
}


export default App;
