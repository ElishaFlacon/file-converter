import React, { FC, useState, useRef, useEffect } from 'react';
import { Email, CharacterLock, UserBadge } from '@rsuite/icons';
import classes from './Registration.module.css';
import FormInputList from '../../components/FormInputList/FormInputList';
import { Button, FormInstance } from 'rsuite';
import { Link, useNavigate } from 'react-router-dom';
import { registrationModel } from '../../models';
import { useShowMessage } from '../../hooks/useShowMessage';
import Text from '../../components/UI/Text/Text';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { userRegistration } from '../../store/action-creators/user';


const dataInputs = {
    username: '',
    email: '',
    password: '',
    verify: '',
}

const formInputs = [
    {
        name: 'username',
        label: <><UserBadge /> Имя пользователя</>,
        rest: {
            type: "text",
        },
    },
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
    const { isAuth, data, loading, error, message } = useTypedSelector(state => state.user);
    const dispatch: any = useDispatch();

    const [formValue, setFormValue] = useState(dataInputs);
    const formRef = useRef<FormInstance<Record<string, any>>>(null);

    const showMessage = useShowMessage();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!formRef.current?.check()) {
            showMessage('Заполните форму!', 'error');
            return;
        }

        dispatch(userRegistration(formValue.username, formValue.email, formValue.password));
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

    useEffect(() => {
        if (error === 'error on registration') {
            showMessage('Возможно этот пользователь уже существует!', 'error');
        }
    }, [error])

    useEffect(() => {
        if (message) {
            navigate('/');
            showMessage(message, 'success');
        }
    }, [message])


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