import React, { FC, useMemo, ReactNode } from 'react';
import classes from './Text.module.css';


interface props {
    children: ReactNode;
    size: 'xl' | 'lg' | 'df' | 'xs' | 'sm' | 'mn';
}


const Text: FC<props> = (props) => {
    const { children, size } = props;


    return (
        <div className={`${classes.text} ${classes[size]}`}>
            {children}
        </div>
    )
}


export default Text;