import React from 'react';
import GridList from '../components/GridList';
import { fullPdfList, homeTitle, homeDescription } from '../config';
import '../styles/Home.css';
import Text from '../components/UI/Text/Text';
import { Panel } from 'rsuite';


function Home() {
    return (
        <div className='home'>
            <div className='home__title'>
                <Text size='lg'>{homeTitle}</Text>
                <Text size='sm'>{homeDescription}</Text>
            </div>
            <Panel className='home__panel' bordered shaded >
                <GridList items={fullPdfList} big />
            </Panel>
        </div>
    );
}


export default Home;