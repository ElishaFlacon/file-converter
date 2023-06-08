import React from 'react';
import './styles/App.css';
import Headers from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';


function App() {


    return (
        <BrowserRouter>
            <Headers />

            <div className="app">
                <AppRouter />
            </div>

            <Footer />
        </BrowserRouter>
    );
}


export default App;
