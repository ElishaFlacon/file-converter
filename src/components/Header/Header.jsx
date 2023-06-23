import React from 'react';
import { Navbar, Nav, FlexboxGrid } from 'rsuite';
import classes from './Header.module.css';
import Icon from '../UI/Icon/Icon';
import FlexGridList from '../FlexGridList/FlexGridList';
import { Link } from 'react-router-dom';
import { fromPdfList, toPdfList } from '../../config';


function Header() {
    return (
        <Navbar className={classes.header}>
            <div className='container'>
                <Link to='/'>
                    <Navbar.Brand as='div'>
                        <Icon picture={'temp.svg'} />
                    </Navbar.Brand>
                </Link>
                <Nav>
                    <Link to='/about'>
                        <Nav.Item as='div'>
                            О НАС
                        </Nav.Item>
                    </Link>
                    <Nav.Menu trigger='hover' title="КОНВЕРТИРОВАТЬ PDF">
                        <FlexboxGrid className={classes.flex_box}>
                            <FlexGridList size={'sm'} items={toPdfList} title="КОНВЕРТАЦИЯ В PDF" />
                            <FlexGridList size={'sm'} items={fromPdfList} title="ПРЕОБРАЗОВАТЬ ИЗ PDF" />
                        </FlexboxGrid>
                    </Nav.Menu>
                </Nav>
            </div>
        </Navbar>
    );
}


export default Header;