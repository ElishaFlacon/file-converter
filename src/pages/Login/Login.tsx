import React, { FC, useState, useRef } from 'react';
import { Email, CharacterLock } from '@rsuite/icons';
import classes from './Login.module.css';
import FormInputList from '../../components/FormInputList/FormInputList';
import { Button, ButtonToolbar, FormInstance } from 'rsuite';
import { Link } from 'react-router-dom';
import { loginModel } from '../../models';
import { useShowMessage } from '../../hooks/useShowMessage';


const data = {
    password: '',
    email: '',
}

const formInputs = [
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
]


const Login: FC = () => {
    const [formValue, setFormValue] = useState(data);
    const formRef = useRef<FormInstance<Record<string, any>>>(null);
    const showMessage = useShowMessage();

    const handleSubmit = () => {
        if (!formRef.current?.check()) {
            showMessage('Заполните форму!', 'error')
            return;
        }

        console.log(formValue, 'Form Value');
    }

    const formButtons = [
        <ButtonToolbar key='0'>
            <Button appearance='primary' onClick={handleSubmit}>Войти</Button>
            <Link to='/forgot'>
                <Button appearance='link'>Забыли свой пароль?</Button>
            </Link>
        </ButtonToolbar>,
        <div className={classes.center} key='2'>
            У Вас нет учётной записи?
            <Link to='/registration'>
                <Button appearance='link'>Создать учетную запись</Button>
            </Link>
        </div>,
    ]


    return (
        <div className={classes.login}>
            <FormInputList
                formValue={formValue}
                setFormValue={setFormValue}
                formRef={formRef}
                formInputs={formInputs}
                formButtons={formButtons}
                model={loginModel}
            />
        </div>
    );
}


export default Login;