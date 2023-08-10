import React, { FC, useEffect } from 'react';
import classes from './Confirm.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import Text from '../../components/UI/Text/Text';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { userConfirmEmail } from '../../store/action-creators/user';
import { useShowMessage } from '../../hooks/useShowMessage';


const Confirm: FC = () => {
    const { isAuth, data, loading, error } = useTypedSelector(state => state.user);
    const dispatch: any = useDispatch();

    const { token } = useParams();
    const navigate = useNavigate();
    const showMessage = useShowMessage();

    useEffect(() => {
        if (token) {
            setTimeout(() => dispatch(userConfirmEmail(token)), 6000);
        }
    }, [])

    useEffect(() => {
        if (isAuth) {
            navigate('/');
            showMessage(`Ура! Мы подтвердили вашу почту: ${data?.user.email}`, 'success');
        }
    }, [isAuth])


    return (
        <div className={classes.confirm}>
            <Text size='xl'>Осталось совсем чуть чуть 😌</Text>
            <Text size='xs'>✨ Сейчас произойдет магия и мы подтвердим вашу почту ✨</Text>
            <Text size='sm'>Пожалуйста не покидайте эту страницу! Мы сами вас переместим 😉</Text>
        </div>
    );
}


export default Confirm;