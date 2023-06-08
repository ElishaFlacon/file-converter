import React from 'react';
import '../styles/Footer.css';
import { Button } from 'rsuite';


function Footer() {
    return (
        <div className='footer container'>
            <hr />
            <Button appearance="link" target='_blank' href='https://github.com/ElishaFlacon/file-converter'>
                GITHUB
            </Button>
        </div>
    );
}


export default Footer;