import React, { FC, useRef, useState } from 'react';
import classes from './Confirm.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useShowMessage } from '../../hooks/useShowMessage';
import { CharacterLock } from '@rsuite/icons';
import { Button, FormInstance } from 'rsuite';
import FormInputList from '../../components/FormInputList/FormInputList';
import { confirmPasswordModel } from '../../models';
import AuthService from '../../service/Auth.service';
import Text from '../../components/UI/Text/Text';


const dataInputs = {
    new_password: '',
    confirm_password: '',
}

const formInputs = [
    {
        name: 'new_password',
        label: <><CharacterLock /> Новый пароль</>,
        rest: {
            type: "password",
            autoComplete: "off",
        },
    },
    {
        name: 'confirm_password',
        label: <><CharacterLock /> Повторите пароль</>,
        rest: {
            type: "password",
            autoComplete: "off",
        },
    },
]


const ConfirmPassword: FC = () => {
    const [formValue, setFormValue] = useState(dataInputs);
    const formRef = useRef<FormInstance<Record<string, any>>>(null);

    const showMessage = useShowMessage();
    const navigate = useNavigate();
    const { token } = useParams();

    const handleSubmit = () => {
        if (token) {
            AuthService.confirmPassword(token, formValue);
            showMessage('Ваш пароль был изменен!', 'success');
            navigate('/');
        }
    }

    const formButtons = [
        <Button appearance='primary' key='0' onClick={handleSubmit}>Сбросить</Button>,
    ]


    return (
        <div className={classes.confirm}>
            <Text size='df'>Сброс пароля</Text>
            <FormInputList
                formValue={formValue}
                setFormValue={setFormValue}
                formRef={formRef}
                formInputs={formInputs}
                formButtons={formButtons}
                model={confirmPasswordModel}
            />
        </div>
    );
}


export default ConfirmPassword;