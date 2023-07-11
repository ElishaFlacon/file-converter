import React, { FC } from 'react';
import { Email, CharacterLock } from '@rsuite/icons';
import classes from './Registration.module.css';
import FormInputList from '../../components/FormInputList/FormInputList';
import { Button } from 'rsuite';
import { Link } from 'react-router-dom';


const Registration: FC = () => {
    return (
        <div className={classes.registration}>
            <FormInputList
                data={{
                    email: '',
                    password: '',
                    verify: '',
                }}

                formInputs={[
                    {
                        name: 'email',
                        label: <><Email /> Электронная почта</>,
                        rest: {
                            type: "email",
                        },
                    },
                    {
                        name: 'password',
                        label: <><CharacterLock /> Пароль</>,
                        rest: {
                            type: "password",
                            autoComplete: "off",
                        },
                    },
                    {
                        name: 'verify',
                        label: <><CharacterLock /> Проверка пароля</>,
                        rest: {
                            type: "password",
                            autoComplete: "off",
                        },
                    },
                ]}

                formButtons={[
                    <Button appearance='primary' key='0'>Регистрация</Button>,
                    <div key='1'>
                        Вы уже зарегистрированы?
                        <Link to='/login'>
                            <Button appearance='link'>Войти</Button>
                        </Link>
                    </div>,
                ]}
            />
        </div>
    );
}


export default Registration;