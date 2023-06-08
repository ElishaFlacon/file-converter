import React from 'react';
import { Navbar, Nav, FlexboxGrid } from 'rsuite';
import '../styles/Header.css';
import Icon from './UI/Icon/Icon';
import GridList from './GridList';


function Header() {
    const toPdfList = [
        { title: 'JPG в PDF', image: <Icon picture={'image.svg'} />, link: '/jpg-pdf' },
        { title: 'WORD в PDF', image: <Icon picture={'doc.svg'} />, link: '/docx-pdf' },
        { title: 'POWERPOINT в PDF', image: <Icon picture={'ppt.svg'} />, link: '/pptx-pdf' },
        { title: 'EXCEL в PDF', image: <Icon picture={'xls.svg'} />, link: '/xlsx-pdf' },
        { title: 'HTML в PDF', image: <Icon picture={'html.svg'} />, link: '/html-pdf' },
    ]

    const fromPdfList = [
        { title: 'PDF в JPG', image: <Icon picture={'image.svg'} />, link: '/pdf-jpg' },
        { title: 'PDF в WORD', image: <Icon picture={'doc.svg'} />, link: '/pdf-docx' },
        { title: 'PDF в POWERPOINT', image: <Icon picture={'ppt.svg'} />, link: '/pdf-pptx' },
        { title: 'PDF в EXCEL', image: <Icon picture={'xls.svg'} />, link: '/pdf-xlsx' },
    ]


    return (
        <Navbar className='header'>
            <div className='container'>
                <Navbar.Brand>
                    <Icon picture={'temp.svg'} />
                </Navbar.Brand>

                <Nav>
                    <Nav.Item>О НАС</Nav.Item>

                    <Nav.Menu trigger='hover' title="КОНВЕРТИРОВАТЬ PDF">
                        <FlexboxGrid className='header__flex-box'>
                            <GridList items={toPdfList} title="КОНВЕРТАЦИЯ В PDF" />
                            <GridList items={fromPdfList} title="ПРЕОБРАЗОВАТЬ ИЗ PDF" />
                        </FlexboxGrid>
                    </Nav.Menu>
                </Nav>
            </div>
        </Navbar>
    );
}


export default Header;