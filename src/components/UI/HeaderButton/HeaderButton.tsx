import React, { FC, ReactNode, ElementType } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'rsuite';


interface props {
    children: ReactNode;
    to: string;
    as?: ElementType<any> | undefined;
}


const HeaderButton: FC<props> = ({ children, to, as = 'div' }: props) => {
    return (
        <Link to={to}>
            <Nav.Item as={as}>
                {children}
            </Nav.Item>
        </Link>
    );
}

export default HeaderButton;