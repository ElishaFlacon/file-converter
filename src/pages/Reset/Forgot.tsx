import React, { FC, useState, useRef } from 'react';
import { Email, ArowBack } from '@rsuite/icons';
import classes from './Forgot.module.css';
import FormInputList from '../../components/FormInputList/FormInputList';
import { Button, FormInstance } from 'rsuite';
import { emailModel } from '../../models';
import { useShowMessage } from '../../hooks/useShowMessage';
import { Link } from 'react-router-dom';
import Text from '../../components/UI/Text/Text';


const data = {
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
]


const Forgot: FC = () => {
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
        <Button key='1' appearance='primary' onClick={handleSubmit}>Отправить</Button>,
        <Link key='2' to='/login'>
            <Button appearance='link'> <ArowBack /> Назад</Button>
        </Link>,
    ]


    return (
        <div className={classes.reset}>
            <div className={classes.title}>
                <Text size='df'>Сбросить пароль</Text>
            </div>
            <FormInputList
                formValue={formValue}
                setFormValue={setFormValue}
                formRef={formRef}
                formInputs={formInputs}
                formButtons={formButtons}
                model={emailModel}
            />
        </div>
    );
}


export default Forgot;