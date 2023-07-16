import React, { FC } from 'react';
import { Navbar, Nav, FlexboxGrid } from 'rsuite';
import classes from './Header.module.css';
import Icon from '../UI/Icon/Icon';
import FlexGridList from '../FlexGridList/FlexGridList';
import { fromPdfList, toPdfList } from '../../config';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import HeaderButton from '../UI/HeaderButton/HeaderButton';


const Header: FC = () => {
    const { isAuth, data } = useTypedSelector(state => state.user);

    const aboutText = "О нас";
    const loginText = 'Вход';
    const registrationText = 'Регистрация';
    const logoutText = 'Выйти';


    return (
        <Navbar className={classes.header}>
            <div className='container'>
                <Nav>
                    <HeaderButton to='/'>
                        <Icon picture={'pdf.svg'} />
                    </HeaderButton>
                    <HeaderButton to='/about'>
                        {aboutText}
                    </HeaderButton>
                    <Nav.Menu trigger='hover' title="Конвертировать PDF">
                        <FlexboxGrid className={classes.flex_box}>
                            <FlexGridList items={toPdfList} title="Конвертация в PDF" />
                            <FlexGridList items={fromPdfList} title="Преобразовать из PDF" />
                        </FlexboxGrid>
                    </Nav.Menu>
                </Nav>
                <Nav pullRight>
                    {isAuth
                        ?
                        <>
                            <HeaderButton to='/profile'>
                                {data?.user.username}
                            </HeaderButton>
                            <HeaderButton to='/logout'>
                                {logoutText}
                            </HeaderButton>
                        </>
                        :
                        <>
                            <HeaderButton to='/login'>
                                {loginText}
                            </HeaderButton>
                            <HeaderButton to='/registration'>
                                {registrationText}
                            </HeaderButton>
                        </>
                    }
                </Nav>
            </div>
        </Navbar>
    );
}


export default Header;