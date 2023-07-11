import React, { FC } from 'react';
import { Email, CharacterLock } from '@rsuite/icons';
import classes from './Login.module.css';
import FormInputList from '../../components/FormInputList/FormInputList';
import { Button, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';


const Login: FC = () => {
    return (
        <div className={classes.login}>
            <FormInputList
                data={{
                    password: '',
                    email: '',
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
                    }
                ]}

                formButtons={[
                    <ButtonToolbar key='0'>
                        <Button appearance='primary'>Войти</Button>
                        <Link to='/reset'>
                            <Button appearance='link'>Забыли свой пароль?</Button>
                        </Link>
                    </ButtonToolbar>,
                    <div className={classes.center} key='2'>
                        У Вас нет учётной записи?
                        <Link to='/registration'>
                            <Button appearance='link'>Создать учетную запись</Button>
                        </Link>
                    </div>,
                ]}
            />
        </div>
    );
}


export default Login;