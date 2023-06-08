import React from 'react';
import Text from '../components/UI/Text/Text';
import { aboutText } from '../config';
import '../styles/About.css';


function About() {
    return (
        <div className='about'>
            <Text size='lg'>О нас</Text>
            <Text size='sm'>{aboutText}</Text>
        </div>
    );
}


export default About;