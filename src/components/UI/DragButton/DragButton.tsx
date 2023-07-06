import React, { FC } from 'react';
import classes from './DragButton.module.css';


interface props {
    children: string;
}


const DragButton: FC<props> = (props) => {
    const { children } = props;

    return (
        <div className={classes.button}>
            {children}
        </div>
    );
}


export default DragButton;