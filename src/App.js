import React from 'react';
import './styles/App.css';
import Headers from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';


function App() {


    return (
        <BrowserRouter>
            <Headers />

            <div className="app">
                <AppRouter />
            </div>

        </BrowserRouter>
    );
}


export default App;
