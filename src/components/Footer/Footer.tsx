import React, { FC } from 'react';
import { Button } from 'rsuite';
import classes from './Footer.module.css';
import Text from '../UI/Text/Text';


const Footer: FC = () => {
    return (
        <div className={`${classes.footer} container`}>
            <hr />
            <Button
                appearance="link"
                target='_blank'
                href='https://github.com/ElishaFlacon/file-converter'
            >
                <Text size='mn'>GITHUB</Text>
            </Button>
        </div>
    );
}


export default Footer;