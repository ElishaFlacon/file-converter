import React, { FC } from 'react';
import { Divider, Button, Stack } from 'rsuite';
import { Link, useLocation } from 'react-router-dom';
import { IProfileButtons } from '../../types/ProfileButtons';


interface props {
    buttons: IProfileButtons[];
}

//! КОМПОНЕНТ НИ ГДЕ НЕ ИСПОЛЬЗУЕТСЯ

const ProfileButtons: FC<props> = ({ buttons }) => {
    const { pathname } = useLocation();


    return (
        <Stack divider={<Divider vertical />}>
            {buttons.map(({ title, to }) => {
                return (
                    <Link to={to} key={to}>
                        <Button active={pathname === to} >{title}</Button>
                    </Link>
                );
            })}
        </Stack>
    )
}


export default ProfileButtons;