import React, { FC } from 'react';
import Text from '../../components/UI/Text/Text';
import { aboutText } from '../../config';
import classes from './About.module.css';


const About: FC = () => {
    return (
        <div className={classes.about}>
            <Text size='lg'>О нас</Text>
            <Text size='sm'>{aboutText}</Text>
            <img
                className={classes.image}
                src="https://s.smallpdf.com/static/0662f6c0c413bac79035.svg"
                alt={require('../../assets/love.jpg')}
            />
        </div>
    );
}


export default About;