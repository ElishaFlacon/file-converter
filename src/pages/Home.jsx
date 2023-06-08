import React from 'react';
import GridList from '../components/GridList';
import { fullPdfList } from '../config';
import '../styles/Home.css';


function Home() {


    return (
        <div className='home'>
            Home
            <GridList items={fullPdfList} big />
        </div>
    );
}


export default Home;