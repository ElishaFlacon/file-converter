import React, { FC, useState, useRef, useEffect } from 'react';
import { Email, CharacterLock } from '@rsuite/icons';
import classes from './Login.module.css';
import FormInputList from '../../components/FormInputList/FormInputList';
import { Button, ButtonToolbar, FormInstance } from 'rsuite';
import { Link } from 'react-router-dom';
import { loginModel } from '../../models';
import { useShowMessage } from '../../hooks/useShowMessage';
import Text from '../../components/UI/Text/Text';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { userLogin } from '../../store/action-creators/user';


const inputsData = {
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
    const { isAuth, data, loading, error } = useTypedSelector(state => state.user);
    const dispatch: any = useDispatch();

    const [formValue, setFormValue] = useState(inputsData);
    const formRef = useRef<FormInstance<Record<string, any>>>(null);
    const showMessage = useShowMessage();

    const handleSubmit = () => {
        if (!formRef.current?.check()) {
            showMessage('Заполните форму!', 'error')
            return;
        }

        dispatch(userLogin(formValue.email, formValue.password));
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

    useEffect(() => {
        if (error === 'error on login') {
            showMessage('Вы ввели не верный логин или пароль!', 'error');
        }
    }, [error])


    return (
        <div className={classes.login}>
            <div className={classes.title}>
                <Text size='df'>Вход в вашу учетную запись</Text>
            </div>
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