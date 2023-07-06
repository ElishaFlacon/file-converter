import React, { FC, useMemo } from 'react';
import classes from './Text.module.css';


interface props {
    children: string;
    size?: 'lg' | 'sm' | 'mn' | 'xl' | 'df';
}


const Text: FC<props> = (props) => {
    const { children, size } = props;

    const style = useMemo(() => {
        if (size === 'lg') {
            return classes.lg;
        }
        if (size === 'sm') {
            return classes.sm;
        }
        if (size === 'mn') {
            return classes.mn;
        }
        if (size === 'xl') {
            return classes.xl;
        }
        return classes.df;
    }, [size])


    return (
        <div className={`${classes.text} ${style}`}>
            {children}
        </div>
    )
}


export default Text;