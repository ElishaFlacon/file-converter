import React from 'react';
import { Navbar, Nav, FlexboxGrid } from 'rsuite';
import '../styles/Header.css';
import Icon from './UI/Icon/Icon';
import GridList from './GridList';
import { Link } from 'react-router-dom';
import { fromPdfList, toPdfList } from '../config';


function Header() {
    return (
        <Navbar className='header'>
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
                        <FlexboxGrid className='header__flex-box'>
                            <GridList size={'sm'} items={toPdfList} title="КОНВЕРТАЦИЯ В PDF" />
                            <GridList size={'sm'} items={fromPdfList} title="ПРЕОБРАЗОВАТЬ ИЗ PDF" />
                        </FlexboxGrid>
                    </Nav.Menu>
                </Nav>
            </div>
        </Navbar>
    );
}


export default Header;