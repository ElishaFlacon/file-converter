import React, { FC } from 'react';
import FlexGridList from '../../components/FlexGridList/FlexGridList';
import { fullPdfList, homeTitle, homeDescription } from '../../config';
import classes from './Home.module.css';
import Text from '../../components/UI/Text/Text';
import { Panel } from 'rsuite';


const Home: FC = () => {
    return (
        <div className={classes.home}>
            <div className={classes.title}>
                <Text size='lg'>{homeTitle}</Text>
                <Text size='sm'>{homeDescription}</Text>
            </div>
            <Panel className={classes.panel} bordered shaded >
                <FlexGridList items={fullPdfList} big />
            </Panel>
        </div>
    );
}


export default Home;