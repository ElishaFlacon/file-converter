import React, { FC, useState, useRef } from 'react';
import { Email, CharacterLock } from '@rsuite/icons';
import classes from './Registration.module.css';
import FormInputList from '../../components/FormInputList/FormInputList';
import { Button, FormInstance } from 'rsuite';
import { Link } from 'react-router-dom';
import { registrationModel } from '../../models';
import { useShowMessage } from '../../hooks/useShowMessage';
import Text from '../../components/UI/Text/Text';


const data = {
    email: '',
    password: '',
    verify: '',
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
    },
    {
        name: 'verify',
        label: <><CharacterLock /> Повторите пароль</>,
        rest: {
            type: "password",
            autoComplete: "off",
        },
    },
]


const Registration: FC = () => {
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
        <Button appearance='primary' key='0' onClick={handleSubmit}>Регистрация</Button>,
        <div className={classes.center} key='1'>
            Вы уже зарегистрированы?
            <Link to='/login'>
                <Button appearance='link'>Войти</Button>
            </Link>
        </div>,
    ]


    return (
        <div className={classes.registration}>
            <div className={classes.title}>
                <Text size='df'>Создать учетную запись</Text>
            </div>
            <FormInputList
                formValue={formValue}
                setFormValue={setFormValue}
                formRef={formRef}
                formInputs={formInputs}
                formButtons={formButtons}
                model={registrationModel}
            />
        </div>
    );
}


export default Registration;