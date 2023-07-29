import React, { FC, ReactNode, ElementType } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'rsuite';
import classes from './HeaderButton.module.css';


interface props {
    children: ReactNode;
    to: string;
    as?: ElementType<any> | undefined;
    onClick?: React.MouseEventHandler<HTMLElement>;
}


const HeaderButton: FC<props> = ({ children, to, as = 'div', onClick }: props) => {
    return (
        <Link to={to}>
            <Nav.Item className={classes.button} as={as} onClick={onClick}>
                {children}
            </Nav.Item>
        </Link>
    );
}

export default HeaderButton;