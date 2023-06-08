import React from 'react';
import Text from '../components/UI/Text/Text';
import { aboutText } from '../config';


function About() {
    return (
        <div>
            <Text size='lg'>О нас</Text>
            <Text size='sm'>{aboutText}</Text>
        </div>
    );
}


export default About;