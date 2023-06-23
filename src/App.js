import React from 'react';
import './styles/App.css';
import Headers from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <div className='wrapper'>
            <BrowserRouter>
                <Headers />

                <div className="app">
                    <AppRouter />
                </div>

                <Footer />
            </BrowserRouter>
        </div>
    );
}


export default App;
