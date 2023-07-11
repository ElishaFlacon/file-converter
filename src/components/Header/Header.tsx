import React, { FC } from 'react';
import { Navbar, Nav, FlexboxGrid } from 'rsuite';
import classes from './Header.module.css';
import Icon from '../UI/Icon/Icon';
import FlexGridList from '../FlexGridList/FlexGridList';
import { Link } from 'react-router-dom';
import { fromPdfList, toPdfList } from '../../config';


const Header: FC = () => {
    return (
        <Navbar className={classes.header}>
            <div className='container'>
                <Nav>
                    <Link to='/'>
                        <Nav.Item as='div'>
                            <Icon picture={'pdf.svg'} />
                        </Nav.Item>
                    </Link>
                    <Link to='/about'>
                        <Nav.Item as='div'>
                            О нас
                        </Nav.Item>
                    </Link>
                    <Nav.Menu trigger='hover' title="Конвертировать PDF">
                        <FlexboxGrid className={classes.flex_box}>
                            <FlexGridList items={toPdfList} title="Конвертация в PDF" />
                            <FlexGridList items={fromPdfList} title="Преобразовать из PDF" />
                        </FlexboxGrid>
                    </Nav.Menu>
                </Nav>
                <Nav pullRight>
                    <Link to='/login'>
                        <Nav.Item as='div'>
                            Вход
                        </Nav.Item>
                    </Link>
                    <Link to='/registration'>
                        <Nav.Item as='div'>
                            Регистрация
                        </Nav.Item>
                    </Link>
                </Nav>
            </div>
        </Navbar>
    );
}


export default Header;