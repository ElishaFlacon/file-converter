import React from 'react';
import Text from '../../components/UI/Text/Text';
import { aboutText } from '../../config';
import classes from './About.module.css';


function About() {
    return (
        <div className={classes.about}>
            <Text size='lg'>О нас</Text>
            <Text size='sm'>{aboutText}</Text>
        </div>
    );
}


export default About;