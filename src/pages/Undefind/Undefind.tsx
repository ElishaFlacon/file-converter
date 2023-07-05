import React, { FC } from 'react';
import Text from '../../components/UI/Text/Text';
import classes from './Undefind.module.css';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';


const Undefind: FC = () => {
    return (
        <div className={classes.undefind}>
            <Text size='xl'>Упс!</Text>
            <Text size='lg'>Такой страницы не существует 😔</Text>
            <Link className={classes.link} to={'/'}>
                <Button appearance="link">
                    <Text size='sm'>вернуться на главную страницу</Text>
                </Button>
            </Link>
        </div>
    );
}


export default Undefind;