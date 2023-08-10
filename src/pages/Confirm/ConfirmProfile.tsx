import React, { FC, useRef, useState } from 'react';
import classes from './Confirm.module.css';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/UI/Text/Text';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useShowMessage } from '../../hooks/useShowMessage';
import { Button, FormInstance } from 'rsuite';
import FormInputList from '../../components/FormInputList/FormInputList';
import { confirmProfileModel } from '../../models';
import AuthService from '../../service/Auth.service';
import { Email, UserBadge } from '@rsuite/icons';


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
        label: <>< Email /> Электронная почта</>,
        rest: {
            type: "text",
        },
    },
]


const ConfirmProfile: FC = () => {
    const { isAuth, data, loading, error } = useTypedSelector(state => state.user);

    const dataInputs = {
        username: data?.user.username || '',
        email: data?.user.email || '',
    }

    const [formValue, setFormValue] = useState(dataInputs);
    const formRef = useRef<FormInstance<Record<string, any>>>(null);

    const showMessage = useShowMessage();
    const navigate = useNavigate();

    const handleSubmit = () => {
        AuthService.update({ user: formValue });
        showMessage('Ваш профиль был изменен!', 'success');
        navigate('/');
    }

    const formButtons = [
        <Button appearance='primary' key='0' onClick={handleSubmit}>Изменить</Button>,
    ]


    return (
        <div className={classes.confirm}>
            <Text size='df'>Изменение профиля</Text>
            <FormInputList
                formValue={formValue}
                setFormValue={setFormValue}
                formRef={formRef}
                formInputs={formInputs}
                formButtons={formButtons}
                model={confirmProfileModel}
            />
        </div>
    );
}


export default ConfirmProfile;