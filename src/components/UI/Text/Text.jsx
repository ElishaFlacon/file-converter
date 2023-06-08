import React, { useMemo } from 'react';
import classes from './Text.module.css';


function Text({ children, size = 'df' }) {
    const style = useMemo(() => {
        if (size === 'lg') {
            return classes.lg;
        }
        if (size === 'sm') {
            return classes.sm;
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