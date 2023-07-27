import React, { FC } from 'react';
import Text from '../../components/UI/Text/Text';
import { aboutText } from '../../config';
import classes from './About.module.css';


const About: FC = () => {
    return (
        <div className={classes.about}>
            <Text size='lg'>О нас</Text>
            <Text size='sm'>{aboutText}</Text>
            <img src={require('../../assets/love.jpg')} style={{ maxWidth: 800 }} />
        </div>
    );
}


export default About;