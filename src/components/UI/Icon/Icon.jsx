import React, { useMemo } from 'react';
import classes from './Icon.module.css';


function Icon({ picture, size = 'sm' }) {
    const style = useMemo(() => {
        if (size === 'lg') {
            return classes.lg;
        }
        return classes.sm;
    }, [size])


    return (
        <img
            className={style}
            src={require(`../../../assets/${picture}`)}
            alt="?"
        />
    );
}


export default Icon;